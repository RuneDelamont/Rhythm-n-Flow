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
      // previewImage: "https://www.pluggedin.com/wp-content/uploads/2020/01/NF__Perception__Large.jpg-1024x587.jpeg"
      previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/NFPerception.jpg"
    },
    {
      userId: 1,
      albumId: 2,
      title: "Wait",
      description: "Wait by NF",
      url: "https://www.nfrealmusic.com/",
      // previewImage: "https://m.media-amazon.com/images/I/71o6fTQjpcL._SL1500_.jpg"
      previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/NFMansion.jpg"
    },
    {
      userId: 2,
      albumId: 3,
      title: "Astronaut",
      description: "Astronaut by Derek Minor",
      url: "http://www.derekminor.com/",
      // previewImage: "https://angartwork.akamaized.net/?id=3860981&size=640"
      previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/DerekMinorAstronaut.jpg"
    },
    {
      userId: 2,
      albumId: 4,
      title: "Ready, Set, Go",
      description: "Derek Minor Ready, Set, Go",
      url: "http://www.derekminor.com/",
      // previewImage: "https://i.scdn.co/image/ab67616d0000b273c744b828a5fcd9e10af70e4c"
      previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/DerekMinorMinorville.jpg"
    },
    {
      userId: 2,
      albumId: 4,
      title: "Making Me More",
      description: "Derek Minor Making Me More ft. Mel Washington",
      url: "http://www.derekminor.com/",
      // previewImage: "https://i.scdn.co/image/ab67616d0000b273c744b828a5fcd9e10af70e4c"
      previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/DerekMinorMinorville.jpg"
    },
    {
      userId: 2,
      albumId: 5,
      title: "Until I'm Gone",
      description: "Derek Minor Until I'm gone ft. BJ the Chicago kid",
      url: "http://www.derekminor.com/",
      // previewImage: "https://upload.wikimedia.org/wikipedia/en/7/7e/Derek_minor_reflection.jpg"
      previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/DerekMinorReflection.jpg"
    },
    {
      userId: 1,
      albumId: 2,
      title: "Intro",
      description: "NF Intro",
      url: "https://www.nfrealmusic.com/",
      // previewImage: "https://m.media-amazon.com/images/I/71o6fTQjpcL._SL1500_.jpg"
      previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/NFMansion.jpg"
    },
    {
      userId: 1,
      albumId: 2,
      title: "Mansion",
      description: "NF Mansion ft. Fleurie",
      url: "https://www.nfrealmusic.com/",
      // previewImage: "https://m.media-amazon.com/images/I/71o6fTQjpcL._SL1500_.jpg"
      previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/NFMansion.jpg"
    },
    {
      userId: 1,
      albumId: 6,
      title: "Change",
      description: "NF Change",
      url: "https://www.nfrealmusic.com/",
      // previewImage: "https://upload.wikimedia.org/wikipedia/en/1/1b/NF_-_The_Search.png"
      previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/NFTheSearch.jpg"
    },
    {
      userId: 1,
      albumId: 6,
      title: "Only",
      description: "NF Only ft. Sasha Sloan",
      url: "https://www.nfrealmusic.com/",
      // previewImage: "https://upload.wikimedia.org/wikipedia/en/1/1b/NF_-_The_Search.png"
      previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/NFTheSearch.jpg"
    },
    {
      userId: 1,
      albumId: 1,
      title: "10 Feet Down",
      description: "NF 10 Feet Down",
      url: "https://www.nfrealmusic.com/",
      // previewImage: "https://www.pluggedin.com/wp-content/uploads/2020/01/NF__Perception__Large.jpg-1024x587.jpeg"
      previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/NFPerception.jpg"
    },
    {
      userId: 3,
      albumId: 7,
      title: "Find Me",
      description: "The Siege",
      url: "https://soundcloud.com/theseigemusic",
      // previewImage: "https://f4.bcbits.com/img/a0707287908_10.jpg"
      previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/TheSiegeDuality.jpg"
    },
    {
      userId: 3,
      albumId: 7,
      title: "Die For You",
      description: "The Siege Die For You",
      url: "https://soundcloud.com/theseigemusic",
      // previewImage: "https://f4.bcbits.com/img/a0707287908_10.jpg"
      previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/TheSiegeDuality.jpg"
    },
    {
      userId: 3,
      albumId: 8,
      title: "Don't Fall Asleep",
      description: "The Siege Don't Fall Asleep",
      url: "https://soundcloud.com/theseigemusic",
      // previewImage: "https://i.scdn.co/image/ab67616d0000b2739073dc96b088adb0413cd4fc"
      previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/TheSiegeAwake.jpg"
    },
    {
      userId: 3,
      albumId: 9,
      title: "I am Defiant",
      description: "The Siege I am Defiant",
      url: "https://soundcloud.com/theseigemusic",
      // previewImage: "https://i.ytimg.com/vi/3UWXRWTrHzo/maxresdefault.jpg"
      previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/TheSiegeIAmDefiant.jpg"
    },
    {
      userId: 4,
      albumId: 10,
      title: "Epiphany",
      description: "Futuristic ft. NF Epiphany",
      url: "https://amap.to/futuristic/",
      // previewImage: "https://i.ytimg.com/vi/Oe_99OD1cKA/maxresdefault.jpg"
      previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/FuturisticEpiphany.jpg"
    },
    {
      userId: 3,
      albumId: 11,
      title: "Natalie Portman",
      description: "The Siege ft. Cheat Codes Natalie Portman",
      url: "https://soundcloud.com/theseigemusic",
      // previewImage: "https://f4.bcbits.com/img/a1233537512_16.jpg"
      previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/TheSiegeNataliePortman.jpg"
    },
    {
      userId: 5,
      albumId: 12,
      title: "Never Land",
      description: "Andy Mineo ft. Marz Never Land",
      url: "https://andymineo.com/",
      // previewImage: "https://upload.wikimedia.org/wikipedia/en/6/6a/Never_land.jpg"
      previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/AndyMineoNeverland.jpg"
    },
    {
      userId: 5,
      albumId: 12,
      title: "You Can't Stop Me",
      description: "Andy Mineo You Can't Stop Me",
      url: "https://andymineo.com/",
      // previewImage: "https://upload.wikimedia.org/wikipedia/en/6/6a/Never_land.jpg"
      previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/AndyMineoNeverland.jpg"
    },
    {
      userId: 6,
      albumId: 13,
      title: "Light 'Em Up",
      description: "Vo Williams ft. Robin Loxley Light 'Em Up",
      url: "https://www.vowilliams.com/",
      // previewImage: "https://i.ytimg.com/vi/pqDfg9rCYqA/maxresdefault.jpg"
      previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/VoWilliamsLightEmUp.jpg"
    },
    {
      userId: 6,
      albumId: 14,
      title: "Automatic",
      description: "Vo Williams Automatic",
      url:  "https://www.vowilliams.com/",
      // previewImage:  "https://i.ytimg.com/vi/7hsil0ZT9jE/maxresdefault.jpg"
      previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/VoWilliamsAutomatic.jpg"
    },

   ])
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Songs', null, {})
  }
};
