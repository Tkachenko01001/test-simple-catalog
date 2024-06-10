import Link from 'next/link';
import { ListItem, ListItemAvatar, Avatar, ListItemText, Button, Typography } from "@mui/material";
import { Product } from "@/types/models/ProductModel";

type Props = {
    item: Product;
};

const CatalogListItem: React.FC<Props> = ({ item }) => {
    return (
        <ListItem component='div'>
            <Link href={`/products/${item.id}`} passHref>
                <ListItemAvatar>
                    <Avatar alt={item.name} src={item.image} />
                </ListItemAvatar>
                <ListItemText primary={
                    <Typography component='p'>{item.name}</Typography>
                } />
            </Link>
        </ListItem>
    )
}

export default CatalogListItem;