'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Song.belongsTo(models.User, { foreignKey: 'userId', as: 'Artist' });
      Song.belongsTo(models.Album, { foreignKey: 'albumId' });
      Song.belongsToMany(models.Playlist, { through: models.PlaylistSong, foreignKey: 'songId', otherKey: 'playlistId' });
      Song.hasMany(models.Comment, { foreignKey: 'songId' });
    }
  }
  Song.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userId:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    albumId:{
      type: DataTypes.INTEGER
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description:{
      type: DataTypes.STRING
    },
    url: {
      allowNull: false,
      type: DataTypes.STRING
    },
    previewImage:{
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Song',
  });
  return Song;
};
