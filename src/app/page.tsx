import CatalogList from "@/components/CatalogList";
import { Box, Typography } from "@mui/material"

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
