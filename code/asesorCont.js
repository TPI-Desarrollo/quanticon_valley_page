const container = document.querySelector('.asesor-content')

const data = {
	dos: {
		1 : {
			ova: [
				['Roles en el equipo de Trabajo','https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=738780']
			],
			pdf: [
			],
			video: [
				['Como Hacer un Pitch', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700302'],
				['Pregunta Escencial', 'https://campus.virtual.unal.edu.co/mod/page/view.php?id=701245'],
			],
			tool: [
				['Encuesta de persepcion conservatorios: como presentar un pitch', 'https://campus.virtual.unal.edu.co/mod/feedback/view.php?id=700304'],
				['Encuesta Presentacion de la materia', 'https://campus.virtual.unal.edu.co/mod/feedback/view.php?id=700175'],
				['Encuesta de Conocimientos Previos', 'https://campus.virtual.unal.edu.co/mod/feedback/view.php?id=700174'],
			],
		},
		2 : {
			ova: [
				['Metodología Véster y Árbol de Problemas', 'https://campus.virtual.unal.edu.co/mod/page/view.php?id=743427'],
				['Cómo hacer un Pestal?', 'https://campus.virtual.unal.edu.co/mod/page/view.php?id=743467'],
				['Mapa de Empatía', 'https://campus.virtual.unal.edu.co/mod/page/view.php?id=743476'],
			],
			pdf: [
			],
			video: [
				['Video Conservatorios 20 de Octubre', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700201'],
			],
			tool: [
			],
		},
		3 : {
			ova: [
				['GRABACIONES CONVERSATORIOS PISO 3','https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700214'],
			],
			pdf: [
			],
			video: [
			],
			tool: [
				['ENCUESTA DE PERCEPCIÓN CONVERSATORIOS PISO 3','https://campus.virtual.unal.edu.co/mod/feedback/view.php?id=700210'],
			],
		},
		4 : {
			ova: [
			],
			pdf: [
			],
			video: [
				['Videos Conversatorios 6 de Diciembre - Prototipado', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700256'],
				['Videos Conversatorios 6 de Diciembre - Laboratorio', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700286'],
				['Videos Conversatorios 6 de Diciembre - Mercadeo', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700240'],
			],
			tool: [
			],
		},
		5 : {
			ova: [
				['ANALISIS DE IMPACTO AMBIENTAL', ''],
				['MODELO DE NEGOCIO', ''],
				['PROPUESTA DE VALOR', ''],
			],
			pdf: [
			],
			video: [
			],
			tool: [
			],
		},
		6 : {
			ova: [
			],
			pdf: [
			],
			video: [
			],
			tool: [
			],
		},
	},
	cuatro: {
		1 : {
			ova: [
				['Roles en el equipo de Trabajo','https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=739513']
			],
			pdf: [
			],
			video: [
				['Como Hacer un Pitch', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700534'],
				['Pregunta Escencial', 'https://campus.virtual.unal.edu.co/mod/page/view.php?id=701209'],
			],
			tool: [
				['Encuesta de persepcion conservatorios: como presentar un pitch', 'https://campus.virtual.unal.edu.co/mod/feedback/view.php?id=700536'],
				['Encuesta Presentacion de la materia', 'https://campus.virtual.unal.edu.co/mod/feedback/view.php?id=700412'],
				['Encuesta de Conocimientos Previos', 'https://campus.virtual.unal.edu.co/mod/feedback/view.php?id=700411'],
			],
		},
		2 : {
			ova: [
				['Metodología Véster y Árbol de Problemas', 'https://campus.virtual.unal.edu.co/mod/page/view.php?id=743429'],
				['Cómo hacer un Pestal?', 'https://campus.virtual.unal.edu.co/mod/page/view.php?id=743468'],
				['Mapa de Empatía', 'https://campus.virtual.unal.edu.co/mod/page/view.php?id=743477'],
			],
			pdf: [
			],
			video: [
				['Video Conservatorios 20 de Octubre', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700435'],
			],
			tool: [
			],
		},
		3 : {
			ova: [
				['GRABACIONES CONVERSATORIOS PISO 3','https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700448'],
			],
			pdf: [
			],
			video: [
			],
			tool: [
				['ENCUESTA DE PERCEPCIÓN CONVERSATORIOS PISO 3','https://campus.virtual.unal.edu.co/mod/feedback/view.php?id=700444'],
			],
		},
		4 : {
			ova: [
			],
			pdf: [
			],
			video: [
				['Videos Conversatorios 6 de Diciembre - Prototipado', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700490'],
				['Videos Conversatorios 6 de Diciembre - Laboratorio', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700518'],
				['Videos Conversatorios 6 de Diciembre - Mercadeo', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700474'],
			],
			tool: [
			],
		},
		5 : {
			ova: [
				['ANALISIS DE IMPACTO AMBIENTAL', ''],
				['MODELO DE NEGOCIO', ''],
				['PROPUESTA DE VALOR', ''],
			],
			pdf: [
			],
			video: [
			],
			tool: [
			],
		},
		6 : {
			ova: [
			],
			pdf: [
			],
			video: [
			],
			tool: [
			],
		},
	}
}

const Pisos = () => {
	const piso = localStorage.getItem("data-piso-sel")
	const [el, setPiso] = React.useState(0)
	const selectorF = (num) => {
	    setPiso(num)
	    container.setAttribute("data-piso-sel", num)
	    localStorage.setItem("data-piso-sel", num)
	    location.reload();
	}
	return (
	<div id="piso-selector"> 
		{[1,2,3,4,5,6].map((item) => 
		    (piso == item)
			? <div className="col-2 piso-col" data-piso={item} key={item}>
			    <a><span id="piso-selected" className="piso-select">
				    Piso {item}
			    </span></a>
			    </div> 
			: <div className="col-2 piso-col" data-piso={item} key={item}
				onClick={() => selectorF(item)}>
			    <a><span className="piso-select">
				Piso {item}
			    </span></a>
			</div> 
		)}
	</div>
	);
}

const AsesorCont = () => {
	const asr = localStorage.getItem("data-asesor-sel")
	const asesor = asr ? asr : '1'
	const str = localStorage.getItem("data-piso-sel")
	const selector = str ? str : '1'
	const gr = localStorage.getItem("data-grupo-sel")
	const group = gr ? gr : 'dos'
	const setGroup = grp => {
		localStorage.setItem("data-grupo-sel", grp)
		location.reload()
	}
	return (
	    <div>
		{asesor === '1' ?
		 <div>
		 <Pisos/>
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
	    {selector === '1' || selector === '2' || selector === '3'  || selector === '4' 
		    ? <div>
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
			    <span>_ENCUESTAS</span>
			    {data[group][selector] ? data[group][selector].tool.map(item => 
				    <div key={item[0]} className="ova-item" data-source-type="form" data-text={item[0]} data-link={item[1]}></div>
			    ): null}
		    </div>
		    : null}
	    </div>
		    </div>
		    :<h3>El piso seleccionado estara disponible una vez se complete la fase del piso anterior</h3>
	    }
		 </div>
		 : null}
	    </div>
	);
}

ReactDOM.render(<AsesorCont/>, container)
