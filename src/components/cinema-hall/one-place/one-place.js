import React, { useState, useEffect } from 'react';
import "./one-place.sass"

function OnePlace(props) {
    const [placeSelected, setPlaceSelected] = useState(false);

    useEffect(() => {

    });

    const handlePlace = () => {
        const arr = [...props.selectedPlace, props.placeId]
        setPlaceSelected(!placeSelected)
        props.setSelectedPlace(arr)
    }

    const placeFreeClass = "one-place";
    const placeSelectedClass = "one-place-selected";

    return (
            <div className={placeSelected ? placeSelectedClass : placeFreeClass} onClick={handlePlace}>
                {props.place}
            </div>
    );
}

export default OnePlace;
