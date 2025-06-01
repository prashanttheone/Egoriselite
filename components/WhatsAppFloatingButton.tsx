// components/WhatsAppFloatingButton.tsx
'use client'

import { FaWhatsapp } from 'react-icons/fa'

const WhatsAppFloatingButton = () => {
  const phoneNumber = '+919608507337' // e.g. '919876543210' (country code + number)
  const message = encodeURIComponent('Hello! I would like to chat.')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
        zIndex: 1000,
        cursor: 'pointer',
      }}
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <FaWhatsapp color="white" size={32} />
    </a>
  )
}

export default WhatsAppFloatingButton
