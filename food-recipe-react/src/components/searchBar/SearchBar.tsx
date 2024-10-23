import React, {useState} from "react";
import { SearchBarProps } from "./SearchBarProps.types";
import styles from './SearchBar.module.scss';

const SearchBar: React.FC<SearchBarProps> = ({onSearch}) => {
    const [ searchInput, setSearchInput ] = useState("");

    const handleSearch = () => {
        onSearch(searchInput.trim());
    }

    return (
        <div className={styles.searchSection}>
            <input 
                type="text"
                className={styles.searchInput}
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Enter an ingredient"
            />

            <button className={styles.searchButton} onClick={handleSearch}>Search</button>
        </div>
    )
};

export default SearchBar;