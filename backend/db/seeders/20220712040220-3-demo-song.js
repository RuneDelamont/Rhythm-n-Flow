'use strict';
const { query } = require("express-validator");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = 'Songs';
   return queryInterface.bulkInsert(options, [
    {
      userId: 1,
      albumId: 1,
      title: "Outcast",
      description: "NF's Outcast",
      url: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/NF_-_Outcast_(getmp3.pro).mp3",
      imageUrl: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/NFPerception.jpg",
      previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/NFPerception.jpg"
    },
    {
      userId: 1,
      albumId: 2,
      title: "Wait",
      description: "Wait by NF",
      url: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/NF_-_Wait_(getmp3.pro).mp3",
      imageUrl: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/NFMansion.jpg",
      previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/NFMansion.jpg"
    },
    {
      userId: 2,
      albumId: 3,
      title: "Astronaut",
      description: "Astronaut by Derek Minor",
      url: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/Astronaut_(getmp3.pro).mp3",
      imageUrl: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/DerekMinorAstronaut.jpg",
      previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/DerekMinorAstronaut.jpg"
    },
    {
      userId: 2,
      albumId: 4,
      title: "Ready, Set, Go",
      description: "Derek Minor Ready, Set, Go",
      url: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/Derek_Minor_-_Ready_Set_Go_(getmp3.pro).mp3",
      imageUrl: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/DerekMinorMinorville.jpg",
      previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/DerekMinorMinorville.jpg"
    },
    {
      userId: 2,
      albumId: 4,
      title: "Making Me More",
      description: "Derek Minor Making Me More ft. Mel Washington",
      url: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/Derek_Minor_-_Making_Me_More_ft_Me_(getmp3.pro).mp3",
      imageUrl: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/DerekMinorMinorville.jpg",
      previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/DerekMinorMinorville.jpg"
    },
    {
      userId: 2,
      albumId: 5,
      title: "Until I'm Gone",
      description: "Derek Minor Until I'm gone ft. BJ the Chicago kid",
      url: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/Until_Im_Gone_feat_BJ_the_Chicag_(getmp3.pro).mp3",
      imageUrl: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/DerekMinorReflection.jpg",
      previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/DerekMinorReflection.jpg"
    },
    {
      userId: 1,
      albumId: 2,
      title: "Intro",
      description: "NF Intro",
      url: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/Intro_(getmp3.pro).mp3",
      imageUrl: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/NFMansion.jpg",
      previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/NFMansion.jpg"
    },
    {
      userId: 1,
      albumId: 2,
      title: "Mansion",
      description: "NF Mansion ft. Fleurie",
      url: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/NF_-_Mansion_Audio_ft_Fleurie_(getmp3.pro).mp3",
      imageUrl: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/NFMansion.jpg",
      previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/NFMansion.jpg"
    },
    {
      userId: 1,
      albumId: 6,
      title: "Change",
      description: "NF Change",
      url: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/Change_(getmp3.pro).mp3",
      imageUrl: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/NFTheSearch.jpg",
      previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/NFTheSearch.jpg"
    },
    {
      userId: 1,
      albumId: 6,
      title: "Only",
      description: "NF Only ft. Sasha Sloan",
      url: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/NF_Sasha_Sloan_-_Only_Audio_(getmp3.pro).mp3",
      imageUrl: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/NFTheSearch.jpg",
      previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/NFTheSearch.jpg"
    },
    {
      userId: 1,
      albumId: 1,
      title: "10 Feet Down",
      description: "NF 10 Feet Down",
      url: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/10_Feet_Down_(getmp3.pro).mp3",
      imageUrl: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/NFPerception.jpg",
      previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/NFPerception.jpg"
    },
    {
      userId: 3,
      albumId: 7,
      title: "Find Me",
      description: "The Siege",
      url: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/Find_Me_(getmp3.pro).mp3",
      imageUrl: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/TheSiegeDuality.jpg",
      previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/TheSiegeDuality.jpg"
    },
    {
      userId: 3,
      albumId: 7,
      title: "Die For You",
      description: "The Siege Die For You",
      url: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/The_Seige_-_Die_For_You_Official_A_(getmp3.pro).mp3",
      imageUrl: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/TheSiegeDuality.jpg",
      previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/TheSiegeDuality.jpg"
    },
    {
      userId: 3,
      albumId: 8,
      title: "Don't Fall Asleep",
      description: "The Siege Don't Fall Asleep",
      url: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/Dont_Fall_Asleep_-_The_Seige_Ex_(getmp3.pro).mp3",
      imageUrl: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/TheSiegeAwake.jpg",
      previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/TheSiegeAwake.jpg"
    },
    {
      userId: 3,
      albumId: 9,
      title: "I am Defiant",
      description: "The Siege I am Defiant",
      url: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/I_Am_Defiant_-_The_Seige_Explici_(getmp3.pro).mp3",
      imageUrl: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/TheSiegeIAmDefiant.jpg",
      previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/TheSiegeIAmDefiant.jpg"
    },
    {
      userId: 4,
      albumId: 10,
      title: "Epiphany",
      description: "Futuristic ft. NF Epiphany",
      url: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/Epiphany_feat_NF_(getmp3.pro).mp3",
      imageUrl: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/FuturisticEpiphany.jpg",
      previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/FuturisticEpiphany.jpg"
    },
    {
      userId: 3,
      albumId: 11,
      title: "Natalie Portman",
      description: "The Siege ft. Cheat Codes Natalie Portman",
      url: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/Natalie_Portman_feat_Cheat_Codes_(getmp3.pro).mp3",
      imageUrl: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/TheSiegeNataliePortman.jpg",
      previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/TheSiegeNataliePortman.jpg"
    },
    {
      userId: 5,
      albumId: 12,
      title: "Never Land",
      description: "Andy Mineo ft. Marz Never Land",
      url: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/Andy_Mineo_-_Never_Land_ft_Marz_(getmp3.pro).mp3",
      imageUrl: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/AndyMineoNeverland.jpg",
      previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/AndyMineoNeverland.jpg"
    },
    {
      userId: 5,
      albumId: 12,
      title: "You Can't Stop Me",
      description: "Andy Mineo You Can't Stop Me",
      url: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/Andy_Mineo_-_You_Cant_Stop_Me_(getmp3.pro).mp3",
      imageUrl: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/AndyMineoNeverland.jpg",
      previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/AndyMineoNeverland.jpg"
    },
    {
      userId: 6,
      albumId: 13,
      title: "Light 'Em Up",
      description: "Vo Williams ft. Robin Loxley Light 'Em Up",
      url: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/Light_Em_Up_-_Vo_Williams_ft_Robi_(getmp3.pro).mp3",
      imageUrl: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/VoWilliamsLightEmUp.jpg",
      previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/VoWilliamsLightEmUp.jpg"
    },
    {
      userId: 6,
      albumId: 14,
      title: "Automatic",
      description: "Vo Williams Automatic",
      url:  "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/Automatic_(getmp3.pro).mp3",
      imageUrl: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/VoWilliamsAutomatic.jpg",
      previewImage: "https://delamont-sound-cloud-bucket.s3.us-west-1.amazonaws.com/VoWilliamsAutomatic.jpg"
    },

   ])
  },

  down: (queryInterface, Sequelize) => {
    options.tableName = 'Songs';
    return queryInterface.bulkDelete(options)
  }
};
