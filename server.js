
import express from "express";
import bruxo from "./src/data/bruxo.js";

const serverPort = 3000;
const app = express().use(express.json());

app.get('/', (req, res) => {
    res.send(`
    <div style="
      background: linear-gradient(135deg, #7f09b6ff, #3949ab);
      color: white;
      padding: 50px;
      text-align: center;
      font-family: 'Georgia', serif;
      min-height: 100vh;
      margin: 0;
    ">
      <h1 style="
        font-size: 3rem;
        color: #ffd700;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        margin-bottom: 20px;
      ">
        ⚡ Seja bem vindo à Hogwarts! ⚡
      </h1>
      <p style="font-size: 1.5rem; margin: 20px 0;">
       🌟 Escola de Magia e Feitiçaria 🌟
      </p>
      <p style="font-size: 1.2rem; opacity: 0.9;">
        "Magia é o estudo da vontade aplicada com conhecimento. Não se trata de poder bruto, mas de entender como o mundo funciona."
      </p>
      <p style="font-size: 1.2rem; opacity: 0.9;">
        Casas de Hogwarts:
      </p>
      <div style="margin-top: 30px;">
        <span style="font-size: 1.1rem;">🦁 Grifinória | 🐍 Sonserina | 🦅 Corvinal | 🦡 Lufa-lufa</span>
      </div>
    </div>
  `);
});

app.get('/casas', (req, res) => {
    res.json({
        casas: [
            { nome: "Grifinória", animal: "🦁", fundador: "Godrico Gryffindor" },
            { nome: "Sonserina", animal: "🐍", fundador: "Salazar Slytherin" },
            { nome: "Corvinal", animal: "🦅", fundador: "Rowena Ravenclaw" },
            { nome: "Lufa-lufa", animal: "🦡", fundador: "Helga Hufflepuff" }
        ]
    });
});

app.get("/bruxos", (req, res) => {
    res.json(bruxo)
});

app.get("/bruxos/:id", (req, res) => {

    let id = req.params.id;


    id = parseInt(id);

    const bruxos = bruxo.find(b => b.id === id);

    if (bruxos) {
        res.status(200).json(bruxos);
    } else {
        res.status(404).json({
            mensagem: "bruxo não encontrado"
        });
    }
});

app.get("/bruxos/nome/:nome", (req, res) => {
    let nome = req.params.nome.toLowerCase();

    const bruxosEncontrados = bruxo.filter(b => b.nome.toLowerCase().includes(nome));

    if (bruxosEncontrados.length > 0) {
        res.status(200).json(bruxosEncontrados);
    } else {
        res.status(404).json({
            mensagem: "bruxo não encontrado"
        })
    }

})

app.get("/bruxos/casa/:casa", (req, res) => {
    let casa = req.params.casa;

    const bruxosDaCasa = bruxo.filter(b => b.casa.toLowerCase() === casa.toLowerCase());

    if (bruxosDaCasa.length > 0) {
        res.status(200).json(bruxosDaCasa);
    } else {
        res.status(404).json({
            mensagem: "Nenhum bruxo encontrado nessa casa!"
        })
    }

});


app.listen(serverPort, () => {
    console.log(`⚡ Servidor Hogwarts iniciado em: http://localhost:${serverPort}`);
    console.log(`🏰 Pronto para receber novos magos!`);
});