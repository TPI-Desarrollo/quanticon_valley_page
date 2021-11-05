const container = document.querySelector('.info-content')



const infoA = [
	"./imgs/info/1.png", "./imgs/info/2.png",
	"./imgs/info/3.png", "./imgs/info/4.png",
]
const infoB = [
	"./imgs/info/5.png", "./imgs/info/6.png",
	"./imgs/info/7.png", "./imgs/info/8.png",
	"./imgs/info/9.png", "./imgs/info/10.png",
]
const Acerca = () => {
	return (
		<div>
			<h3 className="info-title">_Acerca de</h3>
			<div className="grid-info-a">
				<div>
				<p>El juego Quanticon Valley es una apuesta de gamificacion desarrollada y propuesta por la Facultad de ingenieria. Participaron el programa innovaTE, grupo LIATER, el programa de innovacion y el Taller de Proyectos Interdisciplinarios (TPI).</p>
				<p>Se basa en la experiencia de TPI, busca promover la motivacion y el desarrolla de habilidades blandas de sus participantes con el desarrollo de un proyecto. Damos una calurosa bienvenida y esperamos contar con cualquier aporte para la mejora continua.</p>
			</div>
				<img src="./imgs/info/QV.png"/>
		</div>
		<h4 className="info-subtitle">Organiza</h4>
		<div className="grid-info-b">
			{infoA.map((i) => <img key={i} src={i}/>)}
		</div>
		<h4 className="info-subtitle">Apoya</h4>
		<div className="grid-info-b">
			{infoB.map((i) => <img key={i} src={i}/>)}
		</div>
		</div>
	);
}
const equipo = [
	{ph:'./imgs/team/1.png',name:'Luis Carlos Forero',rol:'Lider de estrategia',depend:'Programa de innovacion Tecnologica II-2021'},
	{ph:'./imgs/team/1.png',name:'Camilo Cortes',rol:'Vicedecano de Investigacion',depend:'Facultad de Ingenieria Sede Bogota'},
	{ph:'./imgs/team/1.png',name:'Fernando Herrera',rol:'Lider LIAT-ER',depend:'Programa de innovacion Tecnologica II-2021'},
	{ph:'./imgs/team/1.png',name:'Alfonso Herrera',rol:'Profesor Taller de Proyectos Interdisciplinarios',depend:'InnovaTE'},
	{ph:'./imgs/team/1.png',name:'Lina Maria Chacon',rol:'Profesora',depend:''},
	{ph:'./imgs/team/1.png',name:'Luis Alejandro Cardenas',rol:'Inginiero Apoyo',depend:'Coordinacion LIAT-ER'},
]
const Equipo = () => {
	return (
		<div className="team-grid">
			{equipo.map((i) => 
				<div key={i.name} className="team-ele">
					<img className="photo" src={i.ph}/>
					<span className="mit-name">{i.name}</span>
					<span>{i.rol}</span>
					<span>{i.depend}</span>
				</div>
			)}
		</div>
	);
}

const Info = () => {
	const pg = localStorage.getItem("data-informacion-sel")
	const page = pg ? pg : '1'
	const selectorPage = (num) => {
		localStorage.setItem("data-informacion-sel", num)
		location.reload();
	}
	console.log(page)
	return (
		<div>
			<div className="page-selector">
				{page === '1'
					? <div className="pg-item-sel">Acerca de</div>
					: <div className="pg-item" onClick={()=>selectorPage('1')}>Acerca de</div>
				}
			</div>
			{page === '1'
				? <Acerca/>
				: null
			}
		</div>
	);
}

ReactDOM.render(<Info/>, container)
