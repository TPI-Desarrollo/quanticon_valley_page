var container = document.querySelector('.asesor-qa');

var data = [{
			menu: 'menu1',
			name: '¿Que es Quanticon Valley?',
			desc: 'El juego Quanticon Valley es una apuesta de gamificaci\xF3n desarrollada y propuesta por la Facultad de Ingenier\xEDa. Participaron el programa innovaTE, grupo LIATER, el programa de innovaci\xF3n y el Taller de Proyectos Interdisciplinarios (TPI).\n\t    Se basa en la experiencia de TPI, busca promover la motivaci\xF3n y el desarrollo de habilidades blandas de sus participantes con el desarrollo de un proyecto.\n\t'
}, {
			menu: 'menu2',
			name: '¿En qué consiste el juego Quanticon Valley?',
			desc: 'Cada equipo participante ser\xE1 un jugador cuyos integrantes tienen un cargo, con un mentor asignado y con m\xEDnimo un experto gu\xEDa que los acompa\xF1ar\xE1 durante todo el recorrido por el edificio. El jugador asciende durante el semestre en el edificio de siete (7) pisos. Para ascender, requiere resolver unos retos, que le permiten ir madurando su idea y construir la soluci\xF3n al proyecto con una soluci\xF3n innovadora.'
}];
var QA = function QA() {
			return React.createElement(
						'div',
						null,
						React.createElement(
									'div',
									{ className: 'fqa-title' },
									'_Lo que m\xE1s nos preguntan'
						),
						data.map(function (i) {
									return React.createElement(
												'section',
												{ className: 'fqa', id: i.menu },
												React.createElement(
															'a',
															{ href: '#' + i.menu },
															React.createElement(
																		'h1',
																		null,
																		i.name
															)
												),
												React.createElement(
															'p',
															null,
															i.desc
												)
									);
						})
			);
};

var AsesorQA = function AsesorQA() {
			var asr = localStorage.getItem("data-asesor-sel");
			var asesor = asr ? asr : '1';
			return React.createElement(
						'div',
						null,
						asesor === '3' ? React.createElement(QA, null) : null
			);
};

ReactDOM.render(React.createElement(AsesorQA, null), container);