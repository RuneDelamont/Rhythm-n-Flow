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
      Song.belongsTo(models.User, { foreignKey: 'userId' });
      Song.belongsTo(models.Album, { foreignKey: 'albumId' });
      Song.belongsTo(models.Playlist, { foreignKey: 'songId' });
      Song.hasMany(models.Comment, { foreignKey: 'songId' });
    }
  }
  Song.init({
    userId:{
      type: DataTypes.INTEGER
    },
    albumId:{
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING
    },
    description:{
      type: DataTypes.STRING
    },
    url: {
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
