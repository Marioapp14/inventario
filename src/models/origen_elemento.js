'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class origen_elemento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  origen_elemento.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'origen_elemento',
    timestamps: false,
    createdAt: false,
    updatedAt: false,

  });
  return origen_elemento;
};