const pisoCont = document.querySelector('#pisos_container')

var select = 3;

const pisoContentSwitch = (piso) => { 
	switch(piso){
		case '1':
			return	(<div>
						<h2 class="title-content">
							Piso 1
						</h2>
						<p class="text">
							Informacion sobre el entregable a realizar para subir del Piso 1 al Piso 2 y diferentes recursos que apoyan esta entrega.
						</p>
						<ul class="text">
							<li>
								Instrucciones claras sobre el entregable.
							</li>
							<li>
								Instrucciones sobre el pitch a realizar y el horario en el que se presentaria. 
							</li>
							<li>
								Link a Moodle donde se realiza la entrega e instrucciones para realizarlo.
							</li>
							<li>
								Explicar como la entrega hace parte del funcionamiento del juego.
							</li>
							<li>
								En que fechas se debe realizar esta entrega.
							</li>
						</ul> 
					</div>);
		case '2':
			return	(<div>
						<h2 class="title-content">
							Piso 2
						</h2>
						<p class="text">
							Informacion sobre el entregable a realizar para subir del Piso 2 al Piso 3 y diferentes recursos que apoyan esta entrega.
						</p>
						<ul class="text">
							<li>
								Instrucciones claras sobre el entregable.
							</li>
							<li>
								Instrucciones sobre el pitch a realizar y el horario en el que se presentaria. 
							</li>
							<li>
								Link a Moodle donde se realiza la entrega e instrucciones para realizarlo.
							</li>
							<li>
								Explicar como la entrega hace parte del funcionamiento del juego.
							</li>
							<li>
								En que fechas se debe realizar esta entrega.
							</li>
						</ul>
					</div>);
		case '3':
			return	(<div>
						<h2 class="title-content">
							Piso 3
						</h2>
						<p class="text">
							Informacion sobre el entregable a realizar para subir del Piso 3 al Piso 4 y diferentes recursos que apoyan esta entrega.
						</p>
						<ul class="text">
							<li>
								Instrucciones claras sobre el entregable.
							</li>
							<li>
								Instrucciones sobre el pitch a realizar y el horario en el que se presentaria. 
							</li>
							<li>
								Link a Moodle donde se realiza la entrega e instrucciones para realizarlo.
							</li>
							<li>
								Explicar como la entrega hace parte del funcionamiento del juego.
							</li>
							<li>
								En que fechas se debe realizar esta entrega.
							</li>
						</ul> 
					</div>);
		case '4':
			return	(<div>
						<h2 class="title-content">
							Piso 4
						</h2>
						<p class="text">
							Informacion sobre el entregable a realizar para subir del Piso 4 al Piso 5 y diferentes recursos que apoyan esta entrega.
						</p>
						<p class="text">
							<ul>
								<li>
									Instrucciones claras sobre el entregable.
								</li>
								<li>
									Instrucciones sobre el pitch a realizar y el horario en el que se presentaria. 
								</li>
								<li>
									Link a Moodle donde se realiza la entrega e instrucciones para realizarlo.
								</li>
								<li>
									Explicar como la entrega hace parte del funcionamiento del juego.
								</li>
								<li>
									En que fechas se debe realizar esta entrega.
								</li>
							</ul>
						</p> 
					</div>);
		case '5':
			return	(<div>
						<h2 class="title-content">
							Piso 5
						</h2>
						<p class="text">
							Informacion sobre el entregable a realizar para subir del Piso 5 al Piso 6 y diferentes recursos que apoyan esta entrega.
						</p>
						<ul class="text">
							<li>
								Instrucciones claras sobre el entregable.
							</li>
							<li>
								Instrucciones sobre el pitch a realizar y el horario en el que se presentaria. 
							</li>
							<li>
								Link a Moodle donde se realiza la entrega e instrucciones para realizarlo.
							</li>
							<li>
								Explicar como la entrega hace parte del funcionamiento del juego.
							</li>
							<li>
								En que fechas se debe realizar esta entrega.
							</li>
						</ul>
					</div>);
		case '6':
			return	(<div>
						<h2 class="title-content">
							Piso 6
						</h2>
						<p class="text">
							Informacion sobre el entregable a realizar la entrega final del piso 6 y diferentes recursos que apoyan esta entrega.
						</p>
						<ul class="text">
							<li>
								Instrucciones claras sobre el entregable.
							</li>
							<li>
								Instrucciones sobre el pitch a realizar y el horario en el que se presentaria. 
							</li>
							<li>
								Link a Moodle donde se realiza la entrega e instrucciones para realizarlo.
							</li>
							<li>
								Explicar como la entrega hace parte del funcionamiento del juego.
							</li>
							<li>
								En que fechas se debe realizar esta entrega.
							</li>
						</ul>
					</div>);
		default:
			return	null;
	}	
}



const PisosContainer = () => {
	const selector = localStorage.getItem("data-piso-sel")
	return (
		<div>
			<br></br>
			{selector 
				? pisoContentSwitch(selector)
				: <p>Seleccione un piso porfavor</p>
			}
		</div>
	);
}

ReactDOM.render(<PisosContainer/>, pisoCont)
