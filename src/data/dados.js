const bruxos = [
  {
    id: 1,
    nome: "Harry Potter",
    casa: "Grifinória",
    ano: "7º",
    varinha: "Azevinho e pena de fênix, 28 cm",
    mascote: "Coruja (Edwiges)",
    patrono: "Cervo",
    especialidade: "Defesa Contra as Artes das Trevas",
    status: true
  },
  {
    id: 2,
    nome: "Hermione Granger",
    casa: "Grifinória",
    ano: "7º",
    varinha: "Videira e fibra de coração de dragão, 27,3 cm",
    mascote: "Gato (Bichento)",
    patrono: "Lontra",
    especialidade: "Feitiços e Transfiguração",
    status: true
  },
  {
    id: 3,
    nome: "Ron Weasley",
    casa: "Grifinória",
    ano: "7º",
    varinha: "Salgueiro e pelo de unicórnio (segunda varinha)",
    mascote: "Rato (Perebas), depois Coruja (Pigmey Puff)",
    patrono: "Cão (Jack Russell Terrier)",
    especialidade: "Xadrez Bruxo e Lealdade",
    status: true
  },
  {
    id: 4,
    nome: "Draco Malfoy",
    casa: "Sonserina",
    ano: "7º",
    varinha: "Espinheiro e pelo de unicórnio, 25 cm",
    mascote: "nenhum",
    patrono: "não conhecido",
    especialidade: "Magia das Trevas e Poções",
    status: true
  },
  {
    id: 5,
    nome: "Luna Lovegood",
    casa: "Corvinal",
    ano: "6º",
    varinha: "não conhecido",
    mascote: "Coelho (não nomeado)",
    patrono: "Lebre",
    especialidade: "Criaturas Mágicas e Perspicácia",
    status: true
  },
  {
    id: 6,
    nome: "Neville Longbottom",
    casa: "Grifinória",
    ano: "7º",
    varinha: "Cerejeira e pelo de unicórnio (segunda varinha)",
    mascote: "Sapo (Trevor)",
    patrono: "não conhecido",
    especialidade: "Herbologia",
    status: true
  },
  {
    id: 7,
    nome: "Cedrico Diggory",
    casa: "Lufa-Lufa",
    ano: "7º",
    varinha: "Freixo e pelo de unicórnio, 30,5 cm",
    mascote: "não conhecido",
    patrono: "não conhecido",
    especialidade: "Transfiguração e Lealdade",
    status: false
  },
  {
    id: 8,
    nome: "Severo Snape",
    casa: "Sonserina",
    ano: "não conhecido",
    varinha: "não conhecido",
    mascote: "nenhum",
    patrono: "Corça",
    especialidade: "Poções e Oclumência",
    status: false
  },
  {
    id: 9,
    nome: "Minerva McGonagall",
    casa: "Grifinória",
    ano: "não conhecido",
    varinha: "Pinheiro e fibra de coração de dragão, 24 cm",
    mascote: "nenhum",
    patrono: "Gato",
    especialidade: "Transfiguração",
    status: true
  },
  {
    id: 10,
    nome: "Alvo Dumbledore",
    casa: "Grifinória",
    ano: "não conhecido",
    varinha: "Sabugueiro e pelo de testrálio (Varinha das Varinhas)",
    mascote: "Fênix (Fawkes)",
    patrono: "não conhecido",
    especialidade: "Magia Avançada e Estratégia",
    status: false
  },
  {
    id: 11,
    nome: "Fred Weasley",
    casa: "Grifinória",
    ano: "7º",
    varinha: "Freixo e pelo de unicórnio, 30 cm",
    mascote: "não conhecido",
    patrono: "não conhecido",
    especialidade: "Inventos e Piadas Mágicas",
    status: false
  },
  {
    id: 12,
    nome: "George Weasley",
    casa: "Grifinória",
    ano: "7º",
    varinha: "Freixo e pelo de unicórnio, 30 cm",
    mascote: "não conhecido",
    patrono: "não conhecido",
    especialidade: "Inventos e Piadas Mágicas",
    status: true
  },
  {
    id: 13,
    nome: "Ginny Weasley",
    casa: "Grifinória",
    ano: "7º",
    varinha: "Álamo e pelo de unicórnio, 29 cm",
    mascote: "não conhecido",
    patrono: "Cavalo",
    especialidade: "Quadribol e Feitiçaria Avançada",
    status: true
  },
  {
    id: 14,
    nome: "Sirius Black",
    casa: "Grifinória",
    ano: "não conhecido",
    varinha: "Álamo e pelo de unicórnio, 31 cm",
    mascote: "Cão (Padfoot)",
    patrono: "Cão (Padfoot)",
    especialidade: "Transfiguração e Defesa Contra as Artes das Trevas",
    status: false
  },
  {
    id: 15,
    nome: "Remus Lupin",
    casa: "Grifinória",
    ano: "não conhecido",
    varinha: "não conhecido",
    mascote: "não conhecido",
    patrono: "Lobo",
    especialidade: "Defesa Contra as Artes das Trevas",
    status: false
  }
];

const casas =  [
  { id: 1,
    nome: "Grifinória",
    animal: "🦁",
    fundador: "Godrico Gryffindor" },
  { id: 2,
    nome: "Sonserina", 
    animal: "🐍", 
    fundador: "Salazar Slytherin" },
  { id: 3,
    nome: "Corvinal", 
    animal: "🦅", 
    fundador: "Rowena Ravenclaw" },
  { id: 4,
    nome: "Lufa-lufa", 
    animal: "🦡", 
    fundador: "Helga Hufflepuff" }
];

const varinhas = [
  {
    id: 1,
    material: "Azevinho",
    nucleo: "Pena de Fênix",
    comprimento: "28cm"
  },
  {
    id: 2,
    material: "Videira",
    nucleo: "Fibra de Coração de Dragão",
    comprimento: "27cm"
  },
  {
    id: 3,
    material: "Salgueiro",
    nucleo: "Pelo de Unicórnio",
    comprimento: "35cm"
  },
  {
    id: 4,
    material: "Carvalho Inglês",
    nucleo: "Pelo de Testrálio",
    comprimento: "32cm"
  }
];

const animais = [
  {
    id: 1,
    nome: "Coruja",
    tipo: "Correio/Companhia"
  },
  {
    id: 2,
    nome: "Gato",
    tipo: "Companhia"
  },
  {
    id: 3,
    nome: "Sapo",
    tipo: "Companhia"
  },
  {
    id: 4,
    nome: "Rato",
    tipo: "Companhia"
  }
];

const pocoes = [
  {
    id: 1,
    nome: "Polissuco",
    efeito: "Transforma na aparência de outra pessoa"
  },
  {
    id: 2,
    nome: "Felix Felicis",
    efeito: "Sorte temporária"
  },
  {
    id: 3,
    nome: "Amortentia",
    efeito: "Poção do amor"
  },
  {
    id: 4,
    nome: "Veritaserum",
    efeito: "Força a dizer a verdade"
  }
];

export default { bruxos, casas, varinhas, animais, pocoes }
