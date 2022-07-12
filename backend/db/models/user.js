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
      const { id, username, email } = this;
      return { id, username, email };
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
            username: credential,
            email: credential
          }
        }
      });
      if (user && user.validatePassword(password)) {
        return await User.scope('currentUser').findByPk(user.id);
      }
    };

    static async signup({ username, email, password }) {
      const hashedPassword = bcrypt.hashSync(password);
      const user = await User.create({
        username,
        email,
        hashedPassword
      });
      return await User.scope('currentUser').findByPk(user.id);
    };

  }
  User.init({
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
    email:{
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      validate: {
        len: [3, 256],
        isEmail: true
      }
    },
    hashedPassword:{
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: [60, 60]
      }
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
        attributes: { exclude: [ "hashedPassword" ] }
      },
      loginUser: {
        attributes: {}
      }
    }
  });
  return User;
};
