/*
Comentário com
várias linhas
*/
//Comentário de linha única

var nome = "Luiz Henrique";
var idade = 22;
var frase = "O dia está escuro";

//alert("Meu primeiro JS");

console.log(nome);
console.log(idade);

console.log(frase.toLocaleUpperCase());
console.log(frase.replace("escuro", "claro"));

var lista = ["banana", "uva", "abacaxi"];
console.log(lista);
//Adiciona um item na lista
lista.push("melancia");
console.log(lista);
//Remove o ultimo item da lista
lista.pop();
console.log(lista);
console.log(lista.reverse());
console.log(lista.toString());
//Coloca uma separação diferente entre os elementos da lista
console.log(lista.join(" - "));

var fruta = {nome: "banana", cor: "amarela"}
console.log(fruta);

var frutas = [{nome: "banana", cor: "amarela"}, {nome: "uva", cor: "roxa"}]
console.log(frutas[1].nome);

/*
var idade2 = prompt("Qual sua idade?");
if(idade2 >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de Idade");
}
*/

//Estrutura "for"
/*
var contador;
for(contador=15; contador <= 18; contador++){
    alert(contador);
}
*/

//getMonth()+1 pois o JS sempre começa com 0, então ele traz o valor 1 numero a menos
/*
var data = new Date();
alert(data.getMonth()+1);
*/

var contadorB = 0;
function botao(){
    contadorB++;
    document.getElementById("contadorBotao").innerHTML = "Contador: " + contadorB;
}

function reiniciar(){
    contadorB = 0;
    document.getElementById("contadorBotao").innerHTML = "Contador: 0";
}

function novaPagina(){
    window.open("novaPagina.html");
}

var contadorP1 = 0;
var contadorP2 = 0;
var contadorP3 = 0;
function passarMouse(elemento){
    if(elemento == document.getElementById("c1")){
        contadorP1++;
        elemento.innerHTML = "Contador1 passando o mouse: " + contadorP1;
    }else if(elemento == document.getElementById("c2")){
        contadorP2++;
        elemento.innerHTML = "Contador2 passando o mouse: " + contadorP2;
    }else if(elemento == document.getElementById("c3")){
        contadorP3++;
        elemento.innerHTML = "Contador3 passando o mouse: " + contadorP3;
    }
}