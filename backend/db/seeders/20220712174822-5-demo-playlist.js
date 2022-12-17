'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = 'Playlists';
    return queryInterface.bulkInsert(options, [
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

  down: (queryInterface, Sequelize) => {
    options.tableName = 'Playlists';
    return queryInterface.bulkDelete('Playlists', null, {});
  }
};
