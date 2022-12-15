'use strict';
const bcrypt = require('bcryptjs');

let options = {};

if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}


module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        firstName: 'Nathan',
        lastName: 'Feuerstein',
        email: 'nf@nf.com',
        username: 'NFMusic',
        hashedPassword: bcrypt.hashSync('nfmusic'),
        previewImage: "www.nfImage.com"
      },
      {
        firstName: 'Derek',
        lastName: 'Minor',
        email: 'dminor@minorville.com',
        username: 'DerekMinor',
        hashedPassword: bcrypt.hashSync('minorville'),
        previewImage: "www.DMImage.com"
      },
      {
        firstName: 'Taz',
        lastName: 'Conley',
        email: 'thesiege@siege.com',
        username: 'TheSiege',
        hashedPassword: bcrypt.hashSync('thesiege'),
        previewImage: "www.SiegeImage.com"
      },
      {
        firstName: 'Zach',
        lastName: 'Beck',
        email: 'futuristic@futuristic.com',
        username: 'Futuristic',
        hashedPassword: bcrypt.hashSync('futuristic'),
        previewImage: "www.FuturisticImage.com"
      },
      {
        firstName: 'Andy',
        lastName: 'Mineo',
        email: 'andymineo@mineo.com',
        username: 'AndyMineo',
        hashedPassword: bcrypt.hashSync('amineo'),
        previewImage: "www.AMImage.com"
      },
      {
        firstName: 'Vo',
        lastName: 'Williams',
        email: 'vowilliams@vo.com',
        username: 'VoWilliams',
        hashedPassword: bcrypt.hashSync('vowilliams'),
        previewImage: "www.VoImage.com"
      },
      {
        firstName: 'Demo',
        lastName: 'Lition',
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
        previewImage: "www.previewImage.com"
      },
      {
        firstName: 'Fake',
        lastName: 'User1',
        email: 'user1@user.io',
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync('password2'),
        previewImage: "www.previewImage1.com"
      },
      {
        firstName: 'Fake',
        lastName: 'User2',
        email: 'user2@user.io',
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync('password3'),
        previewImage: "www.previewImage2.com"
      }
    ], {});
    options.tableName = 'Users';
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Users';
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete('Users', null, {});
  }
};
