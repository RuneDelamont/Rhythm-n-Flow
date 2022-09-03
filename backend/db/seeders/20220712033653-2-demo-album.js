'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Albums', [
      {
        title: 'Perception',
        userId: 1,
        description: "Perception NF",
        previewImage: "https://www.pluggedin.com/wp-content/uploads/2020/01/NF__Perception__Large.jpg-1024x587.jpeg"
      },
      {
        title: "Mansion",
        userId: 1,
        description: "Mansion NF",
        previewImage: "https://m.media-amazon.com/images/I/71o6fTQjpcL._SL1500_.jpg"
      },
      {
        title: "Astronaut",
        userId: 2,
        description: "Astronaut Derek Minor",
        previewImage: "https://angartwork.akamaized.net/?id=3860981&size=640"
      },
      {
        title: "Minorville",
        userId: 2,
        description: "Minorville Derek Minor",
        previewImage: "https://i.scdn.co/image/ab67616d0000b273c744b828a5fcd9e10af70e4c"
      },
      {
        title: "Reflection",
        userId: 2,
        description: "Reflection Derek Minor",
        previewImage: "https://upload.wikimedia.org/wikipedia/en/7/7e/Derek_minor_reflection.jpg"
      },
      {
        title: "The Search",
        userId: 1,
        description: "The Search NF",
        previewImage: "https://upload.wikimedia.org/wikipedia/en/1/1b/NF_-_The_Search.png"
      },
      {
        title: "Duality",
        userId: 3,
        description: "Duality The Siege",
        previewImage: "https://f4.bcbits.com/img/a0707287908_10.jpg"
      },
      {
        title: "Act IV: Awake",
        userId: 3,
        description: "Act IV: Awake The Siege",
        previewImage: "https://i.scdn.co/image/ab67616d0000b2739073dc96b088adb0413cd4fc"
      },
      {
        title: "I am Defiant",
        userId: 3,
        description: "I am Defiant The Siege",
        previewImage: "https://i.ytimg.com/vi/3UWXRWTrHzo/maxresdefault.jpg"
      },
      {
        title: "Epiphany",
        userId: 4,
        description: "Epiphany Futuristic",
        previewImage: "https://i.ytimg.com/vi/Oe_99OD1cKA/maxresdefault.jpg"
      },
      {
        title: "Natalie Portman",
        userId: 3,
        description: "Natalie Portman The Siege",
        previewImage: "https://f4.bcbits.com/img/a1233537512_16.jpg"
      },
      {
        title: "Never Land",
        userId: 5,
        description: "Never Land Andy Mineo",
        previewImage: "https://upload.wikimedia.org/wikipedia/en/6/6a/Never_land.jpg"
      },
      {
        title: "Light Em Up",
        userId: 6,
        description: "Light Em Up Vo Williams",
        previewImage: "https://i.ytimg.com/vi/pqDfg9rCYqA/maxresdefault.jpg"
      },
      {
        title: "Automatic",
        userId: 6,
        description: "Automatic Vo Williams",
        previewImage: "https://i.ytimg.com/vi/7hsil0ZT9jE/maxresdefault.jpg"
      }

    ])
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Albums', null, {});
  }
};
