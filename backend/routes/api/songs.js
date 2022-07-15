const express = require('express');
const { check } = require('express-validator');
const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { handleValidationErrors, forbiddenError, notFoundError, validateQuery, validateSong } = require('../../utils/validation');
const { User, Song, Album, Comment, PlayList } = require('../../db/models');
const router = express.Router();


router.post('/:albumId/song', requireAuth, validateSong, async (req, res, next) => {
    const { albumId } = req.params;
    const { user } = req;
    let { title, description, url, imageUrl, previewImage } = req.body;

    const album = await Album.findByPk(albumId);

    if(!album){
        return next(notFoundError('Album'));
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
        return next(forbiddenError());
    }

});

router.put('/:id', requireAuth, validateSong, async(req, res, next) => {
    const { id } = req.params;
    const { user } = req;
    const { title, description, url, previewImage } = req.body;

    const song = await Song.findByPk(id);

    if(!song){
        return next(notFoundError('Song'));
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
        return next(forbiddenError());
    }
});

router.delete('/:id', requireAuth, async(req, res, next) => {
    const { id } = req.params;
    const { user } = req;

    const song = await Song.findByPk(id);

    if(!song){
        return next(notFoundError('Song'));
    }

    if(user.id === song.userId){
        await song.destroy();

        res.json({
            message: "Successfully deleted"
        });
    }else{
        return next(forbiddenError());
    }
});

router.get('/:id', requireAuth, async (req, res, next) => {
    const { id } = req.params;

    const song = await Song.findByPk(id, {
        include: [
            {
                model: User,
                as: 'Artist',
                attributes: ['id', 'username', 'previewImage']
            },
            {
                model: Album,
                attributes: ['id', 'title', 'previewImage']
            }
        ]
    });

    if(!song){
        return next(notFoundError('Song'));
    }

    res.json(song);
});

router.get('/', async (req, res) => {
    let { page, size, createdAt, title } = req.query;
    const pagination = {};
    const where = {};

    if(page) page = parseInt(page);
    if(size) size = parseInt(size);
    if(!page || page < 0) page = 0;
    if(!size || size < 0) size = 20;
    if(page > 10) page = 10;
    if(size > 20) size = 20;
    pagination.limit = size;
    pagination.offset = size * (page - 1);

    if(createdAt) where.createdAt = createdAt;
    if(title) where.title = title;

    const songs = await Song.findAll({
        where,
        ...pagination
    });
    res.json({
        Songs: songs,
        page,
        size
    });
});


module.exports = router;
