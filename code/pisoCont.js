const pisoCont = document.querySelector('#pisos_container')

const data = {
	dos: {
		1 : {
			entrega: [
				['ACTA DE COMPROMISO', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700189'],
			],
			guia: [
			],
		},
		2 : {
			entrega: [
				['PREGUNTA ESENCIAL', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=701073'],
			],
			guia: [
				['TALLER DE ÉTICA', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=745401'],
				['PREGUNTAS CONVERSATORIO HABILIDADES BLANDAS', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=745626'],
				['PREGUNTAS CONVERSATORIO TECNOLOGÍA Y SOCIEDAD', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=745684'],
				['PREGUNTAS CONVERSATORIO ECONOMÍA DEL CONOCIMIENTO', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=745688'],
				['PREGUNTAS CONVERSATORIO DISEÑO Y ERGONOMÍA', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=745692'],
			],
		},
		3 : {
			entrega: [
				['POSIBLES SOLUCIONES / INFOGRAFIA', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700231'],
				['PITCH PISO 3', ''],
			],
			guia: [],
		},
		4 : {
			entrega: [
				['PROBLEMA / Diseño y Prototipo', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=701160'],
				['PITCH PISO 4', ''],
				['Avance del trabajo Escrito', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700251'],
				['Evaluacion de Desempeños', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700274'],
			],
			guia: [],
		},
		5 : {
			entrega: [
				['PROTOTIPO FINAL, Campaña Publicitaria y Estrategia de Mercado', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=701166'],
				['PITCH PISO 3', ''],
				['Trabajo en Equipo', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700299'],
			],
			guia: [],
		},
		6 : {
			entrega: [
				['Validación de la Solucion', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700339'],
				['PITCH FINAL', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700336'],
				['Pagina Web', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700342'],
				['Entrega Final: Trabajo Escrito', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700332'],
				['Evaluacion de Desempeños II', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700346'],
			],
			guia: [],
		},
	},
	cuatro: {
		1 : {
			entrega: [
				['ACTA DE COMPROMISO', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700426'],
			],
			guia: [
			],
		},
		2 : {
			entrega: [
				['PREGUNTA ESENCIAL', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=701074'],
			],
			guia: [
				['TALLER DE ÉTICA', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=745402'],
				['PREGUNTAS CONVERSATORIO HABILIDADES BLANDAS', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=745627'],
				['PREGUNTAS CONVERSATORIO TECNOLOGÍA Y SOCIEDAD', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=745627'],
				['PREGUNTAS CONVERSATORIO ECONOMÍA DEL CONOCIMIENTO', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=745689'],
				['PREGUNTAS CONVERSATORIO DISEÑO Y ERGONOMÍA', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=745693'],
			],
		},
		3 : {
			entrega: [
				['POSIBLES SOLUCIONES / INFOGRAFIA', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700465'],
				['PITCH PISO 3', ''],
			],
			guia: [],
		},
		4 : {
			entrega: [
				['PROBLEMA / Diseño y Prototipo', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=701161'],
				['PITCH PISO 4', ''],
				['Avance del trabajo Escrito', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700485'],
				['Evaluacion de Desempeños', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700506'],
			],
			guia: [],
		},
		5 : {
			entrega: [
				['PROTOTIPO FINAL, Campaña Publicitaria y Estrategia de Mercado', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=701167'],
				['PITCH PISO 3', ''],
				['Trabajo en Equipo', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700531'],
			],
			guia: [],
		},
		6 : {
			entrega: [
				['Validación de la Solucion', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700571'],
				['PITCH FINAL', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700568'],
				['Pagina Web', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700574'],
				['Entrega Final: Trabajo Escrito', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700564'],
				['Evaluacion de Desempeños II', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700578'],
			],
			guia: [],
		},
	}
}

const pisoTitle = (sel) => {
	switch(sel){
		case '1': 
			return 'Piso 1: Ambientación'
		case '2': 
			return 'Piso 2: Conceptualización'
		case '3': 
			return 'Piso 3: Ideación'
		case '4': 
			return 'Piso 4: Diseño + Innovación'
		case '5': 
			return 'Piso 5: Prototipado'
		case '6': 
			return 'Piso 6: Sala de Juntas'
		default:
			return null
	}
}

const styles = {}


const PisosContainer = () => {
	const str = localStorage.getItem("data-piso-sel")
	const selector = str ? str : '1'
	const gr = localStorage.getItem("data-grupo-sel")
	const group = gr ? gr : 'dos'
	const setGroup = grp => {
		localStorage.setItem("data-grupo-sel", grp)
		location.reload()
	}
	return (
		<div className="pad-content">
			<br></br>
			<div>
				<h2 className="title-content">
					{pisoTitle(selector)}
				</h2>
			</div>
			<br></br>
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
		{selector === '1' || selector === '2' 
				? <div>
			{data[group][selector].entrega[0] ? 
			<div className="src-element">
				<span className="piso-subtitle">ENTREGABLES</span>
				{data[group][selector] ? data[group][selector].entrega.map(item => 
					<a href={item[1]} target="_blank" key={item[0]} ><div className="div-src">
						<img src="./imgs/sources/up-file.png"/>
						<span className="etesc-subtitle">{item[0]}</span>
					</div></a>
				): null}
			</div>
			: null}
			<br/>
			{data[group][selector].guia[0] ? 
			<div className="src-element">
				<span className="piso-subtitle">RETOS DE PISO</span>
				{data[group][selector] ? data[group][selector].guia.map(item => 
					<a href={item[1]} target="_blank" key={item[0]} ><div className="div-src" >
						<img src="./imgs/sources/guia-Icon.png"/>
						<span className="etesc-subtitle">{item[0]}</span>
					</div></a>
				): null}
			</div>
			: null}
				</div>
				:<h3>El piso seleccionado estara disponible una vez se complete la fase del piso anterior</h3>
			}
	</div>
	);
}

ReactDOM.render(<PisosContainer/>, pisoCont)
