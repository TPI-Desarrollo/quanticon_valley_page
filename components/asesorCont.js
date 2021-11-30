var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var container = document.querySelector('.asesor-content');

var data = {
	dos: {
		1: {
			ova: [['Roles en el equipo de Trabajo', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=738780']],
			pdf: [],
			video: [['Como Hacer un Pitch', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700302'], ['Pregunta Escencial', 'https://campus.virtual.unal.edu.co/mod/page/view.php?id=701245']],
			tool: [['Encuesta de persepcion conservatorios: como presentar un pitch', 'https://campus.virtual.unal.edu.co/mod/feedback/view.php?id=700304'], ['Encuesta Presentacion de la materia', 'https://campus.virtual.unal.edu.co/mod/feedback/view.php?id=700175'], ['Encuesta de Conocimientos Previos', 'https://campus.virtual.unal.edu.co/mod/feedback/view.php?id=700174']]
		},
		2: {
			ova: [['Metodología Véster y Árbol de Problemas', 'https://campus.virtual.unal.edu.co/mod/page/view.php?id=743427'], ['Cómo hacer un Pestal?', 'https://campus.virtual.unal.edu.co/mod/page/view.php?id=743467'], ['Mapa de Empatía', 'https://campus.virtual.unal.edu.co/mod/page/view.php?id=743476']],
			pdf: [],
			video: [['Video Conservatorios 20 de Octubre', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700201']],
			tool: []
		},
		3: {
			ova: [['GRABACIONES CONVERSATORIOS PISO 3', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700214']],
			pdf: [],
			video: [],
			tool: [['ENCUESTA DE PERCEPCIÓN CONVERSATORIOS PISO 3', 'https://campus.virtual.unal.edu.co/mod/feedback/view.php?id=700210']]
		},
		4: {
			ova: [],
			pdf: [],
			video: [['Videos Conversatorios 6 de Diciembre - Prototipado', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700256'], ['Videos Conversatorios 6 de Diciembre - Laboratorio', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700286'], ['Videos Conversatorios 6 de Diciembre - Mercadeo', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700240']],
			tool: []
		},
		5: {
			ova: [['ANALISIS DE IMPACTO AMBIENTAL', ''], ['MODELO DE NEGOCIO', ''], ['PROPUESTA DE VALOR', '']],
			pdf: [],
			video: [],
			tool: []
		},
		6: {
			ova: [],
			pdf: [],
			video: [],
			tool: []
		}
	},
	cuatro: {
		1: {
			ova: [['Roles en el equipo de Trabajo', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=739513']],
			pdf: [],
			video: [['Como Hacer un Pitch', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700534'], ['Pregunta Escencial', 'https://campus.virtual.unal.edu.co/mod/page/view.php?id=701209']],
			tool: [['Encuesta de persepcion conservatorios: como presentar un pitch', 'https://campus.virtual.unal.edu.co/mod/feedback/view.php?id=700536'], ['Encuesta Presentacion de la materia', 'https://campus.virtual.unal.edu.co/mod/feedback/view.php?id=700412'], ['Encuesta de Conocimientos Previos', 'https://campus.virtual.unal.edu.co/mod/feedback/view.php?id=700411']]
		},
		2: {
			ova: [['Metodología Véster y Árbol de Problemas', 'https://campus.virtual.unal.edu.co/mod/page/view.php?id=743429'], ['Cómo hacer un Pestal?', 'https://campus.virtual.unal.edu.co/mod/page/view.php?id=743468'], ['Mapa de Empatía', 'https://campus.virtual.unal.edu.co/mod/page/view.php?id=743477']],
			pdf: [],
			video: [['Video Conservatorios 20 de Octubre', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700435']],
			tool: []
		},
		3: {
			ova: [['GRABACIONES CONVERSATORIOS PISO 3', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700448']],
			pdf: [],
			video: [],
			tool: [['ENCUESTA DE PERCEPCIÓN CONVERSATORIOS PISO 3', 'https://campus.virtual.unal.edu.co/mod/feedback/view.php?id=700444']]
		},
		4: {
			ova: [],
			pdf: [],
			video: [['Videos Conversatorios 6 de Diciembre - Prototipado', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700490'], ['Videos Conversatorios 6 de Diciembre - Laboratorio', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700518'], ['Videos Conversatorios 6 de Diciembre - Mercadeo', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700474']],
			tool: []
		},
		5: {
			ova: [['ANALISIS DE IMPACTO AMBIENTAL', ''], ['MODELO DE NEGOCIO', ''], ['PROPUESTA DE VALOR', '']],
			pdf: [],
			video: [],
			tool: []
		},
		6: {
			ova: [],
			pdf: [],
			video: [],
			tool: []
		}
	}
};

var Pisos = function Pisos() {
	var piso = localStorage.getItem("data-piso-sel");

	var _React$useState = React.useState(0),
	    _React$useState2 = _slicedToArray(_React$useState, 2),
	    el = _React$useState2[0],
	    setPiso = _React$useState2[1];

	var selectorF = function selectorF(num) {
		setPiso(num);
		container.setAttribute("data-piso-sel", num);
		localStorage.setItem("data-piso-sel", num);
		location.reload();
	};
	return React.createElement(
		'div',
		{ id: 'piso-selector' },
		[1, 2, 3, 4, 5, 6].map(function (item) {
			return piso == item ? React.createElement(
				'div',
				{ className: 'col-2 piso-col', 'data-piso': item, key: item },
				React.createElement(
					'a',
					null,
					React.createElement(
						'span',
						{ id: 'piso-selected', className: 'piso-select' },
						'Piso ',
						item
					)
				)
			) : React.createElement(
				'div',
				{ className: 'col-2 piso-col', 'data-piso': item, key: item,
					onClick: function onClick() {
						return selectorF(item);
					} },
				React.createElement(
					'a',
					null,
					React.createElement(
						'span',
						{ className: 'piso-select' },
						'Piso ',
						item
					)
				)
			);
		})
	);
};

var AsesorCont = function AsesorCont() {
	var asr = localStorage.getItem("data-asesor-sel");
	var asesor = asr ? asr : '1';
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
		asesor === '1' ? React.createElement(
			'div',
			null,
			React.createElement(Pisos, null),
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
			selector === '1' || selector === '2' || selector === '3' || selector === '4' ? React.createElement(
				'div',
				null,
				React.createElement(
					'div',
					{ className: 'src-grid' },
					data[group][selector].ova[0] ? React.createElement(
						'div',
						{ className: 'src-element' },
						React.createElement(
							'span',
							null,
							'_OVAS'
						),
						data[group][selector] ? data[group][selector].ova.map(function (item) {
							return React.createElement('div', { key: item[0], className: 'ova-item', 'data-source-type': 'ova', 'data-text': item[0], 'data-link': item[1] });
						}) : null
					) : null,
					data[group][selector].pdf[0] ? React.createElement(
						'div',
						{ className: 'src-element' },
						React.createElement(
							'span',
							null,
							'_PDFs'
						),
						data[group][selector] ? data[group][selector].pdf.map(function (item) {
							return React.createElement('div', { key: item[0], className: 'ova-item', 'data-source-type': 'pdf', 'data-text': item[0], 'data-link': item[1] });
						}) : null
					) : null,
					data[group][selector].video[0] ? React.createElement(
						'div',
						{ className: 'src-element' },
						React.createElement(
							'span',
							null,
							'_VIDEOS'
						),
						data[group][selector] ? data[group][selector].video.map(function (item) {
							return React.createElement('div', { key: item[0], className: 'ova-item', 'data-source-type': 'video', 'data-text': item[0], 'data-link': item[1] });
						}) : null
					) : null,
					data[group][selector].tool[0] ? React.createElement(
						'div',
						{ className: 'src-element' },
						React.createElement(
							'span',
							null,
							'_ENCUESTAS'
						),
						data[group][selector] ? data[group][selector].tool.map(function (item) {
							return React.createElement('div', { key: item[0], className: 'ova-item', 'data-source-type': 'form', 'data-text': item[0], 'data-link': item[1] });
						}) : null
					) : null
				)
			) : React.createElement(
				'h3',
				null,
				'El piso seleccionado estara disponible una vez se complete la fase del piso anterior'
			)
		) : null
	);
};

ReactDOM.render(React.createElement(AsesorCont, null), container);