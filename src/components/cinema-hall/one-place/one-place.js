import React, { useState, useEffect } from 'react';
import "./one-place.sass"

function OnePlace(props) {
    const [placeSelected, setPlaceSelected] = useState(false);

    useEffect(() => {

    });

    const placeFreeClass = "one-place";
    const placeSelectedClass = "one-place-selected";

    return (
            <div className={placeSelected ? placeSelectedClass : placeFreeClass} onClick={() => setPlaceSelected(!placeSelected)}>
                {props.place}
            </div>
    );
}

export default OnePlace;
