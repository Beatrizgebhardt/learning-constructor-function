//const carro = {
//  marca: "marca",
//  preco: 0,
//};

//const honda1 = {
//  marca: "honda",
//  preco: 2000,
//};

//const honda = carro;
//honda.marca = "honda";
//honda.preco = 2000;

//const fiat = carro;
//fiat.marca = "fiat";
//fiat.preco = 3000;

////////////////////////////////////////////////////////////////////////////////////
//Função Construtora

function carro() {
  this.marca = "marca";
  this.preco = 2000;
}

const honda = new carro();
const fiat = new carro();
fiat.marca = "fiat";

//ou

//function carro(maracaAtribuida, precoAtribuido) {
//  this.marca = maracaAtribuida;
//  this.preco = precoAtribuido;
//}
//const honda1 = new carro("honda", 3000);
//const fiat = new carro("fiat", 4000);
//fiat.marca = "fiat";

function carro2(marca, precoInicial) {
  this.taxa = 1.2;
  console.log(this);
  const precoFinal = precoInicial * this.taxa;
  console.log(this);
  this.marca = marca;
  console.log(this);
  this.preco = precoInicial;
  console.log(this);
}

const mazda = new carro2("Mazda", 5000);
