'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Playlists', [
      {
        userId: 7,
        name: "Cardio",
        previewImage: "http://www.previewImage.com"
      },
      {
        userId: 8,
        name: "Jams",
        previewImage: "http://www.previewImage.com"
      },
      {
        userId: 7,
        name: "Drive and grind",
        previewImage: "http://www.previewImage.com"
      },
      {
        userId: 9,
        name: "Default Name",
        previewImage: "http://www.previewImage.com"
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Playlists', null, {});
  }
};
