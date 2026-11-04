const prompt = require("prompt-sync")();
const sorte = require("../rpg_aula.js/Sorte")

function floresta(hero) {
  console.log("");
  console.log("[FLORESTA] Galhos fechados. Algo se mexe no chão.");

  if (sorte(0.4)) {
    console.log("Uma aranha te morde! Você está envenenado por"+ hero.veneno +  " passos.");
    hero.veneno = hero.veneno + 3;
  } else {
    console.log("Era só o vento.");
  }

  console.log("1 - seguir para a ponte   2 - voltar para a vila");
  let escolha = prompt("> ");

  if (escolha === "1") {
    return  "ponte";
  } else if (escolha === "2") {
    return  "vila";
  }
}
module.exports = floresta;