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
  createCard("20/11", "domingo", createGame("qatar", "13:00", "ecuador")) + 

  createCard("21/11", "segunda", createGame("england", "10:00", "iran") + 
    createGame("senegal", "13:00", "netherlands") +
    createGame("usa", "16:00", "wales")) +
   
  createCard("22/11", "Terça", createGame("argentina", "07:00", "saudi-arabia") +
    createGame("denmark", "10:00", "tunisia") +
    createGame("mexico", "13:00", "poland") +
    createGame("france", "16:00", "australia")) +
    
  createCard("23/11", "quarta", createGame("morocco", "07:00", "croatia") +
    createGame("germany", "07:00", "japan")) +

  createCard("24/11", "quinta", createGame("switzerland", "07:00", "cameroon")) +

  createCard("25/11", "sexta", createGame("wales", "07:00", "iran")) +

  createCard("26/11", "sábado", createGame("tunisia", "07:00", "australia")) +

  createCard("27/11", "Domingo", createGame("japan", "07:00", "costa-rica")) +

  createCard("28/11", "segunda", createGame("cameroon", "07:00", "serbia")) +

  createCard("29/11", "terça", createGame("ecuador", "12:00", "senegal")) +

  createCard("30/11", "quarta", createGame("tunisia", "12:00", "france")) +

  createCard("1/12", "quinta", createGame("croatia", "12:00", "belgium")) +

  createCard("2/12", "sexta", createGame("south-korea", "12:00", "portugal"))

