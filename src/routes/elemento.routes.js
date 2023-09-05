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
router.get("/elementos/:id", getElemento);
router.post("/elementos", CreateElemento);
router.put("/elementos/:id", updateElemento);
router.delete("/elementos/:id", deleteElemento);



module.exports = router;
