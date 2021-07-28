import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./search.sass"
import { fetchFilmByKeyWordAction } from "../../../actions";

function Search() {
    const dispatch = useDispatch();
    let history = useHistory();
    const [ searchValue, setSearchValue ] = useState("")

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchValue(value)
        dispatch(fetchFilmByKeyWordAction.request({value}))
        if (history.location.pathname !== "/search") {
            history.push("/search")
        }
    }

    return (
            <input value={searchValue} onChange={handleSearch} placeholder="Search"/>
    );
}

export default Search;
