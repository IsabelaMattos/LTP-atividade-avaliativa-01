class Noticia{
  constructor(titulo, dataDa_publicacao, resumo, texto){
    this.titulo = titulo;
    this.dataDa_publicacao = dataDa_publicacao;
    this.resumo = resumo;
    this.texto = texto;
  }
  mostrarNoticia(){
    return this.titulo + "\n" + this.dataDa_publicacao + "\n" + this.resumo + "\n" + this.texto;
  }
}

let noticia = new Noticia("Guerra Rússia x Ucrânia hoje: o que se sabe até agora" , "24/02/2022", "A guerra entre a Rússia e a Ucrânia chega hoje ao 27º dia com novos bombardeios contra a cidade portuária de Mariupol, que sofre com o desabastecimento de água, alimentos e energia elétrica desde o início da invasão russa, em 24 de fevereiro", "Mariupol é considerada uma cidade estratégica para a Rússia pois criaria um corredor terrestre entre a península da Crimeia e as regiões separatistas de Luhansk e Donetsk —que são apoiadas pelo governo de Vladimir Putin. Em entrevista a uma emissora dos Estados Unidos, um parlamentar ucraniano acusou a Rússia de tentar matar de fome as pessoas que estão em Mariupol. Na cidade de 450 mil habitantes, apenas 20 mil conseguiram fugir após a abertura de corredores humanitários.");
console.log(noticia.mostrarNoticia())