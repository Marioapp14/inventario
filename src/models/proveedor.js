'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class proveedor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  proveedor.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'proveedores',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  });
  return proveedor;
};