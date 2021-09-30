const container = document.querySelector('.lobby-content')

const data = {
	dos: {
		1 : {
			ova: [
				['Juego SALA DE ESCAPE', 'https://campus.virtual.unal.edu.co/mod/lesson/view.php?id=700603'],
				['Cronograma Interactivo', 'https://campus.virtual.unal.edu.co/mod/page/view.php?id=701298'],
				['SYLLABUS - Libro Interactivo', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700372'],
				['Decalogo Del Mentor', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700168'],
				['Comunicacion Eficaz', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700320'],
			],
			pdf: [],
			video: [],
			tool: [],
		},
		3 : {
			ova: [
				['GUIA METODOLOGICA INFOGRAFIA', ''],
				['GUIA DE TRABAJO ESCRITO', ''],
			],
			pdf: [],
			video: [],
			tool: [],
		},
		6 : {
			ova: [
				['GUIA PRE SELECCION DE MEJORES', ''],
				['GUIA PARTICIPACION DE PROFESORES', ''],
				['GUIA PARTICIPACION DE ESTUDIANTE', ''],
				['GUIA DE PRESENTACION FINAL PITCH Y PROTOTIPO', ''],
			],
			pdf: [],
			video: [],
			tool: [],
		},
	},
	cuatro: {
		1 : {
			ova: [
				['Juego SALA DE ESCAPE', 'https://campus.virtual.unal.edu.co/mod/lesson/view.php?id=700603'],
				['Cronograma Interactivo', 'https://campus.virtual.unal.edu.co/mod/page/view.php?id=701299'],
				['SYLLABUS - Libro Interactivo', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700601'],
				['Decalogo Del Mentor', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700405'],
				['Comunicacion Eficaz', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700552'],
			],
			pdf: [],
			video: [],
			tool: [],
		},
		3 : {
			ova: [
				['GUIA METODOLOGICA INFOGRAFIA', ''],
				['GUIA DE TRABAJO ESCRITO', ''],
			],
			pdf: [],
			video: [],
			tool: [],
		},
		6 : {
			ova: [
				['GUIA PRE SELECCION DE MEJORES', ''],
				['GUIA PARTICIPACION DE PROFESORES', ''],
				['GUIA PARTICIPACION DE ESTUDIANTE', ''],
				['GUIA DE PRESENTACION FINAL PITCH Y PROTOTIPO', ''],
			],
			pdf: [],
			video: [],
			tool: [],
		},
	}
}

const LobbyCont = () => {
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

ReactDOM.render(<LobbyCont/>, container)
