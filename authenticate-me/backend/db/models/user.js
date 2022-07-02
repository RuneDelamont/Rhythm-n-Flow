'use strict';
const {
  Model, Validator
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username:{
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      validate: {
        len: [4, 30],
        isEmail: false
        // ,
        // isNotEmail(val) {
        //   if(Validator.isEmail(value)){
        //     throw new Error("Cannot be an email.");
        //   }
        // }
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
  });
  return User;
};
