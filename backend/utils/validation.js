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

// validate login
const validateLogin = [
  check('credential')
    .exists({ checkFalsy: true })
    .withMessage('Email is required'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Password is required'),
  handleValidationErrors
];



//validate signup
const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .withMessage("Invalid email"),
    check('email')
    .isEmail()
    .withMessage("Email must be email"),
  check('username')
    .exists({ checkFalsy: true })
    .withMessage("Username is required"),
  check('username')
    .isLength({ min: 4 })
    .withMessage("Username must have length of 4"),
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

// validate song
const validateSong = [
  check('title')
    .exists({ checkFalsy: true })
    .withMessage('Song title is required'),
  // check('url')
  //   .exists({ checkFalsy: true })
  //   .withMessage('Audio is required'),
  handleValidationErrors
];

// validate album
const validateAlbum = [
  check('title')
    .exists({ checkFalsy: true })
    .withMessage('Album title is required'),
  handleValidationErrors
];

// validate comment
const validateComment = [
  check('body')
    .exists({ checkFalsy: true })
    .withMessage('Comment body text is required'),
  handleValidationErrors
];

// validate playlist
const validatePlaylist = [
  check('name')
    .exists({ checkFalsy: true })
    .withMessage('Playlist name is required'),
  handleValidationErrors
];

// validate query
const validateQuery = [
  check('size')
    .custom( async ( value, { req }) => {
      if(req.query){
        const { size } = req.query;
        if(size){
          if (size < 0){
            return await Promise.reject('Size must be greater than or equal to 0')
          }
        }
      }
    })
    ,
  check('page')
  .custom( async ( value, { req }) => {
    if(req.query){
      const { page } = req.query;
      if(page){
        if (page < 0){
          return await Promise.reject('Page must be greater than or equal to 0')
        }
      }
    }
  }),
  check('createdAt')
    .isDate({ dateOnly: false })
    .optional({ nullable: true })
    .withMessage("CreatedAt is invalid"),
  handleValidationErrors
];

// 403 error middleware
const forbiddenError = () => {
  const err = new Error("Forbidden");
  err.status = 403;
  err.title = 'Forbidden';
  return err;
};

// 404 error middleware
const notFoundError = (name) => {
  const err = new Error(`${name} couldn't be found`);
  err.status = 404;
  err.title = 'Not Found';
  return err;
};

module.exports = {
  handleValidationErrors,
  forbiddenError,
  notFoundError,
  validateLogin,
  validateSignup,
  validateSong,
  validateAlbum,
  validateComment,
  validatePlaylist,
  validateQuery
};
