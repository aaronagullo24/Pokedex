import {useState} from 'react';
import Header from '../componentes/Header';

const Pokemons = () => {
    const [query, setQuery] = useState('Charmander');
    return (
        <>
            <Header query={query} setQuery={setQuery}/>
            <main>
                <h1>Pokemons Page</h1>
            </main>
            <footer></footer>
        </>
    )
}


export default Pokemons;