// /api/v1/alcohols
const { request } = require("http");
const acloControler = require("../controlers/AlcoControler");

const alcoRouter = require("express").Router();

//get all
alcoRouter.get("/alcohols", acloControler.getAll);

//get one
alcoRouter.get("/alcohols/:id", acloControler.getById);

// add 1
alcoRouter.post(
  "/alcohols",
  (req, res, next) => {
    console.log("Спрацював Joi валідатор");
    next();
  },
  acloControler.add
);

// update one
alcoRouter.patch("/alcohols/:id", acloControler.update);

// delete one
alcoRouter.delete("/alcohols/:id", acloControler.remove);

module.exports = alcoRouter;
