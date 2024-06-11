import { Metadata } from 'next';
import CatalogList from "@/components/CatalogList";
import { Box, Typography } from "@mui/material";
import PaginationRounded from '@/components/Pagination';

export const metadata: Metadata = {
  title: 'Кращі товари 2024',
  description: 'Шукаєте гаджети та іншу техніку? Перегляньте наш новий каталог',
  keywords: ['найкращі товари', 'топ товари', 'рейтинг товарів'],
  robots: 'index, follow',
  openGraph: {
    images: [
      {
        url: 'https://png.pngtree.com/png-clipart/20200722/original/pngtree-chat-store-logo-design-inspiration-png-image_4945665.jpg',
        width: 800,
        height: 600,
      },
      {
        url: 'https://png.pngtree.com/png-clipart/20200722/original/pngtree-chat-store-logo-design-inspiration-png-image_4945665.jpg',
        width: 1800,
        height: 1600,
      },
    ],
  },
};

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const fetchProducts = async (page: number) => {
  const response = await fetch(`${baseUrl}/api/products?page=${page}&limit=5`, { cache: 'no-store' });
  const data = await response.json();
  return data;
};

const Home = async ({ searchParams }: { searchParams: { page: string } }) => {
  const page = parseInt(searchParams.page || '1', 5);
  const { products, total } = await fetchProducts(page);
  const totalPages = Math.ceil(total / 5);

  return (
    <Box>
      <Typography variant="h1" component="h1" gutterBottom>
        Каталог товарів
      </Typography>
      <CatalogList products={products} />
      <PaginationRounded totalPages={totalPages} currentPage={page} />
    </Box>
  );
};

export default Home;
