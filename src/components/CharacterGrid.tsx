import { CharacterCard } from "../components";
import Grid from '@mui/material/Grid';
import { ICharacters } from "../redux/characters/models/ICharactersState";

interface IProps {
    characters: ICharacters;
}

function CharacterGrid({ characters }: IProps): JSX.Element {
    return (
        <Grid container spacing={2}>
            {characters &&
                characters.map((character) => {
                    return (
                        <Grid item xs={3} key={character.id} >
                            <CharacterCard character={character} />
                        </Grid>
                    );
                })}
        </Grid>
    );
}

export default CharacterGrid;
