const express = require('express');
const { check } = require('express-validator');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { handleValidationErrors, validateSignup } = require('../../utils/validation');
const { User } = require('../../db/models');
const { Op } = require('sequelize');
const router = express.Router();


// Sign up
router.post('/', validateSignup, async (req, res, next) => {
      const { email, password, username } = req.body;

      const checkUser = await User.scope('currentUser').findOne({
        where: {
            [Op.or] : [
              { email },
              { username }
            ]
        }
      });

      if(checkUser){
        const err = new Error();
        err.status = 403;
        const errors = {};
        err.errors = errors;

        if(checkUser.username === username ){
          err.message = "User with that username already exists";
          errors.username = "User with that username already exists";
        }

        if(checkUser.email === email){
          console.log(checkUser.email);
          err.message = "User with that email already exists";
          errors.email = "User with that email already exists";
        }
        next(err);
      }
      const user = await User.signup({ email, username, password });

      await setTokenCookie(res, user);

      res.json({
        user
      });
    }
  );



module.exports = router;
