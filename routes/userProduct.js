const express = require("express");

const urouter = express.Router();
const productControllers = require("../controller/userProduct");

urouter.get("/", productControllers.getProduct);

urouter.get("/:id", productControllers.getIdProduct);

// -------------Post api-------------

urouter.post("/", productControllers.postProsuct);

// ---------------upDate----------------

urouter.put("/:id", productControllers.refleshProduct);

urouter.patch("/:id", productControllers.updateProduct);

// --------------------delete-----------------------

urouter.delete("/:id", productControllers.DeleteProduct);

exports.urouters = urouter;
