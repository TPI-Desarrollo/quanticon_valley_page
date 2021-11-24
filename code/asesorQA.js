const container = document.querySelector('.asesor-qa')

const data = [
    {
	menu: 'menu1',
	name: '¿Que es Quanticon Valley?',
	desc: `El juego Quanticon Valley es una apuesta de gamificación desarrollada y propuesta por la Facultad de Ingeniería. Participaron el programa innovaTE, grupo LIATER, el programa de innovación y el Taller de Proyectos Interdisciplinarios (TPI).
	    Se basa en la experiencia de TPI, busca promover la motivación y el desarrollo de habilidades blandas de sus participantes con el desarrollo de un proyecto.
	`,
    },
    {
	menu: 'menu2',
	name: '¿En qué consiste el juego Quanticon Valley?',
	desc: `Cada equipo participante será un jugador cuyos integrantes tienen un cargo, con un mentor asignado y con mínimo un experto guía que los acompañará durante todo el recorrido por el edificio. El jugador asciende durante el semestre en el edificio de siete (7) pisos. Para ascender, requiere resolver unos retos, que le permiten ir madurando su idea y construir la solución al proyecto con una solución innovadora.`,
    }
]
const QA = () => {
    return (
    <div>
	<div className="fqa-title">_Lo que más nos preguntan</div>
	{data.map(i =>
	<section className="fqa" id={i.menu}>
	    <a href={`#${i.menu}`}><h1>{i.name}</h1></a>
	    <p>{i.desc}</p>
	</section>
	)}	
    </div>
    )
}

const AsesorQA = () => {
    const asr = localStorage.getItem("data-asesor-sel")
    const asesor = asr ? asr : '1'
    return (
    <div>
	{asesor === '3' ?
	 <QA/>
	 : null }
    </div>
    );
}

ReactDOM.render(<AsesorQA/> , container)
