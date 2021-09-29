const pisoCont = document.querySelector('#pisos_container')

const data = {
	dos: {
		1 : {
			ova: [
				['ACTA DE COMPROMISO', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700189'],
			],
			pdf: [],
			video: [],
			tool: [],
		},
		2 : {
			ova: [],
			pdf: [],
			video: [],
			tool: [],
		},
	},
	cuatro: {
		1 : {
			ova: [],
			pdf: [],
			video: [],
			tool: [],
		},
		2 : {
			ova: [],
			pdf: [],
			video: [],
			tool: [],
		},
	}
}
const pisoContentSwitch = (piso) => { 
	switch(piso){
		case '1':
			return	(<div>
						<h2 class="title-content">
							Piso 1: Ambientación
						</h2>
					</div>);
		case '2':
			return	(<div>
						<h2 class="title-content">
							Piso 2: Conceptualización
						</h2>
					</div>);
		case '3':
			return	(<div>
						<h2 class="title-content">
							Piso 3: Ideación
						</h2>
					</div>);
		case '4':
			return	(<div>
						<h2 class="title-content">
							Piso 4: Diseño + Innovación
						</h2>
					</div>);
		case '5':
			return	(<div>
						<h2 class="title-content">
							Piso 5: Prototipado
						</h2>
					</div>);
		case '6':
			return	(<div>
						<h2 class="title-content">
							Piso 6: Sala de Juntas
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
	const str = localStorage.getItem("data-piso-sel")
	const selector = str ? str : 1
	const gr = localStorage.getItem("data-grupo-sel")
	const group = gr ? gr : 'dos'
	const setGroup = grp => {
		localStorage.setItem("data-grupo-sel", grp)
		location.reload()
	}
	return (
		<div>
			<br></br>
			{selector 
				? pisoContentSwitch(selector)
				: <p>Seleccione un piso porfavor</p>
			}
			<br></br>
			<div class="grp-sel-cont">
				{group === 'dos'
					? <div class="grupo-sel grp-selected">
							Horario 2 - 4 pm
						</div>
					: <div class="grupo-sel" onClick={() => setGroup('dos')}>
							Horario 2 - 4 pm
						</div>
				}
				{group === 'cuatro'
					? <div class="grupo-sel grp-selected">
							Horario 4 - 6 pm
						</div>
					: <div class="grupo-sel" onClick={() => setGroup('cuatro')}>
							Horario 4 - 6 pm
						</div>
				}
			</div>
		<div class="src-grid">
			{data[group][selector].ova[0] ? 
			<div class="src-element">
				<span>_OVAS</span>
				{data[group][selector] ? data[group][selector].ova.map(item => 
					<div key={item[0]} class="ova-item" data-source-type="ova" data-text={item[0]} data-link={item[1]}></div>
				): null}
			</div>
			: null}

			{data[group][selector].pdf[0] ? 
			<div class="src-element">
				<span>_PDFs</span>
				{data[group][selector] ? data[group][selector].pdf.map(item => 
					<div key={item[0]} class="ova-item" data-source-type="pdf" data-text={item[0]} data-link={item[1]}></div>
				): null}
			</div>
			: null}

			{data[group][selector].video[0] ? 
			<div class="src-element">
				<span>_VIDEOS</span>
				{data[group][selector] ? data[group][selector].video.map(item => 
					<div key={item[0]} class="ova-item" data-source-type="video" data-text={item[0]} data-link={item[1]}></div>
				): null}
			</div>
			: null}

			{data[group][selector].tool[0] ? 
			<div class="src-element">
				<span>_HERRAMIENTAS</span>
				{data[group][selector] ? data[group][selector].tool.map(item => 
					<div key={item[0]} class="ova-item" data-source-type="tools" data-text={item[0]} data-link={item[1]}></div>
				): null}
			</div>
			: null}
		</div>
	</div>
	);
}

ReactDOM.render(<PisosContainer/>, pisoCont)
