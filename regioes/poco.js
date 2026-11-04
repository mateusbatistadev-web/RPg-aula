function poco (hero){
 
 console.log("");
    console.log("[POÇO] Um poço antigo. Não dá para ver o fundo.");

    console.log("1 - voltar para a vila   2 - beber água (recupera 3 de vida)");

    if (hero.inventario.includes("moeda furada")) {
      console.log("3 - jogar a moeda furada no poço");
    }}


module.exports = poco