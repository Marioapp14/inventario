'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dispositivo_electronico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      dispositivo_electronico.belongsTo(models.modelo_dispositivo, {
        foreignKey: "id_modelo",
        onDelete: "CASCADE",
        references: {
          model: "modelo_dispositivo",
          key: "id",
        },
      });

      dispositivo_electronico.belongsTo(models.marca_dispositivo, {
        foreignKey: "id_marca",
        onDelete: "CASCADE",
        references: {
          model: "marca_dispositivo",
          key: "id",
        },
      });

      dispositivo_electronico.belongsTo(models.elemento, {
        foreignKey: "id_elemento",
        onDelete: "CASCADE",
        references: {
          model: "elemento",
          key: "id",
        },
      });

    }
  }
  dispositivo_electronico.init({
    id_elemento: DataTypes.INTEGER,
    serie: DataTypes.INTEGER,
    id_marca: DataTypes.INTEGER,
    id_modelo: DataTypes.INTEGER,
    numero_equipo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'dispositivo_electronico',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  });
  return dispositivo_electronico;
};