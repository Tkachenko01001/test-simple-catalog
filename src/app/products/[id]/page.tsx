import type { Metadata, ResolvingMetadata } from 'next'
import { Typography, Container, Card, CardMedia, CardContent, Grid, Button } from "@mui/material";

export const dynamic = 'force-static'
export const revalidate = 20

const baseUrl = 'test-simple-catalog.vercel.app' || "http://localhost:3000";

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id

  const product = await fetch(`https://${baseUrl}/api/products/${id}`).then((res) => res.json())
 
  const previousImages = (await parent).openGraph?.images || []
 
  return {
      title: product.name,
      description: product.description,
    openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages],
    },
  }
}

const ProductDetails = async ({ params }: any) => {
    const response = await fetch(`https://${baseUrl}/api/products/${params.id}`);
    
    if (response.status === 404) {
        return <Typography variant="h1">Товар не знайдено</Typography>;
    }
    const product = await response.json();

    const productSchema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": product.name,
        "image": product.image,
        "description": product.description,
        "sku": product.sku,
        "mpn": product.mpn,
        "brand": {
            "@type": "Brand",
            "name": product.brand
        },
        "offers": {
            "@type": "Offer",
            "url": `https://${baseUrl}/product/${product.id}`,
            "priceCurrency": "UAH",
            "price": product.price,
            "priceValidUntil": "2024-12-31",
            "itemCondition": "https://schema.org/NewCondition",
            "availability": "https://schema.org/InStock",
            "seller": {
                "@type": "Organization",
                "name": "Магазин гаджетів"
            }
        }
    }
    
    return (
        <Container maxWidth="md">
            <Card>
                <CardMedia
                    component="img"
                    height="400"
                    image={product.image}
                    alt={product.name}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {product.description}
                    </Typography>
                </CardContent>
                <CardContent>
                    <Grid container justifyContent="space-between">
                        <Typography variant="body2" color="text.secondary">
                            Ціна: {product.price} грн
                        </Typography>
                        <Button variant="contained" color="primary">
                            Купити
                        </Button>
                    </Grid>
                </CardContent>
            </Card>
            <script type="application/ld+json">
                {JSON.stringify(productSchema)}
            </script>
        </Container>
    )
}

export default ProductDetails;