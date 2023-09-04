'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class marca__dispositivo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  marca__dispositivo.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'marca__dispositivo',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  });
  return marca__dispositivo;
};