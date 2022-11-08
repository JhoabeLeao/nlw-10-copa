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
  delay = delay + 0.3;
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

  createCard("21/11", "segunda", createGame("inglaterra", "10:00", "irã")) +
  
  createCard("22/11", "quinta", createGame("brazil", "16:00", "serbia")) +

  createCard("23/11", "quinta", createGame("brazil", "16:00", "serbia")) +

  createCard("24/11", "segunda", createGame("brazil", "13:00", "switzerland") +
    createGame("portugal", "16:00", "uruguai")) +

  createCard("25/12", "sexta", createGame("brazil", "16:00", "cameroon")) +

  createCard("26/11", "quinta", createGame("brazil", "16:00", "serbia")) +

  createCard("27/11", "quinta", createGame("brazil", "16:00", "serbia")) +

  createCard("28/11", "quinta", createGame("brazil", "16:00", "serbia")) +

  createCard("29/11", "quinta", createGame("brazil", "16:00", "serbia")) +

  createCard("30/11", "quinta", createGame("brazil", "16:00", "serbia")) +

  createCard("1/12", "quinta", createGame("brazil", "16:00", "serbia")) +

  createCard("2/12", "quinta", createGame("brazil", "16:00", "serbia")) 

