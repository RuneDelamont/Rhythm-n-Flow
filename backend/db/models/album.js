'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Album.belongsToMany(models.User, { through: models.Song, foreignKey: 'albumId', otherKey: 'userId' });
      Album.hasMany(models.Song, { foreignKey: 'albumId' });
    }
  }
  Album.init({
    title:{
      allowNull: false,
      type: DataTypes.STRING
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.STRING
    },
    previewImage:{
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Album',
  });
  return Album;
};
