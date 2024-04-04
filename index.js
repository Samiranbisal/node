const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { Schema } = mongoose;

const PORT = 8000;
const productRouter = require("./routes/product");
const userProductRouter = require("./routes/userProduct");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/NewTypeForm");
  console.log("DATABASE CONNENCTS");
}

// app.use("/api", productRouter.routers);
// app.use("/userapi", userProductRouter.urouters);
// modul view controller

// --------------------Schema----------------------

// -----------------model---------------------

// -------------create api-------------

app.use("/api", productRouter.routers);
app.use("/userapi", userProductRouter.urouters);

app.listen(PORT, console.log("Server Star"));
