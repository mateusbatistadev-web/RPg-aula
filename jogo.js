
// A trilha do farol · jogo de demonstração do Jovem Tech
const prompt = require("prompt-sync")();
const hero = require("./hero");
const vila = require("./regioes/vila");
const floresta = require("./regioes/floresta");
const sorte = require("./rpg_aula.js/Sorte")
const poco = require("./regioes/poco")

// ===== CONTROLE DO JOGO =====
let local = "vila";
let jogando = true;
const TESTE = false;

// ===== HERÓI =====
let nome = prompt("Qual é o nome do seu herói? ");
hero.nome = nome;

console.log("");
console.log(hero.nome + ", o farol da costa apagou. Alguém precisa chegar lá antes do anoitecer.");

while (jogando) {

  // A cada passo, o veneno tira 1 de vida
  if (hero.veneno > 0) {
    hero.vida = hero.vida - 1;
    hero.veneno = hero.veneno - 1;
    console.log("O veneno arde. Vida: " + hero.vida);
  }

  if (hero.vida <= 0) {
    console.log("Você caiu no caminho. Fim de jogo.");
    jogando = false;

  } 
  if (local === "vila") {
  local = vila(hero)
  } else if (local === "poco") {
  local = floresta(hero)


    if (hero.inventario.includes("moeda furada") === false) {
      hero.inventario.push("moeda furada");
    }

    console.log("1 - ir para a floresta   2 - ir para o poço");
    let escolha = prompt("> ");

    if (escolha === "1") {
      local = "floresta";
    } else if (escolha === "2") {
      local = "poco";
    }

  }  if (local === "floresta") {
    local = floresta(hero)
  

  } else if (local === "poco") {
   local = poco(hero)
  

    let escolha = prompt("> ");

    if (escolha === "1") {
      local = "vila";

    } else if (escolha === "2") {
      hero.vida = hero.vida + 3;
      console.log("A água é gelada. Vida: " + hero.vida);

    } else if (escolha === "3" && hero.inventario.includes("moeda furada")) {

      console.log("A moeda cai sem fazer barulho. Uma corda sobe do fundo do poço, sozinha.");

      if (hero.inventario.includes("corda") === false) {
        hero.inventario.push("corda");
      }

      console.log("Inventário: " + hero.inventario);
    }

  } else if (local === "ponte") {

    console.log("");
    console.log("[PONTE] A ponte para o farol caiu. Do outro lado, o farol apagado.");

    if (hero.inventario.includes("corda")) {
      console.log("1 - amarrar a corda e atravessar   2 - voltar para a floresta");
    } else {
      console.log("Não tem como atravessar.   2 - voltar para a floresta");
    }

    let escolha = prompt("> ");

    if (escolha === "1" && hero.inventario.includes("corda")) {
      local = "farol";
    } else if (escolha === "2") {
      local = "floresta";
    }

  } else if (local === "farol") {

    console.log("");
    console.log("[FAROL] Você sobe a escada e acende a luz. Lá embaixo, os barcos voltam para casa.");

    console.log("Fim: " + hero.nome + " salvou a costa com " + hero.vida + " de vida.");

    jogando = false;
  }}