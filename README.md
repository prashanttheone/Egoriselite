# Egorise Lite - Modern E-Commerce Showcase

A modern e-commerce showcase built with Next.js, featuring a public-facing product catalog and an admin dashboard for product management.

## Features

- 🛍️ Public product catalog with categories
- 🔒 Admin dashboard with authentication
- 📸 Cloudinary integration for image uploads
- 🎨 Modern UI with Tailwind CSS and Framer Motion
- 🚀 Built with Next.js 14 and App Router

## Tech Stack

- **Framework**: Next.js 14
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Image Upload**: Cloudinary
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion

## Prerequisites

- Node.js 18+ and npm
- PostgreSQL database
- Cloudinary account

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="postgresql://your_username:your_password@localhost:5432/egorise_lite"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# Cloudinary
CLOUDINARY_CLOUD_NAME="your_cloud_name"
CLOUDINARY_API_KEY="your_api_key"
CLOUDINARY_API_SECRET="your_api_secret"
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/egorise-lite.git
   cd egorise-lite
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the database:
   ```bash
   npx prisma migrate dev
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
egorise-lite/
├── app/                    # Next.js App Router
│   ├── admin/             # Admin dashboard pages
│   ├── api/               # API routes
│   ├── products/          # Product pages
│   └── layout.tsx         # Root layout
├── components/            # React components
├── lib/                   # Utility functions
├── prisma/               # Database schema
└── public/               # Static assets
```

## Admin Access

Default admin credentials:
- Username: admin
- Password: admin123

**Note**: Change these credentials in production!

## License

MIT 