var container = document.querySelector('.lobby-content');

var extra = [['Conoce a los Mentores, Expertos y Guias en esta Aventura', 'https://ingenieria.unal.edu.co/tpi/index.php/equipotpi/profesores', './imgs/Icon_actores.svg']];
var data = {
	dos: {
		1: {
			ova: [['Juego SALA DE ESCAPE', 'https://campus.virtual.unal.edu.co/mod/lesson/view.php?id=700374'], ['Cronograma Interactivo', 'https://campus.virtual.unal.edu.co/mod/page/view.php?id=701298'], ['Decalogo Del Mentor', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700168'], ['Comunicacion Eficaz', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700320']],
			pdf: [['SYLLABUS - Libro Interactivo', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700372']],
			video: [],
			tool: []
		},
		2: {
			ova: [],
			pdf: [['PROTOCOLO PITCH PISO 2', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=749093'], ['RUBRICA PITCH PISO 2', 'https://campus.virtual.unal.edu.co/mod/resource/view.php?id=749453&forceview=1']],
			video: [],
			tool: []
		},
		3: {
			ova: [],
			pdf: [['GUIA METODOLOGICA INFOGRAFIA', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700225'], ['GUIA DE TRABAJO ESCRITO', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700249']],
			video: [],
			tool: []
		},
		6: {
			ova: [],
			pdf: [['GUIA PRE SELECCION DE MEJORES', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700321'], ['GUIA PARTICIPACION DE PROFESORES', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700317'], ['GUIA PARTICIPACION DE ESTUDIANTE', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700318'], ['GUIA DE PRESENTACION FINAL PITCH Y PROTOTIPO', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700319']],
			video: [['CREACIÓN PAGINAS WIX', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700315']],
			tool: []
		}
	},
	cuatro: {
		1: {
			ova: [['Juego SALA DE ESCAPE', 'https://campus.virtual.unal.edu.co/mod/lesson/view.php?id=700603'], ['Cronograma Interactivo', 'https://campus.virtual.unal.edu.co/mod/page/view.php?id=701299'], ['Decalogo Del Mentor', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700405'], ['Comunicacion Eficaz', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700552']],
			pdf: [['SYLLABUS - Libro Interactivo', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700601']],
			video: [],
			tool: []
		},
		2: {
			ova: [],
			pdf: [['PROTOCOLO PITCH PISO 2', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=749094'], ['RUBRICA PITCH PISO 2', 'https://campus.virtual.unal.edu.co/mod/resource/view.php?id=749452&forceview=1']],
			video: [],
			tool: []
		},
		3: {
			ova: [],
			pdf: [['GUIA METODOLOGICA INFOGRAFIA', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700459'], ['GUIA DE TRABAJO ESCRITO', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700483']],
			video: [],
			tool: []
		},
		6: {
			ova: [],
			pdf: [['GUIA PRE SELECCION DE MEJORES', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700553'], ['GUIA PARTICIPACION DE PROFESORES', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700549'], ['GUIA PARTICIPACION DE ESTUDIANTE', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700550'], ['GUIA DE PRESENTACION FINAL PITCH Y PROTOTIPO', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700551']],
			video: [['CREACIÓN PAGINAS WIX', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700547']],
			tool: []
		}
	}
};

var LobbyCont = function LobbyCont() {
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
		selector === '1' || selector === '2' ? React.createElement(
			'div',
			null,
			React.createElement(
				'h3',
				{ className: 'title-content', style: { fontSize: '22px' } },
				'Recursos del Piso'
			),
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
						'_HERRAMIENTAS'
					),
					data[group][selector] ? data[group][selector].tool.map(function (item) {
						return React.createElement('div', { key: item[0], className: 'ova-item', 'data-source-type': 'tools', 'data-text': item[0], 'data-link': item[1] });
					}) : null
				) : null
			),
			React.createElement('br', null)
		) : React.createElement(
			'h3',
			null,
			'El piso seleccionado estara disponible una vez se complete la fase del piso anterior'
		)
	);
};

ReactDOM.render(React.createElement(LobbyCont, null), container);