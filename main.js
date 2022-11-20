function createGame(player1, hour, group, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}<p>${group}</p></strong>
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
  createCard("20/11", "domingo", createGame("qatar", "13:00", "GRUPO C", "ecuador")) + 

createCard("21/11", "segunda", createGame("england", "10:00", "GRUPO C", "iran") + 
  createGame("senegal", "13:00", "GRUPO C", "netherlands") +
  createGame("usa", "16:00", "GRUPO C", "wales")) +
   
createCard("22/11", "Terça", createGame("argentina", "07:00", "GRUPO C", "saudi-arabia") +
  createGame("denmark", "10:00", "GRUPO C", "tunisia") +
  createGame("mexico", "13:00", "GRUPO C", "poland") +
  createGame("france", "16:00", "GRUPO C", "australia")) +
    
createCard("23/11", "quarta", createGame("morocco", "07:00", "GRUPO C", "croatia") +
  createGame("germany", "10:00", "GRUPO C", "japan") +
  createGame("spain", "13:00", "GRUPO C", "costa-rica") +
  createGame("belgium", "16:00", "GRUPO C", "canada")) +

createCard("24/11", "quinta", createGame("switzerland", "07:00", "GRUPO C", "cameroon") +
  createGame("uruguai", "10:00", "GRUPO C", "south-korea") +
  createGame("portugal", "13:00", "GRUPO C", "ghana") +
  createGame("brazil", "16:00", "GRUPO C", "serbia")) +

createCard("25/11", "sexta", createGame("wales", "07:00", "GRUPO C", "iran") +
  createGame("qatar", "10:00", "GRUPO C", "senegal") +
  createGame("netherlands", "13:00", "GRUPO C", "ecuador") +
  createGame("england", "16:00", "GRUPO C", "usa")) +

createCard("26/11", "sábado", createGame("tunisia", "07:00", "GRUPO C", "australia") +
  createGame("poland", "10:00", "GRUPO C", "saudi-arabia") +
  createGame("france", "13:00", "GRUPO C", "denmark") +
  createGame("argentina", "16:00", "GRUPO C", "mexico")) +

createCard("27/11", "Domingo", createGame("japan", "07:00", "GRUPO C", "costa-rica") +
  createGame("belgium", "10:00", "GRUPO C", "morocco") +
  createGame("croatia", "13:00", "GRUPO C", "canada") +
  createGame("spain", "16:00", "GRUPO C", "germany")) +

createCard("28/11", "segunda", createGame("cameroon", "07:00", "GRUPO C", "serbia") +
  createGame("south-korea", "10:00", "GRUPO C", "ghana") +
  createGame("brazil", "13:00", "GRUPO C", "switzerland") +
  createGame("portugal", "16:00", "GRUPO C", "uruguai")) +

createCard("29/11", "terça", createGame("ecuador", "12:00", "GRUPO C", "senegal") +
  createGame("netherlands", "12:00", "GRUPO C", "qatar") +
  createGame("iran", "16:00", "GRUPO C", "usa") +
  createGame("wales", "16:00", "GRUPO C", "england")) +

  createCard("30/11", "quarta", createGame("tunisia", "12:00", "france") +
    createGame("australia", "12:00", "denmark") +
    createGame("poland", "16:00", "argentina") +
    createGame("saudi-arabia", "16:00", "mexico")) +

  createCard("1/12", "quinta", createGame("croatia", "12:00", "belgium") +
    createGame("canada", "12:00", "morocco") +
    createGame("japan", "16:00", "spain") +
    createGame("costa-rica", "16:00", "germany")) +

  createCard("2/12", "sexta", createGame("south-korea", "12:00", "portugal") +
    createGame("ghana", "12:00", "uruguai") +
    createGame("serbia", "16:00", "switzerland") +
    createGame("cameroon", "16:00", "brazil"))

