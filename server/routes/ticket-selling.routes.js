const {Router} = require('express');
const router = Router();
const Film = require('../models/ticket');
const UserInfo = require('../models/User-Info');
const jwt = require('jsonwebtoken');

 //   /api/byu-ticket/byu-ticket
router.post(
    '/byu-ticket',
    async (req, res) => {
        try {
            const {filmId ,selectedPlaceNumber, token} = req.body;
            const decoded = jwt.decode(token, {complete: true});
            const user = await UserInfo.findOne({id: decoded.payload.userId})
            const candidateFilm = await Film.findOne({filmId: filmId})
            const newTicket = [{
                filmId: req.body.filmId,
                byuTicket: [...selectedPlaceNumber]
            }];
            const findIndex = user.purchasedTickets.findIndex(filmTickets => filmTickets.filmId === filmId)

            if (findIndex >= 0) {
                user.purchasedTickets[findIndex].byuTicket = [...user.purchasedTickets[findIndex].byuTicket, ...selectedPlaceNumber];
            }

            if (candidateFilm) {
                candidateFilm.placesTaken = [...candidateFilm.placesTaken,...selectedPlaceNumber];
                await candidateFilm.save();
                await user.save();
                res.status(200).json({message: "Билеты куплены!"})
            } else {
                const film = new Film({filmId, placesTaken: selectedPlaceNumber});
                user.purchasedTickets = [...user.purchasedTickets, ...newTicket];
                await film.save();
                await user.save();
                res.status(200).json({message: "Билеты куплены!"})
            }
        } catch (e) {

        }
    }
)

//   /api/byu-ticket/request-tickets
router.post(
    '/request-tickets',
    async (req, res) => {
        try {
            const {id} = req.body;
            const candidateFilm = await Film.findOne({filmId: id})
            if (candidateFilm) {
                res.status(200).json({filmId: candidateFilm.filmId, placesTaken:candidateFilm.placesTaken})
            } else {
                res.status(201).json({message: "Билеты на фильм еще не покупались"})
            }
        } catch (e) {

        }
    }
)

module.exports = router
