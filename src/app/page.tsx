import type { Metadata } from 'next'
import CatalogList from "@/components/CatalogList"
import { Box, Typography } from "@mui/material"

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

const baseUrl = 'test-simple-catalog.vercel.app' || "http://localhost:3000";

const Home = async () => {
  const response = await fetch(`https://${baseUrl}/api/products`, { cache: 'no-store' });
  const products = await response.json();

  return (
    <Box>
      <Typography variant="h1" component="h1" gutterBottom>
        Каталог товарів
      </Typography>
      <CatalogList products={products} />
    </Box>
  );
}

export default Home 
