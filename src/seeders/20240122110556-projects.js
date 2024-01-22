'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('projects', [{
       title: 'golang',
       start_date: '2024-10-25',
       end_date: '2024-11-17',
       description: 'sangat di minati perusahaan',
       technologies: ['golang','java','node-js','react'],
       image: 'hari.jpg',
       author: 'riyan ',
       createdAt: new Date(),
       updatedAt: new Date(),

      
     }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('People', null, {});
     
  }
};
