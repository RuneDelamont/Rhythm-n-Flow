'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('PlaylistSongs', [
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

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PlaylistSongs', null, {});
  }
};
