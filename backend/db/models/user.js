'use strict';
const {
  Model, Validator
} = require('sequelize');
const bcrypt = require('bcryptjs');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      User.hasMany(models.Song, { foreignKey: 'userId' });
      User.hasMany(models.Album, { foreignKey: 'userId' });
      User.hasMany(models.Comment, { foreignKey: 'userId' });
      User.hasMany(models.Playlist, { foreignKey: 'userId', onDelete: 'cascade' });
    }

    toSafeObject() {
      const { id, firstName, lastName, email, username } = this;
      return { id, firstName, lastName, email, username };
    };

    validatePassword(password) {
      return bcrypt.compareSync(password, this.hashedPassword.toString());
    };

    static getCurrentUserById(id) {
      return User.scope("currentUser").findByPk(id);
    };

    static async login({ credential, password }) {
      const { Op } = require('sequelize');
      const user = await User.scope('loginUser').findOne({
        where: {
          [Op.or]: {
            // username: credential,
            email: credential
          }
        }
      });
      if (user && user.validatePassword(password)) {
        return await User.scope('currentUser').findByPk(user.id);
      }
    };

    static async signup({ firstName, lastName, username, email, password }) {
      const hashedPassword = bcrypt.hashSync(password);
      const user = await User.create({
        firstName,
        lastName,
        username,
        email,
        hashedPassword
      });
      return await User.scope('currentUser').findByPk(user.id);
    };

  }
  User.init({
    firstName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    email:{
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      validate: {
        len: [3, 256],
        isEmail: true
      }
    },
    username:{
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      validate: {
        len: [4, 30],
        isNotEmail(val) {
          if(Validator.isEmail(val)){
            throw new Error("Cannot be an email.");
          }
        }
      }
    },
    hashedPassword:{
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: [60, 60]
      }
    },
    previewImage: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'User',
    defaultScope: {
      attributes: {
        exclude: [ "hashedPassword", "email", "createdAt", "updatedAt" ]
      }
    },
    scopes: {
      currentUser: {
        attributes: { exclude: [ "hashedPassword", 'createdAt', 'updatedAt'  ] }
      },
      loginUser: {
        attributes: { }
      }
    }
  });
  return User;
};
