"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class elemento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      elemento.belongsTo(models.estado_elemento, {
        foreignKey: "id_estado",
        onDelete: "CASCADE",
      });

      elemento.belongsTo(models.tipo_elemento, {
        foreignKey: "id_tipo",
        onDelete: "CASCADE",
      });
      elemento.belongsTo(models.origen_elemento, {
        foreignKey: "id_origen",
        onDelete: "CASCADE",
      });
      elemento.belongsTo(models.proveedores, {
        foreignKey: "id_proveedor",
        onDelete: "CASCADE",
      });

     


    
    }
  }
  elemento.init(
    {
      placa: DataTypes.STRING,
      nombre: DataTypes.STRING,
      id_estado: DataTypes.INTEGER,
      id_tipo: DataTypes.INTEGER,
      id_origen: DataTypes.INTEGER,
      descripcion: DataTypes.STRING,
      ubicacion: DataTypes.STRING,
      numero_contrato: DataTypes.STRING,
      numero_factura: DataTypes.STRING,
      id_proveedor: DataTypes.INTEGER,
      frecuencia_mantenimiento: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "elemento",
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    }
  );
  return elemento;
};
