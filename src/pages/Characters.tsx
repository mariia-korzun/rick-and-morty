import React from "react";
import { rickAndMortyApi } from "../redux/services/rickAndMortyApi";
import { CharacterGrid } from "../components";
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useParams, useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

function Characters(): JSX.Element {
    // const [page, setPage] = useState(2);
    // const { currentPage } = useAppSelector(({characters}) => characters);
    // const dispatch = useAppDispatch();
    const { page } = useParams();
    const pageNumber = page ? parseInt(page) : 1;
    const navigate = useNavigate();
    const { data, isLoading } = rickAndMortyApi.useGetCharactersQuery(pageNumber)

    const handleChange = (e: React.ChangeEvent<unknown>, number: number): void => {
        navigate(`/characters/${number}`)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <>
            <h1 style={{color:'white'}}>Characters</h1>
            {isLoading ? <CircularProgress /> : <Box sx={{ flexGrow: 1 }}>
                {data && <CharacterGrid characters={data.characters} />}
                <Stack spacing={2}>
                    <Pagination count={data?.pages} page={pageNumber} onChange={handleChange} />
                </Stack>
            </Box>}
        </>
    );
}

export default Characters;
