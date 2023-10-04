import { rickAndMortyApi } from "../redux/services/rickAndMortyApi";
import { CharacterProfile } from "../components";
import { useParams, useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import IconButton from '@mui/material/IconButton';

function Character(): JSX.Element {
    const { id } = useParams();
    const { data } = rickAndMortyApi.useGetCharacterQuery(id ? parseInt(id) : 1)
    const navigate = useNavigate();

    return (
        <div>
            {data ?
                <div>
                    <IconButton color="primary" onClick={() => {navigate(-1) }} size="large" aria-label="Back">
                        <NavigateBeforeIcon />
                    </IconButton>
                    <CharacterProfile character={data} />
                </div>
                : <CircularProgress />}
        </div>
    );
}

export default Character;
