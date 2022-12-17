'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = 'PlaylistSongs';
    return queryInterface.bulkInsert(options, [
      {
        playlistId: 1,
        songId: 2
      },
      {
        playlistId: 1,
        songId: 5
      },
      {
        playlistId: 1,
        songId: 4
      },
      {
        playlistId: 2,
        songId: 1
      },
      {
        playlistId: 2,
        songId: 11
      },
      {
        playlistId: 2,
        songId: 10
      },
      {
        playlistId: 3,
        songId: 17
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    options.tableName = 'PlaylistSongs';
    return queryInterface.bulkDelete('PlaylistSongs', null, {});
  }
};
