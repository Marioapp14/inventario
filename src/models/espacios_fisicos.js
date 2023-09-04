'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class espacios_fisicos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      espacios_fisicos.belongsTo(models.elemento, {
        foreignKey: "id_elemento",
        onDelete: "CASCADE",
        references: {
          model: "elemento",
          key: "id",
        },
      });
    }
  }
  espacios_fisicos.init({
    id_elemento: DataTypes.INTEGER,
    capacidad: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'espacios_fisicos',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  });
  return espacios_fisicos;
};