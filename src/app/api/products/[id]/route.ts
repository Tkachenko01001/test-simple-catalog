import { NextResponse } from 'next/server';
import { products } from '@/data';

export async function GET(request: any, { params }: any) {
  const product = products.find(p => p.id === parseInt(params.id));
  if (!product) {
    return NextResponse.json({ message: 'Product not found' }, { status: 404 });
  }
  return NextResponse.json(product);
}