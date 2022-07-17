const express = require('express');
const { check } = require('express-validator');
const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { handleValidationErrors, validateSignup } = require('../../utils/validation');
const { User, Song, Album, Comment, Playlist } = require('../../db/models');
const router = express.Router();

router.get('/songs', requireAuth, async (req, res) => {
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

router.get('/albums', requireAuth, async (req, res) => {
    const { user } = req;

    const albums = await Album.findAll({
        where: {
            userId: user.id
        }
    });

    res.json({
        Albums: albums
    });
});

router.get('/playlists', requireAuth, async(req, res) => {
    const { user: { id } } = req

    const playlists = await Playlist.findAll({
        where: {
            userId: id
        }
    });

    res.json({
        Playlists: playlists
    });
})

router.get('/', requireAuth,  async(req, res) => {
    const { user } = req;
    let safeUser = await user.toSafeObject();

    res.json(safeUser);
})




module.exports = router;
