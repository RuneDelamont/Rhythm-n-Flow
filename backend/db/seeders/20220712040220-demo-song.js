'use strict';

const { query } = require("express-validator");

module.exports = {
  async up (queryInterface, Sequelize) {

   await queryInterface.bulkInsert('Songs', [
    {
      userId: 1,
      albumId: 1,
      title: "Outcast",
      description: "NF's Outcast",
      url: "https://www.nfrealmusic.com/",
      previewImage: "https://www.nfrealmusic.com/"
    },
    {
      userId: 1,
      albumId: 2,
      title: "Wait",
      description: "Wait by NF",
      url: "https://www.nfrealmusic.com/",
      previewImage: "https://www.nfrealmusic.com/"
    },
    {
      userId: 2,
      albumId: 3,
      title: "Astronaut",
      description: "Astronaut by Derek Minor",
      url: "http://www.derekminor.com/",
      previewImage: "http://www.derekminor.com/"
    },
    {
      userId: 2,
      albumId: 4,
      title: "Ready, Set, Go",
      description: "Derek Minor Ready, Set, Go",
      url: "http://www.derekminor.com/",
      previewImage: "http://www.derekminor.com/"
    },
    {
      userId: 2,
      albumId: 4,
      title: "Making Me More",
      description: "Derek Minor Making Me More ft. Mel Washington",
      url: "http://www.derekminor.com/",
      previewImage: "http://www.derekminor.com/"
    },
    {
      userId: 2,
      albumId: 5,
      title: "Until I'm Gone",
      description: "Derek Minor Until I'm gone ft. BJ the Chicago kid",
      url: "http://www.derekminor.com/",
      previewImage: "http://www.derekminor.com/"
    },
    {
      userId: 1,
      albumId: 2,
      title: "Intro",
      description: "NF Intro",
      url: "https://www.nfrealmusic.com/",
      previewImage: "https://www.nfrealmusic.com/"
    },
    {
      userId: 1,
      albumId: 2,
      title: "Mansion",
      description: "NF Mansion ft. Fleurie",
      url: "https://www.nfrealmusic.com/",
      previewImage: "https://www.nfrealmusic.com/"
    },
    {
      userId: 1,
      albumId: 6,
      title: "Change",
      description: "NF Change",
      url: "https://www.nfrealmusic.com/",
      previewImage: "https://www.nfrealmusic.com/"
    },
    {
      userId: 1,
      albumId: 6,
      title: "Only",
      description: "NF Only ft. Sasha Sloan",
      url: "https://www.nfrealmusic.com/",
      previewImage: "https://www.nfrealmusic.com/"
    },
    {
      userId: 1,
      albumId: 1,
      title: "10 Feet Down",
      description: "NF 10 Feet Down",
      url: "https://www.nfrealmusic.com/",
      previewImage: "https://www.nfrealmusic.com/"
    },
    {
      userId: 3,
      albumId: 7,
      title: "Find Me",
      description: "The Siege",
      url: "https://soundcloud.com/theseigemusic",
      previewImage: "https://soundcloud.com/theseigemusic"
    },
    {
      userId: 3,
      albumId: 7,
      title: "Die For You",
      description: "The Siege Die For You",
      url: "https://soundcloud.com/theseigemusic",
      previewImage: "https://soundcloud.com/theseigemusic"
    },
    {
      userId: 3,
      albumId: 8,
      title: "Don't Fall Asleep",
      description: "The Siege Don't Fall Asleep",
      url: "https://soundcloud.com/theseigemusic",
      previewImage: "https://soundcloud.com/theseigemusic"
    },
    {
      userId: 3,
      albumId: 9,
      title: "I am Defiant",
      description: "The Siege I am Defiant",
      url: "https://soundcloud.com/theseigemusic",
      previewImage: "https://soundcloud.com/theseigemusic"
    },
    {
      userId: 4,
      albumId: 10,
      title: "Epiphany",
      description: "Futuristic ft. NF Epiphany",
      url: "https://amap.to/futuristic/",
      previewImage: "https://amap.to/futuristic/"
    },
    {
      userId: 3,
      albumId: 11,
      title: "Natalie Portman",
      description: "The Siege ft. Cheat Codes Natalie Portman",
      url: "https://soundcloud.com/theseigemusic",
      previewImage: "https://soundcloud.com/theseigemusic"
    },
    {
      userId: 5,
      albumId: 12,
      title: "Never Land",
      description: "Andy Mineo ft. Marz Never Land",
      url: "https://andymineo.com/",
      previewImage: "https://andymineo.com/"
    },
    {
      userId: 5,
      albumId: 12,
      title: "You Can't Stop Me",
      description: "Andy Mineo You Can't Stop Me",
      url: "https://andymineo.com/",
      previewImage: "https://andymineo.com/"
    },
    {
      userId: 6,
      albumId: 13,
      title: "Light 'Em Up",
      description: "Vo Williams ft. Robin Loxley Light 'Em Up",
      url: "https://www.vowilliams.com/",
      previewImage: "https://www.vowilliams.com/"
    },
    {
      userId: 6,
      albumId: 14,
      title: "Automatic",
      description: "Vo Williams Automatic",
      url:  "https://www.vowilliams.com/",
      previewImage:  "https://www.vowilliams.com/"
    },

   ])
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Songs', null, {})
  }
};
