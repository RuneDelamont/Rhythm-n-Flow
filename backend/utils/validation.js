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
    .notEmpty()
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

// validate song
const validateSong = [
  check('title')
    .exists({ checkFalsy: true })
    .withMessage('Song title is required'),
  check('url')
    .exists({ checkFalsy: true })
    .withMessage('Audio is required'),
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

// const validateServer = [
//   check('form')
//       .custom(async (value, { req }) => {
//           if (req.file) {
//               const fileType = req.file.mimetype;

//               if (!fileType.startsWith('image/') && !fileType.endsWith('gif')) {
//                   return await Promise.reject('File needs to be an image')
//               };
//           };
//       }),
//   check('name')
//       .isLength({ min: 1, max: 100 })
//       .withMessage('Valid name length: 1-100'),
//   handleValidationErrors
// ];


const validateQuery = [
  check('size')
    .exists({ checkFalsy: false })
    .toInt()
    .isInt({max: 20, min: 0})
    .withMessage("Page must be greater than or equal to 0"),
  check('page')
    .exists({ checkFalsy: false })
    .toInt()
    .isInt({max: 10, min: 0})
    .withMessage("Size must be greater than or equal to 0"),
  check('createdAt')
    .exists({ checkFalsy: false })
    .toDate()
    .isDate()
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
