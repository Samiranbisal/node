const fs = require("fs");

const index = fs.readFileSync("index.html", "utf-8");
const Data = JSON.parse(fs.readFileSync("MOCK_DATA_.json", "utf-8"));

exports.getProduct = (req, resp) => {
  console.log("Hello Evrey One");
  // resp.end(index);
  // resp.sendFile("/Users/samiranbisal/Desktop/nodo js file/home.html");
  resp.setHeader("Contant-Type", "application/json");
  resp.status(201).json(Data);
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
