// app/api/delete/[id]/route.ts

import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function DELETE(_: any, { params }: { params: { id: string } }) {
  try {
    await prisma.product.delete({
      where: { id: params.id }, // id is string UUID
    });
    return NextResponse.json({ message: 'Deleted' });
  } catch (error) {
    console.error('Delete failed:', error);
    return NextResponse.json({ error: 'Delete failed' }, { status: 500 });
  }
}
