const db = require("../models");
const Empresa = db.empresas;

// cadastro de empresas
exports.create = (req, res) => {
  
};

// listagem de empresas
exports.findAll = (req, res) => {
  
};

// listagem de uma empresa por id
exports.findOne = (req, res) => {
  
};



exports.create = (req, res) => {
    // Validacao da insercao
    if (!req.body.nome) {
      res.status(400).send({ message: "Nao foi possivel acessar os dados" });
      return;
    }
  
    // Cadastro de uma empresa
    const empresa = new Empresa({
      cnpj: req.body.cnpj,
      nome: req.body.nome,
      razao: req.body.razao,
      endereco: req.body.endereco,
      atividade: req.body.atividade
    });
  
    // Salvar dados no banco
    empresa
      .save(empresa)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ocorreu um erro na insercao dos dados no banco"
        });
      });
  };

  exports.findAll = (req, res) => {
    const nome = req.query.nome;
    var condition = nome ? { nome: { $regex: new RegExp(nome), $options: "i" } } : {};
  
    Empresa.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ocorreu um erro,tente novamente"
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Empresa.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Nao foi possivel encontrar o id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Erro com o id =" + id });
      });
  };

 
    



  