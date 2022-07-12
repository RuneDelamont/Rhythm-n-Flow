const express = require('express');
const { check } = require('express-validator');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { handleValidationErrors, validateSignup } = require('../../utils/validation');
const { User } = require('../../db/models');
const router = express.Router();


// Sign up
router.post('/', validateSignup, async (req, res) => {
      const { email, password, username } = req.body;
      const user = await User.signup({ email, username, password });

      await setTokenCookie(res, user);

      res.json({
        user
      });
    }
  );



module.exports = router;
