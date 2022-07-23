class Forca {

  constructor(senha){
    this.senha = senha.split("");
    this.letrasCertas = [];
    this.letrasUsadas = [];
    this.vida = 6;
    this.resposta = ["_", "_" , "_" , "_" , "_" , "_", "_"];
  }

  chutar(letra) {
    if(letra.length > 1){
      console.log("Use apenas uma letra!");
    }else{
      this.letrasUsadas = this.verificaLetra(letra, this.letrasUsadas); 

      for(var i = 0; i < this.senha.length; i++){
        if(this.senha[i] === letra){
          this.letrasCertas = this.verificaLetra(letra, this.letrasCertas);
          this.resposta[i] = letra;
        }
      }
    }
    
  }

  buscarEstado() {
    
    if(this.vidasRestantes === 0){
      return "perdeu";
    }else{
      return this.verificaResposta(this.resposta);
    }
    
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
      this.vidasRestantes = this.vida - this.verificaVida(this.letrasCertas, this.letrasUsadas);
      this.letrasAcertadas = this.letrasCertas;


      return {
          letrasChutadas: this.letrasUsadas, // Deve conter todas as letras chutadas
          vidas: this.vidasRestantes, // Quantidade de vidas restantes
          palavra: this.resposta // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }

  verificaLetra(letra, array) {
    if(array.length === 0){
      array.push(letra);
    }else{
      if(!array.includes(letra)){
        array.push(letra);
      }
    }

    return array;
  }

  verificaVida(letrasCertas, letrasUsadas){    return letrasUsadas.length - letrasCertas.length;}

  verificaResposta(resposta){

    var letrasCertas = 0;

    for(var i = 0; i < resposta.length; i++){
      if(resposta[i] !== "_"){
        letrasCertas++;
      }
    }

    if(letrasCertas === resposta.length){
      return "ganhou";
    }
  }


}



module.exports = Forca;
