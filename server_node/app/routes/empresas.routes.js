module.exports = app => {
    const empresas= require("../controllers/empresas.controller.js");
  
    var router = require("express").Router();

    router.post("/", empresas.create);

    router.get("/", empresas.findAll);
  
    router.get("/:id", empresas.findOne);
  
    app.use('/node/empresas', router);
  };