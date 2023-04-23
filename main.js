class Game {
	constructor(player1, player2, date, time, weekday){
		this.player1 = player1;
		this.player2 = player2;
		this.date = date;
		this.time = time;
		this.weekday = weekday;
	}
	
	createCard(){
		return `
			<div class="card">
				<h2> ${this.date} <span> ${this.weekday} </span> </h2>
				<ul>
					<li>
						<img src="${this.player1}" />
						<strong>${this.time}</strong>
						<img src="${this.player2}" />
					</li>
				</ul>
			</div>
		`
	}
}

const weekdays = {
	1: "domingo",
	2: "segunda",
	3: "terça",
	4: "quarta",
	5: "quinta",
	6: "sexta",
	7: "sabádo"
}

var jogo = new Game("assets/icon-brazil.svg", "assets/icon-cameroon.svg", "24/11", "11:00", weekdays[1]);

document.querySelector("#app").innerHTML = `
	<header>
		<img src="./assets/logo.svg" />
	</header>
	
	<main id="cards">
		${jogo.createCard()}
	</main>
`