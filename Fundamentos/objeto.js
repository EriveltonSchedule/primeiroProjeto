const prod1 = {};
prod1.nome = "celular Ultra mega";
prod1.preco = 4998.8;
prod1["Desconto Legal"] = 0.4; //evitar atributos com espaço

console.log(prod1);

const prod2 = {
  nome: "camisa polo",
  preco: 79.9,
}

'{"nome": "camisa polo", "preco": 79.90 }'
console.log(prod2)