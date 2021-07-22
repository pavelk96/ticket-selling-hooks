
const {Router} = require('express')
const jwt = require('jsonwebtoken')
const router = Router()
const UserInfo = require('../models/User-Info')

// /api/user-info/favorite-films
router.post(
    '/favorite-films',
    async (req, res) => {
        try {
            const {token} = req.body;
            const decoded = jwt.decode(token, {complete: true})
            const user = await UserInfo.findOne({id: decoded.payload.userId});
            if (user.favoriteFilms !== []) {
                res.json(user.favoriteFilms)
            } else {
                res.status(404).json({message: "Нет избранных фильмов"})
            }
        } catch (e) {

        }
    }
)

// /api/user-info/add-favorite-film
router.post(
    '/add-favorite-film',
    async (req, res) => {
        try {
            const {token, filmId, method} = req.body;
            const decoded = jwt.decode(token, {complete: true})
            const userInfo = await UserInfo.findOne({id: decoded.payload.userId});
            if (method === "add") {
                //Добавляем фильм в избранное
                if (userInfo.favoriteFilms != null)
                    userInfo.favoriteFilms = [...userInfo.favoriteFilms, filmId]
                userInfo.save();
                res.status(201).json({message:"Фильм добавлен в избранное"})
            } else if (method === "delete") {
                //удаляем фильм из избранного
                const finIndex = userInfo.favoriteFilms.indexOf(filmId);
                userInfo.favoriteFilms = [
                    ...userInfo.favoriteFilms.slice(0, finIndex),
                    ...userInfo.favoriteFilms.slice(finIndex + 1)
                ]
                userInfo.save();
                res.status(201).json({message:"Фильм удален из избранного"})
            }
        } catch (e) {

        }
    }
)

module.exports = router
