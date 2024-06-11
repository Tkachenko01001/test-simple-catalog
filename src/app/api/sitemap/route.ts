import { NextResponse } from 'next/server';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const fetchAllProducts = async () => {
  const response = await fetch(`${baseUrl}/api/products?page=1&limit=20`)
  const data = await response.json();
  return data.products
}

export async function GET() {
  try {
    const products = await fetchAllProducts();    
    const allPages = products.length / 5
    const pagesArray = Array.from({ length: allPages }, (_, index) => index + 1);

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${new URL('/', baseUrl).toString()}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      ${products.map((product: { id: number }) => `
       <url>
          <loc>${new URL(`/products/${product.id}`, baseUrl).toString()}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
        </url>
      `).join('')}
      ${pagesArray.map(page => `
       <url>
          <loc>${new URL(`/?page=${page}`, baseUrl).toString()}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
        </url>
      `).join('')}
    </urlset>`

    return new NextResponse(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}