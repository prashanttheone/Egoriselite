'use client'

import { useState, ChangeEvent, FormEvent } from 'react'

type Product = {
  category: string
  name: string
  price: string
  description: string
  features: string[]
  imageUrl: string
}

export default function UploadPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [uploadMessage, setUploadMessage] = useState('')
  const [productData, setProductData] = useState<Product>({
    category: '',
    name: '',
    price: '',
    description: '',
    features: [''],
    imageUrl: '',
  })
  const [submitMessage, setSubmitMessage] = useState('')

  // Handle product input changes
  function handleInputChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target
    setProductData(prev => ({ ...prev, [name]: value }))
  }

  // Handle features (dynamic list)
  function handleFeatureChange(index: number, value: string) {
    const newFeatures = [...productData.features]
    newFeatures[index] = value
    setProductData(prev => ({ ...prev, features: newFeatures }))
  }

  function addFeature() {
    setProductData(prev => ({ ...prev, features: [...prev.features, ''] }))
  }

  function removeFeature(index: number) {
    const newFeatures = productData.features.filter((_, i) => i !== index)
    setProductData(prev => ({ ...prev, features: newFeatures }))
  }

  // Handle file selection
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setSelectedFile(e.target.files[0])
      setUploadMessage('')
    }
  }

  // Upload image to /api/upload, get back URL, then update imageUrl in productData
  async function uploadImage() {
    if (!selectedFile) {
      setUploadMessage('Please select an image file first.')
      return null
    }
    setUploading(true)
    setUploadMessage('')
    try {
      const formData = new FormData()
      formData.append('file', selectedFile)

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      const data = await res.json()

      if (!res.ok) {
        setUploadMessage(`Upload failed: ${data.error || 'Unknown error'}`)
        setUploading(false)
        return null
      }

      setUploadMessage('Image uploaded successfully!')
      setProductData(prev => ({ ...prev, imageUrl: data.url })) // assuming API returns { url: '...' }
      setUploading(false)
      return data.url
    } catch (error) {
      setUploadMessage('Upload failed: ' + (error as Error).message)
      setUploading(false)
      return null
    }
  }

  // On form submit: upload image if needed, then send all product data to /api/products
  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    setSubmitMessage('')
    if (!productData.name || !productData.category || !productData.price || !productData.description) {
      setSubmitMessage('Please fill all required fields.')
      return
    }

    let imageUrl = productData.imageUrl

    // If no image URL yet but file selected, upload image first
    if (!imageUrl && selectedFile) {
      const uploadedUrl = await uploadImage()
      if (!uploadedUrl) return // upload failed, don't proceed
      imageUrl = uploadedUrl
    }

    if (!imageUrl) {
      setSubmitMessage('Please upload an image.')
      return
    }

    // Prepare product payload
    const payload = {
      ...productData,
      imageUrl,
      features: productData.features.filter(f => f.trim() !== ''),
    }

    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const data = await res.json()

      if (res.ok) {
        setSubmitMessage('Product added successfully!')
        // Optionally reset form
        setProductData({
          category: '',
          name: '',
          price: '',
          description: '',
          features: [''],
          imageUrl: '',
        })
        setSelectedFile(null)
        setUploadMessage('')
      } else {
        setSubmitMessage(`Error: ${data.error || 'Failed to add product'}`)
      }
    } catch (error) {
      setSubmitMessage('Error: ' + (error as Error).message)
    }
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 border rounded-md shadow-md">
      <h1 className="text-3xl font-bold mb-6">Add New Product</h1>

      {/* File Upload */}
      <div className="mb-6">
        <label className="block font-semibold mb-2">Upload Product Image</label>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        {uploadMessage && <p className="mt-2 text-sm text-green-600">{uploadMessage}</p>}
      </div>

      {/* Product Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Category */}
        <div>
          <label htmlFor="category" className="block font-semibold mb-1">
            Category *
          </label>
          <select
            id="category"
            name="category"
            value={productData.category}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="">Select category</option>
            <option value="refrigerators">Refrigerators</option>
            <option value="washing-machines">Washing Machines</option>
            <option value="televisions">Televisions</option>
            <option value="air-coolers">Air Coolers</option>
          </select>
        </div>

        {/* Name */}
        <div>
          <label htmlFor="name" className="block font-semibold mb-1">
            Product Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={productData.name}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        {/* Price */}
        <div>
          <label htmlFor="price" className="block font-semibold mb-1">
            Price (₹) *
          </label>
          <input
            id="price"
            name="price"
            type="text"
            value={productData.price}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="e.g. ₹45999"
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block font-semibold mb-1">
            Description *
          </label>
          <textarea
            id="description"
            name="description"
            value={productData.description}
            onChange={handleInputChange}
            required
            rows={4}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        {/* Features */}
        <div>
          <label className="block font-semibold mb-1">Features</label>
          {productData.features.map((feature, idx) => (
            <div key={idx} className="flex gap-2 mb-2">
              <input
                type="text"
                value={feature}
                onChange={e => handleFeatureChange(idx, e.target.value)}
                className="flex-grow border border-gray-300 rounded px-3 py-2"
                placeholder="Feature description"
              />
              {productData.features.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeFeature(idx)}
                  className="text-red-500 font-bold px-2"
                  aria-label="Remove feature"
                >
                  &times;
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addFeature}
            className="mt-1 text-blue-600 underline"
          >
            + Add feature
          </button>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={uploading}
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {uploading ? 'Uploading...' : 'Add Product'}
        </button>
      </form>

      {submitMessage && (
        <p className={`mt-4 font-semibold ${submitMessage.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
          {submitMessage}
        </p>
      )}
    </div>
  )
}
