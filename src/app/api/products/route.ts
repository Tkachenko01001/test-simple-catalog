import { NextResponse } from 'next/server';
import { products } from '@/data';

export async function GET(request: any) {
  return NextResponse.json(products);
}