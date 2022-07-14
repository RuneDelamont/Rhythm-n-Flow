const { validationResult, check } = require('express-validator');


// validate errors
const handleValidationErrors = (req, _res, next) => {
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    const errors = validationErrors
      .array()
      .map((error) => `${error.msg}`);

    const err = Error('Validation Error');
    err.errors = errors;
    err.status = 400;
    err.title = 'Validation Error';
    next(err);
  }
  next();
};

// validate logins
//   "errors": {
//   "email": "Email is required",
//   "password": "Password is required"
// }
const validateLogin = [
  check('credential')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Email is required'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Password is required'),
  handleValidationErrors
];

// "email": "Invalid email",
// "username": "Username is required",
// "firstName": "First Name is required",
// "lastName": "Last Name is required"

//validate signup
const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Invalid email"),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage("Username is required"),
  check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
  check('firstName')
    .exists({ checkFalsy: true })
    .withMessage("First Name is required"),
  check('lastName')
    .exists({ checkFalsy: true })
    .withMessage("Last Name is required"),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors
];

const validateSong = [
  check('title')
    .exists({ checkFalsy: true })
    .withMessage('Song title is required'),
  check('url')
    .exists({ checkFalsy: true })
    .withMessage('Audio is required'),
  handleValidationErrors
];

module.exports = {
  handleValidationErrors,
  validateLogin,
  validateSignup,
  validateSong
};
