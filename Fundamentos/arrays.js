const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]); // não gera erro ele descreve undefined

valores[10] = 10; // adicioando mais arrays
console.log(valores);
console.log(valores.length);

valores.push({ id: 3 }, false, null, "teste");
console.log(valores);
/*
 *mas sempre tenha
 *uma arrays com tipo de dados homogêneos, crie arrays só com cliente,
 *arrays so com numeros, mas não misture dados
 */

console.log(valores.pop()); // retorna ultimo valor, mas tambem pode retirar
delete valores[0]; // remover um objeto
console.log(valores);

console.log(typeof valores)// lembrando que arrays são objects