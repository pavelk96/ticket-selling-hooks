import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./search.sass"
import { getFilmByKeyWordAsync } from "../../actions";

function Search() {
    const dispatch = useDispatch();
    let history = useHistory();
    const [ searchValue, setSearchValue ] = useState("")

    const handleSearch = (value) => {
        setSearchValue(value)
        dispatch({type: getFilmByKeyWordAsync, value})
        history.push("/search")
    }

    console.log(searchValue)

    return (
            <input value={searchValue} onChange={(e) => handleSearch(e.target.value)} placeholder="Search"/>
    );
}

export default Search;
