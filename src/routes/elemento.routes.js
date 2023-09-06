const { Router } = require("express");

const {
  CreateElemento,
  getElementos,
  getElemento,
  updateElemento,
  deleteElemento,
} = require("../controllers/elemento.controller");

const router = Router();

router.get("/elementos", getElementos);
router.get("/elemento/:id", getElemento);
router.post("/elemento", CreateElemento);
router.put("/elemento/:id", updateElemento);
router.delete("/elemento/:id", deleteElemento);



module.exports = router;
