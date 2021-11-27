const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// express
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// rota
app.get("/", (req, res) => {
  res.json({ message: "Bem vindo a aplicação de cadastro de empresas" });
});

require("./app/routes/empresas.routes")(app);
// definicao da porta
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Porta do server: ${PORT}.`);
});

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Conectado ao banco");
  })
  .catch(err => {
    console.log("Não foi possível conectar ao banco", err);
    process.exit();
  });