import React from "react";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./movie-details-by-id.sass";
import { fetchFilmByIdAction } from "../../actions";
import Spinner from "../spinner/spinner";
import { useHistory } from "react-router-dom";



function MovieDetailsById({ id }) {
    const history = useHistory();
    const dispatch = useDispatch()
    const filmDataId = useSelector(state => state.filmDataId)
    const isLoadingFilmDataId = useSelector(state => state.false)

    useEffect(() =>{
        dispatch(fetchFilmByIdAction.request(id))
    },[dispatch])

    const {nameRu,  posterUrl,  year, filmLength, slogan,
        description,  ratingMpaa, ratingAgeLimits, premiereRu,
        premiereWorld, countries, genres } = filmDataId

    const byuTicketButton = () => {
        history.push(`/buy-ticket/${id}`)
    }

    return (
        <>
            {isLoadingFilmDataId ? <Spinner/> : <div className="movie-details">
                <div className="movie-details-img">
                    <img src={posterUrl} width="400px" height="600px"/>
                </div>
                <div className="movie-details-description">
                    <h1>{nameRu}</h1>
                    <p>О фильме:</p>
                    <table className="movie-details-about-film">
                        <tr><th className="movie-details-about-film-left"/><th></th></tr>
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
                        {description}
                    </p>
                    <div className="movie-details-btn">
                        <button onClick={byuTicketButton}>Купить билет</button>
                        <button>Добавить в избранное</button>
                    </div>
                </div>
                <div>
                    <h1 className="movie-details-rating">6.3</h1>
                    <button>Оценить</button>
                </div>
            </div>}
        </>
    );
}

export default MovieDetailsById;
