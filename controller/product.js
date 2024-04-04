const fs = require("fs");

// const index = fs.readFileSync("index.html", "utf-8");
// const Data = JSON.parse(fs.readFileSync("MOCK_DATA.json", "utf-8"));
const modelsh = require("../models/product");
const mgk = modelsh.new_forms;

exports.getProduct = (req, resp) => {
  const new_fs = new mgk();
  new_fs.FirstName = "Iphone";
  new_fs.ListName = "14 Pro";
  new_fs.save((err, doc) => {
    console.log(err, doc);
    resp.status(201).json(doc);
  });
};
exports.getIdProduct = (req, resp) => {
  const userId = Number(req.params.id);
  const datas = Data.find((p) => p.id === userId);
  resp.json(datas);
};

exports.postProsuct = (req, resp) => {
  console.log(req.body);
  // Data.push;
  resp.end();
};

exports.refleshProduct = (req, resp) => {
  const uid = Number(req.params.id);
  const Datauid = Data.findIndex((p) => p.id === uid);
  Data.splice(Datauid, 1, { id: uid, ...req.body });
  resp.status(201).end();
};

exports.updateProduct = (req, resp) => {
  const uid = Number(req.params.id);
  const Datauid = Data.findIndex((p) => p.id === uid);
  const uudata = Data[Datauid];
  Data.splice(Datauid, 1, { ...uudata, ...req.body });
  // console.log(...req.body);
  resp.status(201).end();
};

exports.DeleteProduct = (req, resp) => {
  const uid = Number(req.params.id);
  const Datauid = Data.findIndex((p) => p.id === uid);
  Data.splice(Datauid, 1);
  resp.status(201).end();
};
