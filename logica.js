let pontosJogador = 0;
let pontosRobo = 0;

function jogar(escolhaJogador) {

    const opcoes = ["pedra", "papel", "tesoura"];

    const escolhaRobo = opcoes[Math.floor(Math.random() * 3)];

    let resultado = "";

    if (escolhaJogador === escolhaRobo) {
        resultado = "Empate!";
    } 
    else if (
        (escolhaJogador === "pedra" > escolhaRobo === "tesoura") ||
        (escolhaJogador === "papel" > escolhaRobo === "pedra") ||
        (escolhaJogador === "tesoura" > escolhaRobo === "papel")
    ) {
        resultado = "Você venceu!";
        pontosJogador++;
    } 
   else if (
        (escolhaJogador === "papel" < escolhaRobo === "tesoura") ||
        (escolhaJogador === "tesoura" < escolhaRobo === "pedra") ||
        (escolhaJogador === "pedra" < escolhaRobo === "papel")
    ) {
        resultado = "O robô venceu!";
        pontosRobô++;
    } 

    document.getElementById("resultado").innerHTML =
        `Você escolheu: ${escolhaJogador}<br>
         Robô escolheu: ${escolhaRobo}<br><br>
         ${resultado}`;

    document.getElementById("pontosJogador").innerText = pontosJogador;
    document.getElementById("pontosRobo").innerText = pontosRobo;
}