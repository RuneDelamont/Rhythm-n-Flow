const express = require('express');
const { check } = require('express-validator');
const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { handleValidationErrors, validateSignup } = require('../../utils/validation');
const { User, Song, Album, Comment, PlayList } = require('../../db/models');
const router = express.Router();

router.get('/songs', requireAuth, restoreUser, async (req, res) => {
    const { user } = req;

    const songs = await Song.findAll({
        where: {
            userId: user.id
        }
    });

    res.json({
        Songs: songs
    });
});

router.get('/albums', requireAuth, restoreUser, async (req, res) => {
    const { user } = req;

    const albums = await Album.findAll({
        where: {
            userId: user.id
        }
    });

    res.json(albums);
})

router.get('/', requireAuth, restoreUser, async(req, res) => {
    const { user } = req;

    res.json(user);
})




module.exports = router;
