const express = require('express');
const { check } = require('express-validator');
const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { handleValidationErrors, validateSignup } = require('../../utils/validation');
const { User, Song, Album, Comment, PlayList } = require('../../db/models');
const router = express.Router();


router.get('/', async (req, res) => {
    const songs = await Song.findAll();
    res.json(songs);
});

router.get('/me', requireAuth, restoreUser, async (req, res) => {
    const { user } = req;

    const songs = await Song.findAll({
        where: {
            userId: user.id
        }
    });

    res.json(songs);
});

router.get('/:id', async (req, res, next) => {
    const { id } = req.params;

    const song = await Song.findByPk(id, {
        include: Album
    });
    console.log(song);

    if(!song){
        const err = new Error("Song couldn't be found");
        err.status = 404;
        return next(err);
    }

    res.json(song);
});



module.exports = router;
