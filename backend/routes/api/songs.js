const express = require('express');
const { check } = require('express-validator');
const { Op } = require('sequelize');
const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { handleValidationErrors, forbiddenError, notFoundError, validateQuery, validateSong } = require('../../utils/validation');
const { User, Song, Album, Comment, PlayList } = require('../../db/models');
const router = express.Router();


router.post('/:albumId', requireAuth, validateSong, async (req, res, next) => {
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

router.get('/', validateQuery, async (req, res) => {
    let { page, size, createdAt, title } = req.query;
    const pagination = {};
    const where = {};

    // convert page and size into limit and offset specs respectively
    if(page) page = parseInt(page);
    if(size) size = parseInt(size);

    // default pagination vals
    if(!page || page < 0) page = 1;
    if(!size || size < 0) size = 40;
    if(page > 10) page = 10;
    if(size > 40) size = 40;

    // pagination keys
    pagination.limit = size;
    pagination.offset = size * (page - 1);

    if(createdAt) {
        //convert query string to date
        newCreatedAt = new Date(createdAt);

        // get year and month
        const year = newCreatedAt.getFullYear();
        const month = newCreatedAt.getMonth();

        // get day range
        const dayBefore = newCreatedAt.getDate();
        const day = (newCreatedAt.getDate() + 1);
        const dayAfter = (newCreatedAt.getDate() + 2);

        const before = new Date(year, month, dayBefore);
        const after = new Date(year, month, dayAfter);

        /*
        song.findAll({
            where: {
                createdAt && (createdAt > before  && createdAt < after)
            }
        })
        */
        where.createdAt = { [Op.between] : [before, after] }
    };

    // title query find anything like
    if(title) where.title = { [Op.like] : `%${title}%` };

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
