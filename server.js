import express from "express";
import dados from "./src/data/dados.js";

const { bruxos, casas, varinhas, animais, pocoes } = dados;

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

      <p style="font-size: 1.5rem; margin: 20px 0;">
  🧙 <a href="http://localhost:3000/bruxos" style="color: #ffffffff; text-decoration: none;">Veja os bruxos por aqui!</a> 🧙
</p>
        <p style="font-size: 1.5rem; margin: 20px 0;">
  🏰 <a href="http://localhost:3000/casas" style="color: #ffffffff; text-decoration: none;">Veja as casas por aqui!</a> 🏰
</p>
        <p style="font-size: 1.5rem; margin: 20px 0;">
  🪄 <a href="http://localhost:3000/varinhas" style="color: #ffffffff; text-decoration: none;">Veja as varinhas por aqui!</a> 🪄
</p>
        <p style="font-size: 1.5rem; margin: 20px 0;">
  🐶 <a href="http://localhost:3000/animais" style="color: #ffffffff; text-decoration: none;">Veja as animais por aqui!</a> 🐶
</p>
        <p style="font-size: 1.5rem; margin: 20px 0;">
  🍷 <a href="http://localhost:3000/pocoes" style="color: #ffffffff; text-decoration: none;">Veja as poções por aqui!</a> 🍷
</p>
    </div>
  `);
});

app.get('/casas', (req, res) => {
    if (casas.length > 0) {
        res.status(200).json(casas);
    } else {
        res.status(404).json({
            mensagem: "casa com esse nome não encontrado"
        });
    }
});

app.get("/bruxos", (req, res) => {
    res.json(bruxos)
});

app.get("/bruxos/:id", (req, res) => {

    let id = req.params.id;


    id = parseInt(id);

    const bruxo = bruxos.find(b => b.id === id);

    if (bruxo) {
        res.status(200).json(bruxo);
    } else {
        res.status(404).json({
            mensagem: "bruxo não encontrado"
        });
    }
});

app.get("/bruxos/nome/:nome", (req, res) => {
    let nome = req.params.nome.toLowerCase();

    const bruxosEncontrados = bruxos.filter(b => b.nome.toLowerCase().includes(nome));

    if (bruxosEncontrados.length > 0) {
        res.status(200).json(bruxosEncontrados);
    } else {
        res.status(404).json({
            mensagem: "bruxo com esse nome não encontrado"
        })
    }

});

app.get("/bruxos/casa/:casa", (req, res) => {
    let casa = req.params.casa;

    const bruxosDaCasa = bruxos.filter(b => b.casa.toLowerCase() === casa.toLowerCase());

    if (bruxosDaCasa.length > 0) {
        res.status(200).json(bruxosDaCasa);
    } else {
        res.status(404).json({
            mensagem: "Nenhum bruxo encontrado nessa casa!"
        })
    }

});

app.get("/bruxos/vivos/nao", (req, res) => {
    const resultado = bruxos.filter((b) => !b.status);

    if (resultado) {
        res.status(200).json(resultado)
    } else (
        res.status(404).json({ erro: "nenhum bruxo morto encontrado"})
    )
});

app.get('/varinhas', (req, res) => {
    if (varinhas.length > 0) {
        res.status(200).json(varinhas);
    } else {
        res.status(404).json({
            mensagem: "Varinhas não encontradas"
        });
    }
});

app.get("/varinhas/:id", (req, res) => {
    let id = req.params.id;
    id = parseInt(id);
    const varinhasId = varinhas.find(b => b.id === id);

    if (varinhas.length > 0) {
        res.status(200).json(varinhasId);
    } else {
        res.status(404).json({
            mensagem: "Varinha não encontrada"
        });
    }
});

app.get('/animais', (req, res) => {
    if (animais.length > 0) {
        res.status(200).json(animais);
    } else {
        res.status(404).json({
            mensagem: "Animais não encontradas"
        });
    }
});

app.get("/animais/:id", (req, res) => {
    let id = req.params.id;
    id = parseInt(id);
    const animaisId = animais.find(b => b.id === id);

    if (animais.length > 0) {
        res.status(200).json(animaisId);
    } else {
        res.status(404).json({
            mensagem: "Animal não encontrada"
        });
    }
});

app.get('/pocoes', (req, res) => {
    if (pocoes.length > 0) {
        res.status(200).json(pocoes);
    } else {
        res.status(404).json({
            mensagem: "Poções não encontradas"
        });
    }
});

app.get("/pocoes/:id", (req, res) => {
    let id = req.params.id;
    id = parseInt(id);
    const pocoesId = pocoes.find(b => b.id === id);

    if (pocoes.length > 0) {
        res.status(200).json(pocoesId);
    } else {
        res.status(404).json({
            mensagem: "Poção não encontrada"
        });
    }
});

app.listen(serverPort, () => {
    console.log(`⚡ Servidor Hogwarts iniciado em: http://localhost:${serverPort}`);
    console.log(`🏰 Pronto para receber novos magos!`);
}); 
