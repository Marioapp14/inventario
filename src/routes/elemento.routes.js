const { Router } = require("express");

const {
  CreateElemento,
  getElementos,
  getElemento,
  updateElemento,
  deleteElemento,
  updateElementoReserva,
  updateElementoPrestamo,
  updateElementoDisponible,
  getElementosReservados,
  getElementosPrestados,
  getElementosDisponibles,
} = require("../controllers/elemento.controller");

const router = Router();

router.get("/elementos", getElementos);
router.get("/elementos-disponibles", getElementosDisponibles);
router.get("/elementos-reservados", getElementosReservados);
router.get("/elementos-prestados", getElementosPrestados);
router.get("/elemento/:id", getElemento);
router.post("/elemento", CreateElemento);
router.put("/elemento/:id", updateElemento);
router.put("/cambiar-reservar/:id", updateElementoReserva);
router.put("/cambiar-prestamo/:id", updateElementoPrestamo);
router.put("/cambiar-disponible/:id", updateElementoDisponible);
router.delete("/elemento/:id", deleteElemento);

module.exports = router;
