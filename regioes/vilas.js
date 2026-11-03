const hero = require("../rpg_aula.js/hero")
const prompt = require("prompt-sync")()

function Vila(heroi){


 
    console.log("");
    console.log("[VILA] Um velho pescador te entrega uma moeda furada: 'Não vale nada. Guarde mesmo assim.'");

    if (hero.inventario.includes("moeda furada") === false) {
      hero.inventario.push("moeda furada");
    }

    console.log("1 - ir para a floresta   2 - ir para o poço");
    let escolha = prompt("> ");

    if (escolha === "1") {
        return "floresta";
    } else if (escolha === "2") {
      local = "poco";
    }
}

module.exports = Vila;