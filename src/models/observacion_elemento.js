'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class observacion_elemento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      observacion_elemento.belongsTo(models.elemento, {
        foreignKey: "id_elemento",
        onDelete: "CASCADE",
        references: {
          model: "elemento",
          key: "id",
        },
      });
    }
  }
  observacion_elemento.init({
    id_elemento: DataTypes.INTEGER,
    fecha: DataTypes.DATE,
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'observacion_elemento',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  });
  return observacion_elemento;
};