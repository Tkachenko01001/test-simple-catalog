import CatalogList from "@/components/CatalogList";
import {Box, Typography} from "@mui/material"

const Home = async () => {
  const response = await fetch(`http://localhost:3000/api/products`, { cache: 'no-store' });
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
