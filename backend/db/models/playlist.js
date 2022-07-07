'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Playlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Playlist.belongsTo(models.User, { foreignKey: 'userId' });
      Playlist.hasMany(models.Song, { foreignKey: 'songId' });
    }
  }
  Playlist.init({
    userId: DataTypes.INTEGER,
    songId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    previewImage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Playlist',
  });
  return Playlist;
};
