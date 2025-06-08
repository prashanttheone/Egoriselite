import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma'; // Ensure your prisma client is correctly imported

export async function GET() {
  try {
    const products = await prisma.product.findMany(); // replace with actual model
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'An error occurred while retrieving products.' }, { status: 500 });
  }
}
