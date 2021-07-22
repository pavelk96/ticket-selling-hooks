const {Schema, model} = require('mongoose');

const Film = new Schema({
    filmId:  String,
    placesTaken: {type: [], ref: 'favoriteFilms'},});

module.exports = model('Film', Film)