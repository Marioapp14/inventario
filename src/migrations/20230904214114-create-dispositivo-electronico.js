'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('dispositivo_electronicos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_elemento: {
        type: Sequelize.INTEGER
      },
      serie: {
        type: Sequelize.INTEGER
      },
      id_marca: {
        type: Sequelize.INTEGER
      },
      id_modelo: {
        type: Sequelize.INTEGER
      },
      numero_equipo: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('dispositivo_electronicos');
  }
};