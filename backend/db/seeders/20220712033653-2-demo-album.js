'use strict';

let options = {};


if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Albums', [
      {
        title: 'Perception',
        userId: 1,
        description: "Perception NF",
        previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/NFPerception.jpg"
      },
      {
        title: "Mansion",
        userId: 1,
        description: "Mansion NF",
        previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/NFMansion.jpg"
      },
      {
        title: "Astronaut",
        userId: 2,
        description: "Astronaut Derek Minor",
        previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/DerekMinorAstronaut.jpg"
      },
      {
        title: "Minorville",
        userId: 2,
        description: "Minorville Derek Minor",
        previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/DerekMinorMinorville.jpg"
      },
      {
        title: "Reflection",
        userId: 2,
        description: "Reflection Derek Minor",
        previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/DerekMinorReflection.jpg"
      },
      {
        title: "The Search",
        userId: 1,
        description: "The Search NF",
        previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/NFTheSearch.jpg"
      },
      {
        title: "Duality",
        userId: 3,
        description: "Duality The Siege",
        previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/TheSiegeDuality.jpg"
      },
      {
        title: "Act IV: Awake",
        userId: 3,
        description: "Act IV: Awake The Siege",
        previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/TheSiegeAwake.jpg"
      },
      {
        title: "I am Defiant",
        userId: 3,
        description: "I am Defiant The Siege",
        previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/TheSiegeIAmDefiant.jpg"
      },
      {
        title: "Epiphany",
        userId: 4,
        description: "Epiphany Futuristic",
        previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/FuturisticEpiphany.jpg"
      },
      {
        title: "Natalie Portman",
        userId: 3,
        description: "Natalie Portman The Siege",
        previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/TheSiegeNataliePortman.jpg"
      },
      {
        title: "Never Land",
        userId: 5,
        description: "Never Land Andy Mineo",
        previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/AndyMineoNeverland.jpg"
      },
      {
        title: "Light Em Up",
        userId: 6,
        description: "Light Em Up Vo Williams",
        previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/VoWilliamsLightEmUp.jpg"
      },
      {
        title: "Automatic",
        userId: 6,
        description: "Automatic Vo Williams",
        previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/VoWilliamsAutomatic.jpg"
      }

    ]);
    options.tableName = 'Albums';
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Albums';
    await queryInterface.bulkDelete('Albums', null, {});
  }
};
