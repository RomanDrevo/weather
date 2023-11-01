import React from "react";
import {Input} from 'antd';

const {Search} = Input;


const SearchBar = ({handleSearch, value}: { handleSearch: (value: string) => void, value: string }) => {
    return (
        <Search
            type="text"
            value={value}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Enter city"
        />
    )
}

export default SearchBar