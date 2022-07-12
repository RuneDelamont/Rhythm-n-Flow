'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Users', [
    {
      email: 'nf@nf.com',
      username: 'NFMusic',
      hashedPassword: bcrypt.hashSync('nfmusic')
    },
    {
      email: 'dminor@minorville.com',
      username: 'DerekMinor',
      hashedPassword: bcrypt.hashSync('minorville')
    },
    {
      email: 'thesiege@siege.com',
      username: 'TheSiege',
      hashedPassword: bcrypt.hashSync('thesiege')
    },
    {
      email: 'futuristic@futuristic.com',
      username: 'Futuristic',
      hashedPassword: bcrypt.hashSync('futuristic')
    },
    {
      email: 'andymineo@mineo.com',
      username: 'AndyMineo',
      hashedPassword: bcrypt.hashSync('amineo')
    },
    {
      email: 'vowilliams@vo.com',
      username: 'VoWilliams',
      hashedPassword: bcrypt.hashSync('vowilliams')
    },
    {
      email: 'demo@user.io',
      username: 'Demo-lition',
      hashedPassword: bcrypt.hashSync('password')
    },
    {
      email: 'user1@user.io',
      username: 'FakeUser1',
      hashedPassword: bcrypt.hashSync('password2')
    },
    {
      email: 'user2@user.io',
      username: 'FakeUser2',
      hashedPassword: bcrypt.hashSync('password3')
    }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete('Users',
    // {
    //   username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    // }
    null
    , {});
  }
};
