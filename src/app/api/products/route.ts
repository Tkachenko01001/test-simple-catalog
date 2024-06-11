import { products } from '@/data';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || '5', 10);

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const paginatedProducts = products.slice(startIndex, endIndex);

  return NextResponse.json({
    products: paginatedProducts,
    total: products.length,
  });
}