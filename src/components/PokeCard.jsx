import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import API from "../config/pokeApi";

export const PokeCard = (props) => {
    const {idPokemon} = props;
    const [name, setName] =  React.useState({});
    const [img, setImg] =  React.useState('');

    const getPokemon = async () => {
        const pokemonResponse = await API.get(`/${idPokemon}`);
        const { data } = pokemonResponse;
        const {name, sprites} = data;
        const {front_default} = sprites;
        setName(name);
        setImg(front_default);
        console.log('Testing ', name);
    };

    getPokemon();

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="300"
                image={img}
                alt="image pokemon"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Pokemon: {name}
                </Typography>
                <Typography variant="body" color="text.secondary">
                ID: {idPokemon}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
};