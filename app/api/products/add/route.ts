// app/api/product/add/route.ts


import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const { name, price, category, description, imageUrl } = data;

    if (!name || !price || !category || !description || !imageUrl) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const priceNum = parseFloat(price);
    if (isNaN(priceNum)) {
      return NextResponse.json({ error: 'Invalid price' }, { status: 400 });
    }

    const product = await prisma.product.create({
      data: {
        name,
        price: priceNum,
        category,
        description,
        imageUrl,
      },
    });
    console.log("product:",product);
    return NextResponse.json({ message: 'Product added', product }, { status: 201 });
  } catch (error) {
    console.error('Error adding product:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
