var pisoCont = document.querySelector('#pisos_container');

var data = {
	dos: {
		1: {
			entrega: [['ACTA DE COMPROMISO', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700189']],
			guia: []
		},
		2: {
			entrega: [['PREGUNTA ESENCIAL', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=701073']],
			guia: [['TALLER DE ÉTICA', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=745401'], ['PREGUNTAS CONVERSATORIO HABILIDADES BLANDAS', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=745626'], ['PREGUNTAS CONVERSATORIO TECNOLOGÍA Y SOCIEDAD', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=745684'], ['PREGUNTAS CONVERSATORIO ECONOMÍA DEL CONOCIMIENTO', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=745688'], ['PREGUNTAS CONVERSATORIO DISEÑO Y ERGONOMÍA', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=745692']]
		},
		3: {
			entrega: [['POSIBLES SOLUCIONES / INFOGRAFIA', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700231']],
			guia: []
		},
		4: {
			entrega: [['PROBLEMA / Diseño y Prototipo', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=701160'], ['PITCH PISO 4', ''], ['Avance del trabajo Escrito', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700251'], ['Evaluacion de Desempeños', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700274']],
			guia: []
		},
		5: {
			entrega: [['PROTOTIPO FINAL, Campaña Publicitaria y Estrategia de Mercado', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=701166'], ['PITCH PISO 3', ''], ['Trabajo en Equipo', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700299']],
			guia: []
		},
		6: {
			entrega: [['Validación de la Solucion', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700339'], ['PITCH FINAL', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700336'], ['Pagina Web', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700342'], ['Entrega Final: Trabajo Escrito', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700332'], ['Evaluacion de Desempeños II', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700346']],
			guia: []
		}
	},
	cuatro: {
		1: {
			entrega: [['ACTA DE COMPROMISO', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700426']],
			guia: []
		},
		2: {
			entrega: [['PREGUNTA ESENCIAL', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=701074']],
			guia: [['TALLER DE ÉTICA', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=745402'], ['PREGUNTAS CONVERSATORIO HABILIDADES BLANDAS', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=745627'], ['PREGUNTAS CONVERSATORIO TECNOLOGÍA Y SOCIEDAD', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=745627'], ['PREGUNTAS CONVERSATORIO ECONOMÍA DEL CONOCIMIENTO', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=745689'], ['PREGUNTAS CONVERSATORIO DISEÑO Y ERGONOMÍA', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=745693']]
		},
		3: {
			entrega: [['POSIBLES SOLUCIONES / INFOGRAFIA', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700465']],
			guia: []
		},
		4: {
			entrega: [['PROBLEMA / Diseño y Prototipo', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=701161'], ['PITCH PISO 4', ''], ['Avance del trabajo Escrito', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700485'], ['Evaluacion de Desempeños', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700506']],
			guia: []
		},
		5: {
			entrega: [['PROTOTIPO FINAL, Campaña Publicitaria y Estrategia de Mercado', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=701167'], ['PITCH PISO 3', ''], ['Trabajo en Equipo', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700531']],
			guia: []
		},
		6: {
			entrega: [['Validación de la Solucion', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700571'], ['PITCH FINAL', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700568'], ['Pagina Web', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700574'], ['Entrega Final: Trabajo Escrito', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700564'], ['Evaluacion de Desempeños II', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700578']],
			guia: []
		}
	}
};

var pisoTitle = function pisoTitle(sel) {
	switch (sel) {
		case '1':
			return 'Piso 1: Ambientación';
		case '2':
			return 'Piso 2: Conceptualización';
		case '3':
			return 'Piso 3: Ideación';
		case '4':
			return 'Piso 4: Diseño + Innovación';
		case '5':
			return 'Piso 5: Prototipado';
		case '6':
			return 'Piso 6: Sala de Juntas';
		default:
			return null;
	}
};

var styles = {};

var PisosContainer = function PisosContainer() {
	var str = localStorage.getItem("data-piso-sel");
	var selector = str ? str : '1';
	var gr = localStorage.getItem("data-grupo-sel");
	var group = gr ? gr : 'dos';
	var setGroup = function setGroup(grp) {
		localStorage.setItem("data-grupo-sel", grp);
		location.reload();
	};
	return React.createElement(
		'div',
		{ className: 'pad-content' },
		React.createElement('br', null),
		React.createElement(
			'div',
			null,
			React.createElement(
				'h2',
				{ className: 'title-content' },
				pisoTitle(selector)
			)
		),
		React.createElement('br', null),
		React.createElement(
			'div',
			{ className: 'grp-sel-cont' },
			group === 'dos' ? React.createElement(
				'div',
				{ className: 'grupo-sel grp-selected' },
				'Horario 2 - 4 pm'
			) : React.createElement(
				'div',
				{ className: 'grupo-sel', onClick: function onClick() {
						return setGroup('dos');
					} },
				'Horario 2 - 4 pm'
			),
			group === 'cuatro' ? React.createElement(
				'div',
				{ className: 'grupo-sel grp-selected' },
				'Horario 4 - 6 pm'
			) : React.createElement(
				'div',
				{ className: 'grupo-sel', onClick: function onClick() {
						return setGroup('cuatro');
					} },
				'Horario 4 - 6 pm'
			)
		),
		selector === '1' || selector === '2' || selector === '3' ? React.createElement(
			'div',
			null,
			data[group][selector].entrega[0] ? React.createElement(
				'div',
				{ className: 'src-element' },
				React.createElement(
					'span',
					{ className: 'piso-subtitle' },
					'ENTREGABLES'
				),
				data[group][selector] ? data[group][selector].entrega.map(function (item) {
					return React.createElement(
						'a',
						{ href: item[1], target: '_blank', key: item[0] },
						React.createElement(
							'div',
							{ className: 'div-src' },
							React.createElement('img', { src: './imgs/sources/up-file.png' }),
							React.createElement(
								'span',
								{ className: 'etesc-subtitle' },
								item[0]
							)
						)
					);
				}) : null
			) : null,
			React.createElement('br', null),
			data[group][selector].guia[0] ? React.createElement(
				'div',
				{ className: 'src-element' },
				React.createElement(
					'span',
					{ className: 'piso-subtitle' },
					'RETOS DE PISO'
				),
				data[group][selector] ? data[group][selector].guia.map(function (item) {
					return React.createElement(
						'a',
						{ href: item[1], target: '_blank', key: item[0] },
						React.createElement(
							'div',
							{ className: 'div-src' },
							React.createElement('img', { src: './imgs/sources/guia-Icon.png' }),
							React.createElement(
								'span',
								{ className: 'etesc-subtitle' },
								item[0]
							)
						)
					);
				}) : null
			) : null
		) : React.createElement(
			'h3',
			null,
			'El piso seleccionado estara disponible una vez se complete la fase del piso anterior'
		)
	);
};

ReactDOM.render(React.createElement(PisosContainer, null), pisoCont);