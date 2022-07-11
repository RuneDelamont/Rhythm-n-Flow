const express = require('express');
// const { check } = require('express-validator');
const { setTokenCookie, restoreUser } = require('../../utils/auth');
// const { handleValidationErrors } = require('../../utils/validation');
const { User } = require('../../db/models');

const router = express.Router();



// Restore session user
router.get('/', restoreUser, (req, res) => {
      const { user } = req;
      if (user) {
        res.json({
          user: user.toSafeObject()
        });
      } else res.json({});
    }
  );

// Login
router.post('/', async(req, res, next) => {
    const { credential, password } = req.body;

    const user = await User.login({
        credential,
        password
    });

    if(!user){
        const err = new Error('Login failed');
        err.status = 401;
        err.title = 'Login failed';
        err.errors = ['The provided credentials were invalid.'];
        return next(err);
    }

    await setTokenCookie(res, user);
    res.json({
        user
    });
});

// Log out
router.delete('/', (_req, res) => {
    res.clearCookie('token');
    res.json({
        message: 'success'
    });
})

module.exports = router;
