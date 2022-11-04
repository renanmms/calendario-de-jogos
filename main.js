class Game {
	constructor(player1, player2, date){
		this.player1 = player1;
		this.player2 = player2;
		this.date = date;
	}
	
	createCard(){
		return `
			<div class="card">
				<h2> ${this.date} <span> {this.date} </span> </h2>
				<ul>
					<li>
						<img src="./assets/icon-brazil.svg" />
						<strong>12:00</strong>
						<img src="./assets/icon-cameroon.svg" />
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


function createCard() {
	return `
		<div class="card">
			<h2> 21/11 <span> segunda </span> </h2>
			<ul>
				<li>
					<img src="./assets/icon-brazil.svg" />
					<strong>08:00</strong>
					<img src="./assets/icon-cameroon.svg" />
				</li>
			</ul>
		</div>
	`
}

document.querySelector("#app").innerHTML = `
	<header>
		<img src="./assets/logo.svg" />
	</header>
	
	<main id="cards">
		${createCard()}
		${createCard()}
		${createCard()}
	</main>
`