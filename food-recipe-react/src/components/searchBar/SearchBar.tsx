import React, {useState} from "react";
import { SearchBarProps } from "./SearchBarProps.types";

const SearchBar: React.FC<SearchBarProps> = ({onSearch}) => {
    const [ searchInput, setSearchInput ] = useState("");

    const handleSearch = () => {
        onSearch(searchInput.trim());
    }

    return (
        <div>
            <input 
                type="text"
                className="search-input"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            />

            <button className="search-btn" onClick={handleSearch}>Search</button>
        </div>
    )
};

export default SearchBar;