'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('elementos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      placa: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      id_estado: {
        type: Sequelize.INTEGER
      },
      id_tipo: {
        type: Sequelize.INTEGER
      },
      id_origen: {
        type: Sequelize.INTEGER
      },
      descripcion: {
        type: Sequelize.STRING
      },
      ubicacion: {
        type: Sequelize.STRING
      },
      numero_contrato: {
        type: Sequelize.STRING
      },
      numero_factura: {
        type: Sequelize.STRING
      },
      valor: {
        type: Sequelize.INTEGER
      },
      id_proveedor: {
        type: Sequelize.INTEGER
      },
      frecuencia_mantenimiento: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('elementos');
  }
};