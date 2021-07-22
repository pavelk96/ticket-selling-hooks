const {Schema, model} = require('mongoose');

const schema = new Schema({
    id: {type: String, unique: true, ref: "id"},
    favoriteFilms: { type: Array, ref: 'favoriteFilms' },
    purchasedTickets: [
        {
            filmId: {type: String, unique: true, ref: "id"},
            byuTicket: { type: Array, ref: 'byuTicket' }
        }
    ]

});

module.exports = model('UserInfo', schema)




