import React, { useState, useEffect } from 'react';
import OnePlace from "./one-place/one-place";
import screen from "../../img/screen.png";
import "./cinema-hall.sass"

function CinemaHall() {

    const renderHallGrid = () => {
        let gridArr = [];
        for (let i = 1; i <= 9; i++) {
            let placeArr = [];
            for (let n =1; n<=10; n++) {
                const place = `${i.toString()}.${n.toString()}`;
                placeArr = [
                    ...placeArr, <OnePlace key={place}
                                           occupiedPlace={place}
                                           place={n.toString()}/>
                ];
            }
            gridArr = [...gridArr,<div key={i}>Ряд: {i}{placeArr}</div> ]
        }
        return gridArr;
    };

    console.log(renderHallGrid)

    return (
        <div className="cinema-hall">
            <img src={screen} className="screen"/>
            <div className="cinema-hall-grid">
                {renderHallGrid()}
            </div>

        </div>
    );
}

export default CinemaHall;
