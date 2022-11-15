function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}

let delay = 0;

function createCard(date, day, games) {
 /* delay = delay + 0.3; */
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
        <ul>
          ${games}
        </ul>
    </div>
  `
}

document.querySelector('#cards').innerHTML =
  createCard("20/11", "domingo", createGame("catar", "13:00", "equador")) + 

  createCard("21/11", "segunda", createGame("england", "10:00", "iran")) +
   
  createCard("22/11", "Terça", createGame("argentina", "07:00", "arábia saudita")) +
    
  createCard("23/11", "quarta", createGame("Marrocos", "07:00", "croácia")) +

  createCard("24/11", "quinta", createGame("suíça", "07:00", "camarões")) +

  createCard("25/11", "sexta", createGame("gales", "07:00", "irã")) +

  createCard("26/11", "sábado", createGame("tunísia", "07:00", "austrália")) +

  createCard("27/11", "Domingo", createGame("japão", "07:00", "costa rica")) +

  createCard("28/11", "segunda", createGame("camarões", "07:00", "serbia")) +

  createCard("29/11", "terça", createGame("equador", "12:00", "senegal")) +

  createCard("30/11", "quarta", createGame("tunísia", "12:00", "frança")) +

  createCard("1/12", "quinta", createGame("croácia", "12:00", "bélgica")) +

  createCard("2/12", "sexta", createGame("Coreia do sul", "12:00", "portugal"))

