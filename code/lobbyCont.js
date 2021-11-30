const container = document.querySelector('.lobby-content')

const extra = [
  ['Conoce a los Mentores, Expertos y Guias en esta Aventura', 'https://ingenieria.unal.edu.co/tpi/index.php/equipotpi/profesores', './imgs/Icon_actores.svg'], 
  //['Preguntas Frecuentes', ''], 
]
const data = {
	dos: {
		1 : {
			ova: [
				['Juego SALA DE ESCAPE', 'https://campus.virtual.unal.edu.co/mod/lesson/view.php?id=700374'],
				['Cronograma Interactivo', 'https://campus.virtual.unal.edu.co/mod/page/view.php?id=701298'],
				['Decalogo Del Mentor', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700168'],
				['Comunicacion Eficaz', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700320'],
			],
			pdf: [
				['SYLLABUS - Libro Interactivo', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700372'],
			],
			video: [],
			tool: [],
		},
		2 : {
			ova: [],
			pdf: [
				['PROTOCOLO PITCH PISO 2','https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=749093'],
				['RUBRICA PITCH PISO 2','https://campus.virtual.unal.edu.co/mod/resource/view.php?id=749453&forceview=1'],
			],
			video: [],
			tool: [],
		},
		3 : {
			ova: [
				['INFOGRAFÍA INTERACTIVA DE EJEMPLO', 'https://campus.virtual.unal.edu.co/mod/page/view.php?id=700227'],
			],
			pdf: [
				['GUÍA METODOLÓGICA INFOGRAFÍA', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700225'],
				['GUÍA DE TRABAJO ESCRITO', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700249'],
				['RÚBRICA DE INFOGRAFÍA','https://campus.virtual.unal.edu.co/mod/resource/view.php?id=700226'],
				['RÚBRICA ASUNTOS DE GÉNERO','https://campus.virtual.unal.edu.co/mod/resource/view.php?id=755622']
			],
			video: [],
			tool: [],
		},
		6 : {
			ova: [
			],
			pdf: [
				['GUIA PRE SELECCION DE MEJORES', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700321'],
				['GUIA PARTICIPACION DE PROFESORES', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700317'],
				['GUIA PARTICIPACION DE ESTUDIANTE', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700318'],
				['GUIA DE PRESENTACION FINAL PITCH Y PROTOTIPO', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700319'],
			],
			video: [
				['CREACIÓN PAGINAS WIX', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700315'],
			],
			tool: [],
		},
	},
	cuatro: {
		1 : {
			ova: [
				['Juego SALA DE ESCAPE', 'https://campus.virtual.unal.edu.co/mod/lesson/view.php?id=700603'],
				['Cronograma Interactivo', 'https://campus.virtual.unal.edu.co/mod/page/view.php?id=701299'],
				['Decalogo Del Mentor', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700405'],
				['Comunicacion Eficaz', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700552'],
			],
			pdf: [
				['SYLLABUS - Libro Interactivo', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700601'],
			],
			video: [],
			tool: [],
		},
		2 : {
			ova: [],
			pdf: [
				['PROTOCOLO PITCH PISO 2','https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=749094'],
				['RUBRICA PITCH PISO 2','https://campus.virtual.unal.edu.co/mod/resource/view.php?id=749452&forceview=1'],
			],
			video: [],
			tool: [],
		},
		3 : {
			ova: [
				['INFOGRAFÍA INTERACTIVA DE EJEMPLO', 'https://campus.virtual.unal.edu.co/mod/page/view.php?id=700461'],
			],
			pdf: [
				['GUÍA METODOLÓGICA INFOGRAFÍA', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700459'],
				['GUÍA DE TRABAJO ESCRITO', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700483'],
				['RÚBRICA DE INFOGRAFÍA','https://campus.virtual.unal.edu.co/mod/resource/view.php?id=700460'],
				['RÚBRICA ASUNTOS DE GÉNERO','https://campus.virtual.unal.edu.co/mod/resource/view.php?id=755623']
			],
			video: [],
			tool: [],
		},
		6 : {
			ova: [
			],
			pdf: [
				['GUIA PRE SELECCION DE MEJORES', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700553'],
				['GUIA PARTICIPACION DE PROFESORES', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700549'],
				['GUIA PARTICIPACION DE ESTUDIANTE', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700550'],
				['GUIA DE PRESENTACION FINAL PITCH Y PROTOTIPO', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700551'],
			],
			video: [
				['CREACIÓN PAGINAS WIX', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700547'],
			],
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
			<div className="grp-sel-cont">
				{group === 'dos'
					? <div className="grupo-sel grp-selected">
							Horario 2 - 4 pm
						</div>
					: <div className="grupo-sel" onClick={() => setGroup('dos')}>
							Horario 2 - 4 pm
						</div>
				}
				{group === 'cuatro'
					? <div className="grupo-sel grp-selected">
							Horario 4 - 6 pm
						</div>
					: <div className="grupo-sel" onClick={() => setGroup('cuatro')}>
							Horario 4 - 6 pm
						</div>
				}
			</div>
		{selector === '1' || selector === '2'  || selector === '3' || selector === '4' 
			? <div>
				<h3 className="title-content" style={{fontSize: '22px'}}>
					Recursos del Piso
				</h3>
			<div className="src-grid">
				{data[group][selector].ova[0] ? 
				<div className="src-element">
					<span>_OVAS</span>
					{data[group][selector] ? data[group][selector].ova.map(item => 
						<div key={item[0]} className="ova-item" data-source-type="ova" data-text={item[0]} data-link={item[1]}></div>
					): null}
				</div>
				: null}

				{data[group][selector].pdf[0] ? 
				<div className="src-element">
					<span>_PDFs</span>
					{data[group][selector] ? data[group][selector].pdf.map(item => 
						<div key={item[0]} className="ova-item" data-source-type="pdf" data-text={item[0]} data-link={item[1]}></div>
					): null}
				</div>
				: null}

				{data[group][selector].video[0] ? 
				<div className="src-element">
					<span>_VIDEOS</span>
					{data[group][selector] ? data[group][selector].video.map(item => 
						<div key={item[0]} className="ova-item" data-source-type="video" data-text={item[0]} data-link={item[1]}></div>
					): null}
				</div>
				: null}

				{data[group][selector].tool[0] ? 
				<div className="src-element">
					<span>_HERRAMIENTAS</span>
					{data[group][selector] ? data[group][selector].tool.map(item => 
						<div key={item[0]} className="ova-item" data-source-type="tools" data-text={item[0]} data-link={item[1]}></div>
					): null}
				</div>
				: null}
			</div>
			<br/>
			</div>
			:<h3>El piso seleccionado estara disponible una vez se complete la fase del piso anterior</h3>
		}
            </div>
    );
}

ReactDOM.render(<LobbyCont/>, container)
