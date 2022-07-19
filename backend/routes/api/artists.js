const express = require('express');
const { check } = require('express-validator');
const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { handleValidationErrors, forbiddenError, notFoundError, validateSignup, validateSong, validateAlbum, validateComment } = require('../../utils/validation');
const { User, Song, Album, Comment, Playlist, sequelize } = require('../../db/models');
const router = express.Router();


router.get('/:userId/songs', async(req, res, next) => {
    const { userId } = req.params;

    const songs = await Song.findAll({
        where:{
            userId
        }
    });

    if(!songs.length){
        return next(notFoundError('Artist'))
    };

    res.json({ Songs: songs });
});

router.get('/:userId/albums', async(req, res, next) => {
    const { userId } = req.params;

    const albums = await Album.findAll({
        where:{
            userId
        }
    });

    if(!albums.length){
        return next(notFoundError('Artist'))
    };

    res.json({ Albums: albums });
});

router.get('/:userId/playlists', async(req, res, next) => {
    const { userId } = req.params;

    const playlists = await Playlist.findAll({
        where:{
            userId
        }
    });

    if(!playlists.length){
        return next(notFoundError('Artist'))
    };

    res.json({ Playlists: playlists });
});


router.get('/:id', async(req, res, next) => {
    const { id } = req.params;

    const songs = await Song.count({
        where: {
            userId: id
        }
    });

    const albums = await Album.count({
        where: { userId: id }
    });

    // const songCount = await songs.count()
    // const albumCount = await albums.count();

    const artist = await User.findByPk(id, {
        attributes: {
        exclude: [ 'firstName', 'lastName' ],
        // include: [
        //     [sequelize.fn('count', sequelize.col("Songs.id")), "totalSongs"],
        //     [sequelize.fn('count', sequelize.col("Albums.id")), "totalAlbums"],
        //     'previewImage',
        // ],
        },
        // include: [
        //     {
        //         model: Song,
        //         attributes: []
        //     },
        //     {
        //         model: Album,
        //         attributes: []
        //     }
        // ],
        // group: 'user.id'
    });

    // const { id , username } = artist

    if(!artist['id']){
        return next(notFoundError('Artist'));
    }

    res.json({
        id: artist.id,
        username: artist.username,
        totalSongs: songs,
        totalAlbums: albums
        });
})

module.exports = router;
