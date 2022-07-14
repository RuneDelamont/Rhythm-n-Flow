const express = require('express');
const { check } = require('express-validator');
const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { handleValidationErrors, validateSignup, validateSong } = require('../../utils/validation');
const { User, Song, Album, Comment, PlayList } = require('../../db/models');
const router = express.Router();


router.post('/:albumId/song', requireAuth, validateSong, async (req, res, next) => {
    const { albumId } = req.params;
    const { user } = req;
    let { title, description, url, imageUrl, previewImage } = req.body;

    const album = await Album.findByPk(albumId);

    if(!album){
        const err = new Error(`Album couldn't be found`)
        err.status = 404;
        return next(err)
    }


    if(album.userId === user.id){
         const song = await album.createSong({
            userId: album.userId,
            title,
            description,
            url,
            imageUrl,
            previewImage: album.previewImage
         });
         res.status(201);
         res.json(song);
    }else{
        const err = new Error('Not Authorized');
        err.status = 403;
        err.title = 'Forbidden';
        return next(err);
    }

});

router.put('/:id', requireAuth, validateSong, async(req, res, next) => {
    const { id } = req.params;
    const { user } = req;
    const { title, description, url, previewImage } = req.body;

    const song = await Song.findByPk(id);

    if(!song){
        const err = new Error(`Song couldn't be found`);
        err.status = 404;
        return next(err);
    }

    if(user.id === song.userId){
        await song.update({
            title,
            description,
            url,
            previewImage
        });

        res.json(song);
    }else{
        const err = new Error('Not Authorized');
        err.status = 403;
        err.title = 'Forbidden';
        return next(err);
    }


});

router.delete('/:id', requireAuth, async(req, res, next) => {
    const { id } = req.params;
    const { user } = req;

    const song = await Song.findByPk(id);

    if(!song){
        const err = new Error(`Song couldn't be found`);
        err.status = 404;
        return next(err);
    }

    if(user.id === song.userId){
        await song.destroy();

        res.json({
            message: "Successfully deleted"
        });
    }else{
        const err = new Error('Not Authorized');
        err.status = 403;
        err.title = 'Forbidden';
        return next(err);
    }
});

router.get('/:id', requireAuth, async (req, res, next) => {
    const { id } = req.params;

    const song = await Song.findByPk(id, {
        include: [
            {
                model: User,
                as: 'Artist'
            },
            {
                model: Album
            }
        ]
    });

    if(!song){
        const err = new Error("Song couldn't be found");
        err.status = 404;
        return next(err);
    }

    res.json(song);
});

router.get('/', async (req, res) => {
    const songs = await Song.findAll();
    console.log(songs[0]);
    res.json({
        Songs: songs
    });
});


module.exports = router;
