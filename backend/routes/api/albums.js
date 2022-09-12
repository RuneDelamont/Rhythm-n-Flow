const express = require('express');
const { check } = require('express-validator');
const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { handleValidationErrors, forbiddenError, notFoundError, validateSignup, validateSong, validateAlbum } = require('../../utils/validation');
const { User, Song, Album, Comment, PlayList } = require('../../db/models');
const {
    singlePublicFileUpload,
    multiplePublicFileUpload,
    singlePrivateFileUpload,
    multiplePrivateFileUpload,
    retrievePrivateFile,
    singleMulterUpload,
    multipleMulterUpload,
    multipleUpload
}
    = require('../../awsS3');
const router = express.Router();

router.get('/:id', async (req, res, next) => {
    const { id } = req.params;

    const album = await Album.findByPk(id, {
        include: [
            {
                model: User,
                as: 'Artist',
                attributes: ['id', 'username', 'previewImage']
            },
            {
                model: Song
            }
        ]
    });
    if (!album) {
        return next(notFoundError('Album'));
    }

    res.json(album);
});

router.post('/', requireAuth,
    singleMulterUpload('previewImage'),
    validateAlbum, async (req, res) => {
        const { user } = req;
        const { title, description } = req.body;
        const previewImage = await singlePublicFileUpload(req.file)

        const newAlbum = await Album.create({
            userId: user.id,
            title,
            description,
            previewImage
        });

        res.json(newAlbum);
    });

router.put('/:id', requireAuth,
    singleMulterUpload('previewImage'),
    validateAlbum,
     async (req, res, next) => {
        const { user } = req;
        const { id } = req.params;
        const { title, description } = req.body;
        // const previewImage = singlePublicFileUpload(req.file);
        const album = await Album.findByPk(id);

        if (!album) {
            return next(notFoundError('Album'));
        }

        if (album.userId === user.id) {
            await album.update({
                title,
                description,
                // previewImage
            });

            res.json(album);
        } else {
            return next(forbiddenError());
        }
    });

router.delete('/:id', requireAuth, async (req, res, next) => {
    const { user } = req;
    const { id } = req.params;
    const album = await Album.findByPk(id);

    if (!album) {
        return next(notFoundError('Album'));
    }

    if (album.userId === user.id) {
        await album.destroy();

        res.json({
            message: "Successfully deleted"
        });
    } else {
        return next(forbiddenError());
    }
})

router.get('/', async (req, res) => {
    const albums = await Album.findAll();

    res.json({ Albums: albums });
});

module.exports = router;
