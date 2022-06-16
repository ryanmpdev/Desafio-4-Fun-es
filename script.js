function mensagem(){
    console.log("Primeiro desafio com function");    
}
mensagem();

function mostrarNome(nome){
    console.log("Meu nome é:",nome)
}
mostrarNome("Ryan");

function info(nome,idade,estiloMusical){
    return {nome,idade,estiloMusical}
}
let infos = info("Ryan", "16anos", "pagode");
console.log(infos);

function MusicaFilme(filme,musica){
    return {filme,musica};
}

const dados = MusicaFilme("velozes e furiosos","Vai me dando corda")
console.log(dados)

function triplo(numero){
    return numero * 3;
}

console.log("O tiplo de 50 é:",triplo(50));





