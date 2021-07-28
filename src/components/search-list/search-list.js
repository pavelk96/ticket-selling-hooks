import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./search-list.sass"
import Spinner from "../spinner/spinner";

function SearchList() {
    const history = useHistory();
    const filmDataSearch = useSelector(state => state.filmDataSearch)
    const isLoadingFilmDataSearch = useSelector(state => state.isLoadingFilmDataSearch)

    const handleDescription = (id) => {
        history.push(`/film/${id}`)
    }

    const filmsList = (film) => {
        const {nameRu, filmId, posterUrl,  year, filmLength, slogan,
             ratingMpaa, ratingAgeLimits, premiereRu,
            premiereWorld, countries, genres} = film
        return (
            <div className="one-list">
                <div className="search-details-img">
                    <img src={posterUrl} width="400px" height="600px"/>
                </div>
                <div className="search-details-description">
                    <h1>{nameRu}</h1>
                    <p>О фильме:</p>
                    <table className="search-details-about-film">
                        <tr><th className="search-details-about-film-left"/><th></th></tr>
                        {year ? <tr><td>Год производства</td><td> {year} </td></tr> : null}
                        {countries ? <tr><td>Страна</td><td> {(countries || []).map((countries, idx) => <a key={idx}>{countries.country} </a>)} </td></tr> : null}
                        {filmLength ? <tr><td>Продолжительность:</td><td> {filmLength} </td></tr> : null}
                        {genres ?  <tr><td>Жанр</td><td> {(genres || []).map(genres => <a>{genres.genre} </a>)}  </td></tr> : null}
                        {slogan ? <tr><td>Слоган</td><td> {slogan} </td></tr> : null}
                        {premiereRu ? <tr><td>Премьера в Росcии</td><td> {premiereRu} </td></tr> : null}
                        {premiereWorld ? <tr><td>Премьера в мире</td><td> {premiereWorld} </td></tr> : null}
                        {ratingAgeLimits ? <tr><td>Возрастной рейтинг</td><td> {ratingAgeLimits} </td></tr> : null}
                        {ratingMpaa ? <tr><td>Рейтинг MPAA</td><td> {ratingMpaa} </td></tr> : null}
                    </table>
                    <p>
                        {film.description}
                    </p>
                    <div className="search-details-btn">
                        <button onClick={(id) => handleDescription(filmId)}>Подробнее</button>
                        <button>Подробнее</button>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div className="search-list">
            {isLoadingFilmDataSearch ? <Spinner/> : filmDataSearch.map(film => filmsList(film))}
        </div>
    );
}

export default SearchList;
