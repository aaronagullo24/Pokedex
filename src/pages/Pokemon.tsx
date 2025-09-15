import { useParams } from 'react-router-dom';

const Pokemon = () =>{
    const {name} = useParams();
    return <div>Pokemon Page {name}</div>
}

export default Pokemon;