import { Grid, Box } from "@mui/material";
import { Product } from "@/types/models/ProductModel";
import CatalogListItem from "./CatalogListItem";


type Props = {
    products: Product[],
}

const CatalogList: React.FC<Props> = ({ products }) => {
    
    return (
        <Box>
            <Grid container component='ul' spacing={1}>
                {products.map(product => (
                    <Grid component='li' item key={product.id} xs={12} sm={6} md={4} lg={2.4}>
                        <CatalogListItem item={product} key={product.id} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default CatalogList;