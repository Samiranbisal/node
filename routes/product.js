const express = require("express");

const router = express.Router();
const productControllers = require("../controller/product");

router.get("/", productControllers.getProduct);

router.get("/:id", productControllers.getIdProduct);

// -------------Post api-------------

router.post("/", productControllers.postProsuct);

// ---------------upDate----------------

router.put("/:id", productControllers.refleshProduct);

router.patch("/:id", productControllers.updateProduct);

// --------------------delete-----------------------

router.delete("/:id", productControllers.DeleteProduct);

exports.routers = router;
