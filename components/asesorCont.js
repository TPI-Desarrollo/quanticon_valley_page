var container = document.querySelector('.asesor-content');

var data = {
	dos: {
		1: {
			ova: [],
			pdf: [],
			video: [['Como Hacer un Pitch', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700302'], ['Pregunta Escencial', 'https://campus.virtual.unal.edu.co/mod/page/view.php?id=701245']],
			tool: []
		},
		2: {
			ova: [['Video Conservatorios 20 de Octubre', ''], ['Metodologia Vester', ''], ['Como hacer un Pestal', ''], ['Arbol de Problemas', ''], ['Mapa de Empatia', ''], ['Actores', '']],
			pdf: [],
			video: [],
			tool: []
		},
		3: {
			ova: [['Infografia Interactiva de Ejemplo', ''], ['Videos Conversatorios 17 de Noviembre', '']],
			pdf: [],
			video: [],
			tool: []
		},
		4: {
			ova: [['Videos Conversatorios 6 de Diciembre', ''], ['"METODOLOGIA GENERAL PARA EL DESARROLLO DE UN PROYECTO"', ''], ['DISEÑO DE EXPERIMENTOS', ''], ['VARIABLES CRITICAS EN EL DESARROLLO DE UN PROYECTO', ''], ['MODELO DE NEGOCIO', ''], ['PROPUESTA DE VALOR', ''], ['ASPECTOS DE VIABILIDAD', ''], ['EVALUACIÓN DEL IMPACTO', '']],
			pdf: [],
			video: [],
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
			ova: [],
			pdf: [],
			video: [['Como Hacer un Pitch', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700534'], ['Pregunta Escencial', 'https://campus.virtual.unal.edu.co/mod/page/view.php?id=701209']],
			tool: []
		},
		2: {
			ova: [['Video Conservatorios 20 de Octubre', ''], ['Metodologia Vester', ''], ['Como hacer un Pestal', ''], ['Arbol de Problemas', ''], ['Mapa de Empatia', ''], ['Actores', '']],
			pdf: [],
			video: [],
			tool: []
		},
		3: {
			ova: [['Infografia Interactiva de Ejemplo', ''], ['Videos Conversatorios 17 de Noviembre', '']],
			pdf: [],
			video: [],
			tool: []
		},
		4: {
			ova: [['Videos Conversatorios 6 de Diciembre', ''], ['"METODOLOGIA GENERAL PARA EL DESARROLLO DE UN PROYECTO"', ''], ['DISEÑO DE EXPERIMENTOS', ''], ['VARIABLES CRITICAS EN EL DESARROLLO DE UN PROYECTO', ''], ['MODELO DE NEGOCIO', ''], ['PROPUESTA DE VALOR', ''], ['ASPECTOS DE VIABILIDAD', ''], ['EVALUACIÓN DEL IMPACTO', '']],
			pdf: [],
			video: [],
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

var AsesorCont = function AsesorCont() {
	var str = localStorage.getItem("data-piso-sel");
	var selector = str ? str : 1;
	var gr = localStorage.getItem("data-grupo-sel");
	var group = gr ? gr : 'dos';
	var setGroup = function setGroup(grp) {
		localStorage.setItem("data-grupo-sel", grp);
		location.reload();
	};
	return React.createElement(
		'div',
		null,
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
		React.createElement(
			'div',
			{ 'class': 'src-grid' },
			data[group][selector].ova[0] ? React.createElement(
				'div',
				{ 'class': 'src-element' },
				React.createElement(
					'span',
					null,
					'_OVAS'
				),
				data[group][selector] ? data[group][selector].ova.map(function (item) {
					return React.createElement('div', { key: item[0], 'class': 'ova-item', 'data-source-type': 'ova', 'data-text': item[0], 'data-link': item[1] });
				}) : null
			) : null,
			data[group][selector].pdf[0] ? React.createElement(
				'div',
				{ 'class': 'src-element' },
				React.createElement(
					'span',
					null,
					'_PDFs'
				),
				data[group][selector] ? data[group][selector].pdf.map(function (item) {
					return React.createElement('div', { key: item[0], 'class': 'ova-item', 'data-source-type': 'pdf', 'data-text': item[0], 'data-link': item[1] });
				}) : null
			) : null,
			data[group][selector].video[0] ? React.createElement(
				'div',
				{ 'class': 'src-element' },
				React.createElement(
					'span',
					null,
					'_VIDEOS'
				),
				data[group][selector] ? data[group][selector].video.map(function (item) {
					return React.createElement('div', { key: item[0], 'class': 'ova-item', 'data-source-type': 'video', 'data-text': item[0], 'data-link': item[1] });
				}) : null
			) : null,
			data[group][selector].tool[0] ? React.createElement(
				'div',
				{ 'class': 'src-element' },
				React.createElement(
					'span',
					null,
					'_HERRAMIENTAS'
				),
				data[group][selector] ? data[group][selector].tool.map(function (item) {
					return React.createElement('div', { key: item[0], 'class': 'ova-item', 'data-source-type': 'tools', 'data-text': item[0], 'data-link': item[1] });
				}) : null
			) : null
		)
	);
};

ReactDOM.render(React.createElement(AsesorCont, null), container);