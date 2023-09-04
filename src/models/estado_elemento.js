'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class estado_elemento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  estado_elemento.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'estado_elemento',
    timestamps: false,
    createdAt: false,
    updatedAt: false,

  });
  return estado_elemento;
};