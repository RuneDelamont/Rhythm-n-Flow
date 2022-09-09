const express = require('express');
const { check } = require('express-validator');
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { handleValidationErrors, validateLogin } = require('../../utils/validation');
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
router.post('/', validateLogin, async(req, res, next) => {
    const { credential, password } = req.body;

    const user = await User.login({
        credential,
        password
    });

    if(!user){
      const err = new Error();
      console.log(err.errors);
      err.errors = ['Invalid credentials'];
      err.status = 401;
      // err.title = 'Invalid credentials';
      // err.errors = ['The provided credentials were invalid.'];
      // console.log(err.errors);
      return next(err);
    }

    const safeUser = await user.toSafeObject();
    const token = setTokenCookie(res, user);
    res.json({
        ...safeUser,
        token
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
