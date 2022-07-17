'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Albums', [
      {
        title: 'Perception',
        userId: 1,
        description: "Perception NF",
        previewImage: "https://www.nfrealmusic.com/"
      },
      {
        title: "Mansion",
        userId: 1,
        description: "Mansion NF",
        previewImage: "https://www.nfrealmusic.com/"
      },
      {
        title: "Astronaut",
        userId: 2,
        description: "Astronaut Derek Minor",
        previewImage: "http://www.derekminor.com/"
      },
      {
        title: "Minorville",
        userId: 2,
        description: "Minorville Derek Minor",
        previewImage: "http://www.derekminor.com/"
      },
      {
        title: "Reflection",
        userId: 2,
        description: "Reflection Derek Minor",
        previewImage: "http://www.derekminor.com/"
      },
      {
        title: "The Search",
        userId: 1,
        description: "The Search NF",
        previewImage: "https://www.nfrealmusic.com/"
      },
      {
        title: "Duality",
        userId: 3,
        description: "Duality The Siege",
        previewImage: "https://soundcloud.com/theseigemusic"
      },
      {
        title: "Act IV: Awake",
        userId: 3,
        description: "Act IV: Awake The Siege",
        previewImage: "https://soundcloud.com/theseigemusic"
      },
      {
        title: "I am Defiant",
        userId: 3,
        description: "I am Defiant The Siege",
        previewImage: "https://soundcloud.com/theseigemusic"
      },
      {
        title: "Epiphany",
        userId: 4,
        description: "Epiphany Futuristic",
        previewImage: "https://amap.to/futuristic/"
      },
      {
        title: "Natalie Portman",
        userId: 3,
        description: "Natalie Portman The Siege",
        previewImage: "https://soundcloud.com/theseigemusic"
      },
      {
        title: "Never Land",
        userId: 5,
        description: "Never Land Andy Mineo",
        previewImage: "https://andymineo.com/"
      },
      {
        title: "Light Em Up",
        userId: 6,
        description: "Light Em Up Vo Williams",
        previewImage: "https://www.vowilliams.com/"
      },
      {
        title: "Automatic",
        userId: 6,
        description: "Automatic Vo Williams",
        previewImage: "https://www.vowilliams.com/"
      }

    ])
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Albums', null, {});
  }
};
