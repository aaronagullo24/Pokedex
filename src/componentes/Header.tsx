import style from './header.module.css';

type HeaderProps = {
    query?: string;
    setQuery?: (query: string) => void;
}

const Header = ({ query, setQuery }: HeaderProps) => (
    <header className={style.header}>
        <input
            className={style.input}
            type="text"
            placeholder="Search Pokémon..."
            value={query}
            onChange={(e) => {
                const value = e.target.value;
                if (setQuery) setQuery(value);
            }}
        />
    </header>
);

export default Header;