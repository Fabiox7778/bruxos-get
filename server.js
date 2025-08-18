
import express, { json } from "express";
import bruxos from "./src/data/bruxos.js";

const serverPort = 3000;
const app = express().use(json());

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
    res.json(bruxos)
})


app.listen(serverPort, () => {
    console.log(`⚡ Servidor Hogwarts iniciado em: http://localhost:${serverPort}`);
    console.log(`🏰 Pronto para receber novos magos!`);
});