'use client'

import { useState, useRef, ChangeEvent, FormEvent } from 'react'

type Product = {
  category: string
  name: string
  price: string
  description: string
  features: string[]
  imageUrl: string
}

export default function UploadPage() {
  const fileInputRef = useRef<HTMLInputElement | null>(null)

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
  function handleInputChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
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
      setProductData(prev => ({ ...prev, imageUrl: data.url }))
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
    if (
      !productData.name ||
      !productData.category ||
      !productData.price ||
      !productData.description
    ) {
      setSubmitMessage('Please fill all required fields.')
      return
    }

    let imageUrl = productData.imageUrl

    if (!imageUrl && selectedFile) {
      const uploadedUrl = await uploadImage()
      if (!uploadedUrl) return
      imageUrl = uploadedUrl
    }

    if (!imageUrl) {
      setSubmitMessage('Please upload an image.')
      return
    }

    const payload = {
      ...productData,
      imageUrl,
      features: productData.features.filter(f => f.trim() !== ''),
    }

    try {
      const res = await fetch('/api/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await res.json()

      if (res.ok) {
        // LOG HERE after successful submission
        console.log('Product successfully added:', payload)

        setSubmitMessage('Product added successfully!')
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
        if (fileInputRef.current) {
          fileInputRef.current.value = ''
        }
      } else {
        setSubmitMessage(`Error: ${data.error || 'Failed to add product'}`)
      }
    } catch (error) {
      setSubmitMessage('Error: ' + (error as Error).message)
    }
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 border rounded-md shadow-md">
      <h1 className="text-3xl font-bold mb-8 text-center">Add New Product</h1>

      {/* File Upload */}
      <div className="mb-8">
        <label className="block font-semibold mb-2">Upload Product Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          ref={fileInputRef}
          className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4
            file:rounded file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100
          "
        />
        {uploadMessage && (
          <p
            className={`mt-2 text-sm ${
              uploadMessage.includes('success') ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {uploadMessage}
          </p>
        )}
      </div>

      {/* Product Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Use grid for category + price side by side on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Category */}
          <div>
            <label
              htmlFor="category"
              className="block font-semibold mb-1"
            >
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

          {/* Price */}
          <div>
            <label
              htmlFor="price"
              className="block font-semibold mb-1"
            >
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
            className="w-full border border-gray-300 rounded px-3 py-2 resize-none"
          />
        </div>

        {/* Features */}
        <div>
          <label className="block font-semibold mb-2">Features</label>
          {productData.features.map((feature, idx) => (
            <div
              key={idx}
              className="flex gap-2 mb-3 items-center"
            >
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
                  className="text-red-600 font-bold px-3 py-1 rounded hover:bg-red-100 transition"
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
            className="mt-1 text-blue-600 underline hover:text-blue-800"
          >
            + Add feature
          </button>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={uploading}
            className="mt-6 px-8 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 transition"
          >
            {uploading ? 'Uploading...' : 'Add Product'}
          </button>
        </div>
      </form>

      {submitMessage && (
        <p
          className={`mt-6 font-semibold text-center ${
            submitMessage.includes('success') ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {submitMessage}
        </p>
      )}
    </div>
  )
}
