const express = require('express');
const { check } = require('express-validator');
const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { handleValidationErrors, forbiddenError, notFoundError, validateSignup, validatePlaylist } = require('../../utils/validation');
const { User, Song, Album, Comment, Playlist, PlaylistSong } = require('../../db/models');
const { Op } = require("sequelize");
const router = express.Router();

// todo
// res.json === null
router.post('/:playlistId/songs/', requireAuth, async(req, res, next) => {
    const { playlistId } = req.params;
    const { user: { id } } = req;
    const { songId } = req.body;

    const playlist = await Playlist.findByPk(playlistId);
    const song = await Song.findByPk(songId);

    if(!playlist){
        return next(notFoundError('Playlist'));
    };

    if(!song){
        return next(notFoundError('Song'));
    };

    if(playlist.userId === id){
        await playlist.addSong(song);
        const playlistSong = await PlaylistSong.findOne({
            where: {
                 playlistId, songId
            },
            attributes: {
                include: ['id', 'playlistId', 'songId' ],
                exclude: [ 'createdAt', 'updatedAt' ]
            }
        });
        res.json(playlistSong);
    }else{
        return next(forbiddenError());
    }

});

router.put('/:id', requireAuth, validatePlaylist, async (req, res, next) => {
    const { id } = req.params;
    const { user } = req;
    const { name, previewImage } = req.body;

    const playlist = await Playlist.findByPk(id);

    if(!playlist){
        return next(notFoundError('Playlist'));
    }

    if(playlist.userId === user.id){
        await playlist.update({
            name,
            previewImage
        });

        res.json(playlist);
    }else{
        return next(forbiddenError());
    };
});

router.delete('/:id', requireAuth, async (req, res, next) => {
    const { id } = req.params;
    const { user } = req;

    const playlist = await Playlist.findByPk(id);

    if(!playlist){
        return next(notFoundError('Playlist'));
    }

    if(playlist.userId === user.id){
        await playlist.destroy();

        res.json({
            message: "Successfully deleted"
        });
    }else{
        return next(forbiddenError());
    };
});


router.get('/:id', async(req, res, next) => {
    const { id } = req.params;

    const playlist = await Playlist.findByPk(id, {
        include: [
            {
                model: Song,
                through: {
                    attributes: []
                }
            }
        ]
    });

    if(!playlist){
        return next(notFoundError('Playlist'));
    };

    res.json(playlist);
})

router.post('/', requireAuth, validatePlaylist, async(req, res) => {
    const { name, previewImage } = req.body;
    const { user } = req;

    const playlist = await Playlist.create({
        userId: user.id,
        name,
        previewImage
    });

    res.json(playlist);
})


module.exports = router;
