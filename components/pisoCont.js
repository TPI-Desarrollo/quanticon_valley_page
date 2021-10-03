var pisoCont = document.querySelector('#pisos_container');

var data = {
	dos: {
		1: {
			entrega: [['ACTA DE COMPROMISO', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700189'], ['PITCH PISO 1', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=701324']],
			guia: [['Rubrica Pitch - Piso 1', 'https://campus.virtual.unal.edu.co/pluginfile.php/2166880/mod_resource/content/1/Rúbrica_pitch%20piso%201.pdf']]
		},
		2: {
			entrega: [['PROBLEMA CONTEXTUALIZADO', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=701073'], ['PITCH PISO 2', '']],
			guia: []
		},
		3: {
			entrega: [['POSIBLES SOLUCIONES / INFOGRAFIA', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700231'], ['PITCH PISO 3', '']],
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
			entrega: [['ACTA DE COMPROMISO', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700426'], ['PITCH PISO 1', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=701325']],
			guia: [['Rubrica del Pitch - Piso 1', 'https://campus.virtual.unal.edu.co/pluginfile.php/2166881/mod_resource/content/1/Rúbrica_pitch%20piso%201.pdf']]
		},
		2: {
			entrega: [['PROBLEMA CONTEXTUALIZADO', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=701074'], ['PITCH PISO 2', '']],
			guia: []
		},
		3: {
			entrega: [['POSIBLES SOLUCIONES / INFOGRAFIA', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700465'], ['PITCH PISO 3', '']],
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
		null,
		React.createElement('br', null),
		React.createElement(
			'div',
			null,
			React.createElement(
				'h2',
				{ 'class': 'title-content' },
				pisoTitle(selector)
			)
		),
		React.createElement('br', null),
		React.createElement(
			'div',
			{ 'class': 'grp-sel-cont' },
			group === 'dos' ? React.createElement(
				'div',
				{ 'class': 'grupo-sel grp-selected' },
				'Horario 2 - 4 pm'
			) : React.createElement(
				'div',
				{ 'class': 'grupo-sel', onClick: function onClick() {
						return setGroup('dos');
					} },
				'Horario 2 - 4 pm'
			),
			group === 'cuatro' ? React.createElement(
				'div',
				{ 'class': 'grupo-sel grp-selected' },
				'Horario 4 - 6 pm'
			) : React.createElement(
				'div',
				{ 'class': 'grupo-sel', onClick: function onClick() {
						return setGroup('cuatro');
					} },
				'Horario 4 - 6 pm'
			)
		),
		data[group][selector].entrega[0] ? React.createElement(
			'div',
			{ 'class': 'src-element' },
			React.createElement(
				'span',
				{ 'class': 'piso-subtitle' },
				'ENTREGABLES'
			),
			data[group][selector] ? data[group][selector].entrega.map(function (item) {
				return React.createElement(
					'a',
					{ href: item[1], target: '_blank' },
					React.createElement(
						'div',
						{ className: 'div-src', key: item[0] },
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
			{ 'class': 'src-element' },
			React.createElement(
				'span',
				{ 'class': 'piso-subtitle' },
				'GUIAS'
			),
			data[group][selector] ? data[group][selector].guia.map(function (item) {
				return React.createElement(
					'a',
					{ href: item[1], target: '_blank' },
					React.createElement(
						'div',
						{ className: 'div-src', key: item[0] },
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
	);
};

ReactDOM.render(React.createElement(PisosContainer, null), pisoCont);
