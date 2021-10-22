const container = document.querySelector('.salonDeFama')

/* PRESS F TO PAY RESPECTS
F
const top10_24 = [
	{
		nombre: "G43 - Hambre cero, cero desperdicio",
		ic: 2050,
		pv: 9
	},
	{
		nombre: "G45 - Plataforma Web de Educacion Gamificada",
		ic: 2050,
		pv: 9
	},
	{
		nombre: "G48 - Finanzas para todos",
		ic: 2050,
		pv: 9
	},
	{
		nombre: "G05 - e-cocina",
		ic: 2050,
		pv: 9
	},
	{
		nombre: "G47 - Plantas de tratamiento alternativas",
		ic: 1950,
		pv: 9
	},
	{
		nombre: "G49 - Reciclaje de Material Textil",
		ic: 1950,
		pv: 9
	},
	{
		nombre: "G46 - Planta Regional Industrial de Compostaje",
		ic: 1950,
		pv: 9
	},
	{
		nombre: "G41 - Ciudad en movimiento",
		ic: 1950,
		pv: 9
	},
	{
		nombre: "G54 - El problema más grande de la energía solar",
		ic: 1950,
		pv: 9
	},
	{
		nombre: "G44 - Conexión eléctrica extendida",
		ic: 1950,
		pv: 9
	}
]

const top10_46 = [
	{
		nombre: "G64 - Aprovechamiento de residuos de poliuretano",
		ic: 2250,
		pv: 9
	}, 
	{
		nombre: "G74 - Una papa, Un pueblo",
		ic: 2150,
		pv: 9
	}, 
	{
		nombre: "G60 - Alternativa Sostenible a Plaguicidas Sintéticos",
		ic: 2150,
		pv: 9
	}, 
	{
		nombre: "G84 - Innovative Water Tumaco",
		ic: 2050,
		pv: 9
	}, 
	{
		nombre: "G87 - Aprovechamiento de aceite de cocina usado para la producción de jabón de tocador",
		ic: 2050,
		pv: 9
	}, 
	{
		nombre: "G70 - IoT por los oceanos",
		ic: 2050,
		pv: 9
	}, 
	{
		nombre: "G68 - - Hambre, + Vida",
		ic: 2050,
		pv: 9
	}, 
	{
		nombre: "G06 - Gestión Ambiental - Protección y Bienestar Animal",
		ic: 2000,
		pv: 9
	}, 
	{
		nombre: "G26 - LIATER - Alumbrado Público (AP)",
		ic: 2000,
		pv: 9
	}, 
	{
		nombre: "G85 - Sistema de aprovechamiento de aguas lluvias",
		ic: 1950,
		pv: 9
	}
];
		

function selectGroup(list){
	tbody = document.querySelector("#table-content")
	htmlArray = list.map((team, i) => {
		//Estilo diferente para 1ro, 2do, 3ro
		if(i < 3){
			var color;
			switch(i){
				case(0):
					color = "team-gold";
					break;
				case(1):
					color = "team-silver";
					break;
				case(2):
					color = "team-bronze";
					break;
			}

			return 	`<tr class="team-leaderboard">
						<td class="team-round-first">
							<div class=${color}>
								<div class="vert">
									<strong >${i + 1}°</strong>
								</div>
							</div>
						</td>
						<td class="team-name">
							<strong>${team.nombre}</strong>
						</td>
						<td>
							${team.ic} IC
						</td>
						<td class="team-round-last">
							${team.pv} PV
						</td>
					</tr>`
		}else{
			return 	`<tr class="team-leaderboard">
						<td class="team-round-first">
							<strong >${i + 1}°</strong>
						</td>
						<td class="team-name">
							${team.nombre}
						</td>
						<td>
							${team.ic} IC
						</td>
						<td class="team-round-last">
							${team.pv} PV
						</td>
					</tr>`	
		}
	})
	htmlString = "";
	for (const str of htmlArray) {
		htmlString += str;
	}
	tbody.innerHTML = htmlString;
}
*/

function horarioSelect(e, h){
	buttons = document.querySelectorAll(".team-horario-button");
	iframe = document.querySelector("#iframe-lead");
	if(h == 24){
		buttons[0].className = "team-horario-button team-horario-button-sel";
		buttons[1].className = "team-horario-button"
		iframe.src = "https://datastudio.google.com/embed/u/0/reporting/1ec487f9-858c-40ad-ad85-dc3d3c361dfc/page/jPHdC";
		
	}else if(h == 46){
		buttons[0].className = "team-horario-button";
		buttons[1].className = "team-horario-button team-horario-button-sel";
		iframe.src = "https://datastudio.google.com/embed/u/0/reporting/1f58bcb8-5dae-4cf5-83b0-7cb513760d2c/page/QnbdC";
	}
}

const Faqs = () => {
	return (
		<div className="leaderboard">
			<div className="team-top3">
				<span className="team-horario-select">
					<button className="team-horario-button team-horario-button-sel" onClick={e => {horarioSelect(e, 24)}}>Horario 2-4</button>
					<button className="team-horario-button" onClick={e => {horarioSelect(e, 46)}}>Horario 4-6</button>
				</span>
			</div>
			<div className="teams-board">
				<iframe id="iframe-lead" className="leaderboard-classname" width="100%" height="700" src="https://datastudio.google.com/embed/u/0/reporting/1ec487f9-858c-40ad-ad85-dc3d3c361dfc/page/jPHdC">
				</iframe>	
			</div>
		</div>
	);
}

/*
<table>
					<thead>
						<tr>
							<th>
								Rango
							</th>
							<th>
								Equipo
							</th>
							<th>
								InnoCoins
							</th>
							<th>
								Puntos de Victoria
							</th>
						</tr>
					</thead>
					<tbody id="table-content" onLoad={e => horarioSelect(e, 24)}>
					</tbody>
				</table>
*/

ReactDOM.render(<Faqs/>, container)
