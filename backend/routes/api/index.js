// backend/routes/api/index.js
const router = require('express').Router();
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
const { restoreUser, requireAuth } = require('../../utils/auth.js');
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const songsRouter = require('./songs.js');
const meRouter = require('./me.js');
const albumsRouter = require('./albums.js');
const commentsRouter = require('./comments.js');
const artistsRouter = require('./artists.js');
const playlistsRouter = require('./playlists.js');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/songs', songsRouter);
router.use('/me', meRouter);
router.use('/albums', albumsRouter);
router.use('/comments', commentsRouter);
router.use('/artists', artistsRouter);
router.use('/playlists', playlistsRouter);

router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
});



module.exports = router;
