import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ICharacter } from '../redux/characters/models/ICharactersState';

interface IProps {
    character: ICharacter;
}

export default function CharacterProfile({ character }: IProps) {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: '130px' }}>
            <Card>
                <CardMedia
                    sx={{ height: 300, width: 400, margin: 'auto' }}
                    image={character.image}
                    title={character.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {character.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Species: {character.species}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Gender: {character.gender}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Status: {character.status}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Box>
    );
}