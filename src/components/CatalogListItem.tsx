import Link from 'next/link';
import { ListItem, ListItemAvatar, Avatar, ListItemText, Button } from "@mui/material";
import { Product } from "@/types/models/ProductModel";

type Props = {
    item: Product;
};

const CatalogListItem: React.FC<Props> = ({ item }) => {
    return (
        <Link href={`/products/${item.id}`} passHref>
            <ListItem>
                <ListItemAvatar>
                    <Avatar alt={item.name} src={item.image} />
                </ListItemAvatar>
                <ListItemText primary={item.name} />
            </ListItem>
        </Link>
    );
}

export default CatalogListItem;