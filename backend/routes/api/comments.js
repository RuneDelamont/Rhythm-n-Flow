const express = require('express');
const { check } = require('express-validator');
const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { handleValidationErrors, forbiddenError, notFoundError, validateSignup, validateSong, validateAlbum, validateComment } = require('../../utils/validation');
const { User, Song, Album, Comment, PlayList } = require('../../db/models');
const router = express.Router();

router.post('/:songId', requireAuth, validateComment, async(req, res, next) => {
    const { songId } = req.params;
    const { user } = req;
    const { body } = req.body;

    const song = await Song.findByPk(songId);

    if(!song){
        return next(notFoundError('Song'));
    }

    const comment = await song.createComment({
        userId: user.id,
        body
    });

    res.json(comment);
});

router.put('/:id', requireAuth, validateComment, async(req, res, next) => {
    const { user } = req;
    const { id } = req.params;
    const { body } = req.body;

    const comment = await Comment.findByPk(id);

    if(!comment){
        return next(notFoundError('Comment'));
    };

    if(comment.userId === user.id){
        await comment.update({
            body
        });

        res.json(comment);
    }else{
        return next(forbiddenError());
    }
});

router.delete('/:id', requireAuth, async(req, res, next) => {
    const { id } = req.params;
    const { user } = req;

    const comment = await Comment.findByPk(id);

    if(!comment){
        return next(notFoundError('Comment'));
    };

    if(comment.userId === user.id){
        await comment.destroy();

        res.json({
            message: "Successfully deleted"
        })
    }else{
        return next(forbiddenError());
    }
})

router.get('/:songId', async(req, res, next) => {
    const { songId } = req.params;
    const song = await Song.findByPk(songId);

    if(!song){
        return next(notFoundError('Song'));
    }

    const comments = await song.getComments({
        include: [
            {
                model: User,
                attributes: ['id', 'username']
            }
        ]
    });

    res.json({
        Comments: comments
    });
});

module.exports = router;
