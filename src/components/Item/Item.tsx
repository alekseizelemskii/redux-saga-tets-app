// import styles from './Item.module.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { Items } from '../../redux/reducers/itemsReducer'
import { memo } from 'react';

interface IProps {
    item: Items
}

const Item: React.FC<IProps> = ({ item }) => {

    return (

        <Box>
        <Card sx={{ maxWidth: 300, minHeight: 300 }}>
            <CardMedia
                component="img"
                height="300"
                width="300"
                image={item.img}
                alt={item.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {item.price}$
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Buy in Amazon</Button>

            </CardActions>
        </Card>
        </Box>

    );
};

export default memo(Item)


