'use client'

import { useState } from "react";
import { Grid, Box } from "@mui/material";
import { Product } from "@/types/models/ProductModel";
import CatalogListItem from "./CatalogListItem";
import PaginationRounded from "./Pagination";


type Props = {
    products: Product[],
}

const CatalogList: React.FC<Props> = ({ products }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const startIndex = currentPage - 1
    const endIndex = startIndex + 5
    const totalPages = products.length / 5
    
    return (
        <Box>
            <Grid container component='ul' spacing={1}>
                {products.slice(startIndex, endIndex).map(product => (
                    <Grid component='li' item key={product.id} xs={12} sm={6} md={4} lg={2.4}>
                        <CatalogListItem item={product} key={product.id} />
                    </Grid>
                ))}
            </Grid>
            <PaginationRounded setCurrentPage={setCurrentPage} totalPages={totalPages} />
        </Box>
    )
}

export default CatalogList;