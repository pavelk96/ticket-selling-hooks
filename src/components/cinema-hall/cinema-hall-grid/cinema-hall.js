import React, { useState, useEffect } from 'react';
import OnePlace from "../one-place/one-place";
import screen from "../../../img/screen.png";
import "./cinema-hall.sass"
import { useDispatch } from "react-redux";
import { getBuyTicketsAction, getPurchasedTicketsAction } from "../../../actions";

function CinemaHall(props) {

    const dispatch = useDispatch();
    const [selectedPlace, setSelectedPlace] = useState([]);
    const handleButTicket = () => {
        dispatch(getBuyTicketsAction.request({ id: props.id, selectedPlaceNumber:selectedPlace, token: localStorage.getItem("token") }))
    }

    useEffect( () => {
        dispatch(getPurchasedTicketsAction.request({ filmId: props.id, token: localStorage.getItem("token") }))
    },[])

    const renderHallGrid = () => {
        let gridArr = [];
        for (let i = 1; i <= 7; i++) {
            let placeArr = [];
            for (let n =1; n<=10; n++) {
                const place = `${i.toString()}.${n.toString()}`;
                placeArr = [
                    ...placeArr, <OnePlace key={place}
                                           occupiedPlace={place}
                                           place={n.toString()}
                                           placeId={place}
                                           setSelectedPlace={setSelectedPlace}
                                           selectedPlace={selectedPlace}
                    />
                ];
            }
            gridArr = [...gridArr,<div className="hall-line" key={i}>Ряд: {i}{placeArr}</div> ]
        }
        return gridArr;
    };


    return (
        <div className="cinema-hall">
            <img src={screen} className="screen" alt="screen" />
            <div className="cinema-hall-grid">
                {renderHallGrid()}
            </div>
            <button className="cinema-hall-ticket-button" onClick={handleButTicket} >Купить выбранные билеты</button>
        </div>
    );
}

export default CinemaHall;
