const db = require("../models");
const Op = require("sequelize");

const getElementos = async (req, res) => {
  try {
    // obtiene los parametros de la url para la paginacion de los servicios
    const { limit = 10, offset, filtro } = req.query;

    // consulta a la base de datos para obtener todos los elementos
    const options = {
      include: [
        {
          model: db.estado_elemento,
          attributes: ["nombre"],
          // where: {
          //   id: {
          //     [Op.ne]: 4,
          //   },
          // },
        },
        {
          model: db.tipo_elemento,
          attributes: ["nombre"],
        },
        {
          model: db.origen_elemento,
          attributes: ["nombre"],
        },
        {
          model: db.proveedores,
          attributes: ["nombre"],
        },
      ],
      limit,
      offset,
    };

    // si se envia un filtro por nombre, se agrega a la consulta
    if (filtro) {
      options.where = {
        nombre: {
          [db.Sequelize.Op.like]: `%${filtro}%`,
        },
      };
    }

    // se realiza la consulta a la base de datos
    const elementos = await db.elemento.findAll();

    res.json(elementos);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error al obtener los elementos",
    });
  }
};

const getElemento = async (req, res) => {
  try {
    const { id } = req.params;
    const elemento = await db.elemento.findOne({
      where: {
        id: id,
      },
      include: [
        {
          model: db.estado_elemento,
          attributes: ["nombre"],
        },
        {
          model: db.tipo_elemento,
          attributes: ["nombre"],
        },
        {
          model: db.origen_elemento,
          attributes: ["nombre"],
        },
      ],
    });
    if (!elemento)
      return res
        .status(404)
        .json({ message: `No existe el elemento con id ${id}` });

    res.json(elemento);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const CreateElemento = async (req, res) => {
  const {
    placa,
    nombre,
    id_tipo,
    id_origen,
    descripcion,
    ubicacion,
    numero_contrato,
    numero_factura,
    valor,
    id_proveedor,
    frecuencia_mantenimiento,
    observaciones,
  } = req.body;

  try {
    const newelemento = await db.elemento.create({
      placa,
      nombre,
      id_tipo,
      id_estado: 1,
      id_origen,
      descripcion,
      ubicacion,
      numero_contrato,
      numero_factura,
      valor,
      id_proveedor,
      frecuencia_mantenimiento,
      serie,
      id_marca,
      id_modelo,
      numero_equipo,
    });

    const newObservacion = await db.observaciones_elemento.create({
      id_elemento: newelemento.id,
      fecha: new Date(),
      descripcion: observaciones,
    });

    // si hay un dispositivo asociado, se crea

    if (serie) {
      await db.dispositivo_electronico.create({
        id_elemento: newelemento.id,
        serie,
        id_marca,
        id_modelo,
        numero_equipo,
      });
    }

    res.json(newelemento);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateElemento = async (req, res) => {
  try {
    const { id } = req.params;
    const nuevosDatos = req.body;

    //Actualiza los campos del elemento en la base de datos
    await db.elemento.update(nuevosDatos, {
      where: {
        id: id,
      },
    });

    //si hay observaciones, se crea una nueva
    if (nuevosDatos.observaciones) {
      await db.observaciones_elemento.create({
        id_elemento: id,
        fecha: new Date(),
        descripcion: nuevosDatos.observaciones,
      });
    }

    // si hay un dispositivo asociado, se actualiza

    const dispositivo = await db.dispositivo.findOne({
      where: {
        id_elemento: id,
      },
    });

    if (!dispositivo) {
      return res.json({ message: "El elemento no tiene un dispositivo" });
    }

    await db.dispositivo.update(
      {
        serie: nuevosDatos.serie,
        id_marca: nuevosDatos.id_marca,
        id_modelo: nuevosDatos.id_modelo,
        numero_equipo: nuevosDatos.numero_equipo,
      },
      {
        where: {
          id: dispositivo.id,
        },
      }
    );

    //Busca el elemento actualizado con sus relaciones
    const elemento = await db.elemento.findOne({
      where: {
        id: id,
      },
      include: [
        {
          model: db.estado_elemento,
          attributes: ["nombre"],
        },
        {
          model: db.tipo_elemento,
          attributes: ["nombre"],
        },
        {
          model: db.origen_elemento,
          attributes: ["nombre"],
        },
        {
          model: db.proveedores,
          attributes: ["nombre"],
        },
      ],
    });


    return res.status(200).json({
      success: true,
      message: "Elemento actualizado",
      elemento,
    });
  } catch (error) {
    return res.status(200).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteElemento = async (req, res) => {
  try {
    const { id } = req.params;
    
    //Encuentra el elemento a eliminar
    const elemento = await db.elemento.findOne({
      where: {
        id: id,
      },
    });

    //Si no existe el elemento, retorna un error
    if (!elemento) {
      return res.status(404).json({
        success: false,
        message: "Cuenta de usuario no encontrada.",
      });
    }

    //Actualiza el estado del elemento a eliminado
    await db.elemento.update(
      {
        id_estado: 4,
      },
      {
        where: {
          id: id,
        },
      }
    );
    return res.status(200).json({
      success: true,
      message: "Elemento eliminado exitosamente",
    });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getElementos,
  getElemento,
  CreateElemento,
  updateElemento,
  deleteElemento,
};
