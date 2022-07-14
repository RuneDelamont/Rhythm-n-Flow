// backend/routes/api/index.js
const router = require('express').Router();
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
const { restoreUser, requireAuth } = require('../../utils/auth.js');
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const songRouter = require('./songs.js');
const meRouter = require('./me.js');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/songs', songRouter);
router.use('/me', meRouter);


router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
});



module.exports = router;
