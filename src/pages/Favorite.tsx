import { useAppSelector } from "../redux/hooks";
import Box from '@mui/material/Box';
import { CharacterGrid } from "../components";

function Favorite(): JSX.Element {
    const characters = useAppSelector(({ characters }) => characters.characters)

    return (
        <>
            <h1 style={{color:'white'}}>Favorites Characters</h1>
            <Box sx={{ flexGrow: 1 }}>
                <CharacterGrid characters={characters} />
            </Box>
        </>
    );
}

export default Favorite;
