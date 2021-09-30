var pisoCont = document.querySelector('#pisos_container');

var data = {
	dos: {
		1: {
			ova: [['ACTA DE COMPROMISO', 'https://campus.virtual.unal.edu.co/mod/assign/view.php?id=700189']],
			pdf: [],
			video: [],
			tool: []
		},
		2: {
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
			video: [],
			tool: []
		},
		2: {
			ova: [],
			pdf: [],
			video: [],
			tool: []
		}
	}
};
var pisoContentSwitch = function pisoContentSwitch(piso) {
	switch (piso) {
		case '1':
			return React.createElement(
				'div',
				null,
				React.createElement(
					'h2',
					{ 'class': 'title-content' },
					'Piso 1: Ambientaci\xF3n'
				)
			);
		case '2':
			return React.createElement(
				'div',
				null,
				React.createElement(
					'h2',
					{ 'class': 'title-content' },
					'Piso 2: Conceptualizaci\xF3n'
				)
			);
		case '3':
			return React.createElement(
				'div',
				null,
				React.createElement(
					'h2',
					{ 'class': 'title-content' },
					'Piso 3: Ideaci\xF3n'
				)
			);
		case '4':
			return React.createElement(
				'div',
				null,
				React.createElement(
					'h2',
					{ 'class': 'title-content' },
					'Piso 4: Dise\xF1o + Innovaci\xF3n'
				)
			);
		case '5':
			return React.createElement(
				'div',
				null,
				React.createElement(
					'h2',
					{ 'class': 'title-content' },
					'Piso 5: Prototipado'
				)
			);
		case '6':
			return React.createElement(
				'div',
				null,
				React.createElement(
					'h2',
					{ 'class': 'title-content' },
					'Piso 6: Sala de Juntas'
				),
				React.createElement(
					'p',
					{ 'class': 'text' },
					'Informacion sobre el entregable a realizar la entrega final del piso 6 y diferentes recursos que apoyan esta entrega.'
				),
				React.createElement(
					'ul',
					{ 'class': 'text' },
					React.createElement(
						'li',
						null,
						'Instrucciones claras sobre el entregable.'
					),
					React.createElement(
						'li',
						null,
						'Instrucciones sobre el pitch a realizar y el horario en el que se presentaria.'
					),
					React.createElement(
						'li',
						null,
						'Link a Moodle donde se realiza la entrega e instrucciones para realizarlo.'
					),
					React.createElement(
						'li',
						null,
						'Explicar como la entrega hace parte del funcionamiento del juego.'
					),
					React.createElement(
						'li',
						null,
						'En que fechas se debe realizar esta entrega.'
					)
				)
			);
		default:
			return null;
	}
};

var PisosContainer = function PisosContainer() {
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
		React.createElement('br', null),
		selector ? pisoContentSwitch(selector) : React.createElement(
			'p',
			null,
			'Seleccione un piso porfavor'
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
		React.createElement(
			'div',
			{ 'class': 'src-grid' },
			data[group][selector].ova[0] ? React.createElement(
				'div',
				{ 'class': 'src-element' },
				React.createElement(
					'span',
					null,
					'_ENTREGABLES'
				),
				data[group][selector] ? data[group][selector].ova.map(function (item) {
					return React.createElement('div', { key: item[0], 'class': 'ova-item', 'data-source-type': 'ova', 'data-text': item[0], 'data-link': item[1] });
				}) : null
			) : null,
			data[group][selector].pdf[0] ? React.createElement(
				'div',
				{ 'class': 'src-element' },
				data[group][selector] ? data[group][selector].pdf.map(function (item) {
					return React.createElement('div', { key: item[0], 'class': 'ova-item', 'data-source-type': 'pdf', 'data-text': item[0], 'data-link': item[1] });
				}) : null
			) : null,
			data[group][selector].video[0] ? React.createElement(
				'div',
				{ 'class': 'src-element' },
				data[group][selector] ? data[group][selector].video.map(function (item) {
					return React.createElement('div', { key: item[0], 'class': 'ova-item', 'data-source-type': 'video', 'data-text': item[0], 'data-link': item[1] });
				}) : null
			) : null,
			data[group][selector].tool[0] ? React.createElement(
				'div',
				{ 'class': 'src-element' },
				data[group][selector] ? data[group][selector].tool.map(function (item) {
					return React.createElement('div', { key: item[0], 'class': 'ova-item', 'data-source-type': 'tools', 'data-text': item[0], 'data-link': item[1] });
				}) : null
			) : null
		)
	);
};

ReactDOM.render(React.createElement(PisosContainer, null), pisoCont);