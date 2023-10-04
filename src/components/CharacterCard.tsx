import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ICharacter } from '../redux/characters/models/ICharactersState';
import { useNavigate } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setCharacter, deleteCharacter } from '../redux/characters';

interface IProps {
    character: ICharacter;
}

export default function CharacterCard({ character }: IProps) {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const characters = useAppSelector(({ characters }) => characters.characters)

    const isFav = characters.find(favCharacter => character.id === favCharacter.id)

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={character.image}
                title={character.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {character.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {character.species}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton onClick={() => { dispatch(isFav ? deleteCharacter(character) : setCharacter(character)) }} size="small" aria-label="addToFav">
                    {isFav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
                <Button size="small" onClick={() => { navigate(`/character/${character.id}`) }}>Learn More</Button>
            </CardActions>
        </Card>
    );
}