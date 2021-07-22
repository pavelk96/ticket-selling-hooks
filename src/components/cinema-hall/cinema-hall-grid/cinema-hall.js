import React, { useState, useEffect } from 'react';
import OnePlace from "../one-place/one-place";
import screen from "../../../img/screen.png";
import "./cinema-hall.sass"

function CinemaHall() {


    const [modal, setModal] = useState(false)

    useEffect( () => {
        //Запрос купленных билетов
    })

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
                                           placeId={place}/>
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
            {modal ? modal : null}
            <button className="cinema-hall-ticket-button" onClick={() => setModal(!modal)}>Купить выбранные билеты</button>
        </div>
    );
}

export default CinemaHall;
