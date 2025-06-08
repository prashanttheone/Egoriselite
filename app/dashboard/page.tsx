'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

type Toast = {
  id: number;
  message: string;
  type: 'success' | 'error' | 'confirm';
  onConfirm?: () => void;
  onCancel?: () => void;
};

export default function DashboardPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [toasts, setToasts] = useState<Toast[]>([]);

  // Unique ID generator for toasts
  const generateToastId = () => Date.now() + Math.random();

  const fetchProducts = async () => {
    const res = await fetch('/api/product/get');
    const data = await res.json();
    setProducts(data);
  };

  // Show toast helper
  const addToast = (toast: Omit<Toast, 'id'>) => {
    const id = generateToastId();
    setToasts((prev) => [...prev, { id, ...toast }]);
    return id;
  };

  // Remove toast by id
  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter(t => t.id !== id));
  };

  const deleteProduct = (id: string) => {
    // Add confirmation toast and keep its ID
    const toastId = addToast({
      message: 'Are you sure you want to delete this product?',
      type: 'confirm',
      onConfirm: async () => {
        removeToast(toastId);
        try {
          const res = await fetch(`/api/delete/${id}`, { method: 'DELETE' });
          if (res.ok) {
            addToast({ message: 'Product deleted successfully!', type: 'success' });
            fetchProducts();
          } else {
            addToast({ message: 'Failed to delete product.', type: 'error' });
          }
        } catch {
          addToast({ message: 'An error occurred while deleting.', type: 'error' });
        }
      },
      onCancel: () => {
        removeToast(toastId);
      }
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6 relative">
      <h1 className="text-3xl font-bold mb-6">Product Dashboard</h1>

      <Link
        href="/upload"
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block hover:bg-blue-600 transition"
      >
        Add New Product
      </Link>

      <table className="w-full border mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id} className="border-t">
              <td className="p-2 truncate max-w-xs">{p.id}</td>
              <td>{p.name}</td>
              <td>₹{p.price}</td>
              <td>
                <Link href={`/dashboard/edit/${p.id}`} className="text-blue-500 mr-4 hover:underline">
                  Edit
                </Link>
                <button
                  onClick={() => deleteProduct(p.id)}
                  className="text-red-500 hover:text-red-700 transition"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Toast container at top right */}
      <div className="fixed top-6 right-6 flex flex-col gap-2 z-50 max-w-xs">
        {toasts.map(({ id, message, type, onConfirm, onCancel }) => (
          <div
            key={id}
            className={`p-4 rounded shadow-lg text-white flex items-center justify-between ${
              type === 'success' ? 'bg-green-600' :
              type === 'error' ? 'bg-red-600' :
              'bg-yellow-600'
            }`}
          >
            <div>{message}</div>

            {type === 'confirm' ? (
              <div className="flex gap-2 ml-4">
                <button
                  onClick={() => onConfirm && onConfirm()}
                  className="bg-white text-yellow-600 px-3 py-1 rounded hover:bg-gray-100 transition"
                >
                  Yes
                </button>
                <button
                  onClick={() => onCancel && onCancel()}
                  className="bg-white text-yellow-600 px-3 py-1 rounded hover:bg-gray-100 transition"
                >
                  No
                </button>
              </div>
            ) : (
              <button
                onClick={() => removeToast(id)}
                className="ml-4 font-bold hover:opacity-70 transition"
                aria-label="Close"
              >
                &times;
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
