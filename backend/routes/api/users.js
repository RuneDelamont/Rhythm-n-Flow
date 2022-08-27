const express = require('express');
const { check } = require('express-validator');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { handleValidationErrors, validateSignup } = require('../../utils/validation');
const { User } = require('../../db/models');
const { Op } = require('sequelize');
const { singleMulterUpload, singlePublicFileUpload } = require('../../awsS3');
const router = express.Router();


// Sign up
// singleMulterUpload('image'),
router.post('/', validateSignup, async (req, res, next) => {

      const { firstName, lastName, email, password, username } = req.body;
      // const profileImageUrl = await singlePublicFileUpload(req.file);

      const checkEmail = await User.scope('currentUser').findOne({
        where: { email }
      });

      const checkUsername = await User.scope('currentUser').findOne({
        where: { username }
      });

      const err = new Error("User already exists");
      err.status = 403;
      const errors = {};
      err.errors = errors;

      if(checkEmail) {
        errors.email = "User with that email already exists";
        next(err);
      }

      if(checkUsername ){
        errors.username = "User with that username already exists";
        next(err);
      }

      const user = await User.signup({ firstName, lastName, email, username, password });
      const token = setTokenCookie(res, user);

      const resUser = await user.toSafeObject();

      res.json({
        ...resUser,
        token
      });
    }
  );



module.exports = router;
