// app/api/products/add/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { uploadImageToCloudinary,testExport  } from '@/lib/cloudinary';
import { createClient } from '@supabase/supabase-js';


console.log(testExport);
// Setup Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
);

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const name = formData.get('name')?.toString() || '';
    const price = formData.get('price')?.toString() || '';
    const category = formData.get('category')?.toString() || '';
    const description = formData.get('description')?.toString() || '';
    const imageFile = formData.get('image') as File | null;

    if (!imageFile || !name || !price || !category || !description) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Convert file to Buffer
    const arrayBuffer = await imageFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Use a filename (you can use name + timestamp or UUID)
    const filename = `${name.replace(/\s+/g, '_')}_${Date.now()}`;

    // Upload image to Cloudinary
    const imageUrl = await uploadImageToCloudinary(buffer, filename);

    // Save product to Supabase
    const { data, error } = await supabase.from('products').insert({
      name,
      price,
      category,
      description,
      image_url: imageUrl,
      created_at: new Date(),
    });

    if (error) {
      console.error(error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'Product added', product: data }, { status: 201 });
  } catch (error) {
    console.error('Failed to add product', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
