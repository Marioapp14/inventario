'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class modelo_dispositivo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  modelo_dispositivo.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'modelo_dispositivo',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  });
  return modelo_dispositivo;
};