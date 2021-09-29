var container = document.querySelector('.lobby-content');

var data = {
	dos: {
		1: {
			ova: [['Juego SALA DE ESCAPE', 'https://campus.virtual.unal.edu.co/mod/lesson/view.php?id=700603'], ['Cronograma Interactivo', 'https://campus.virtual.unal.edu.co/mod/page/view.php?id=701298'], ['SYLLABUS - Libro Interactivo', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700372'], ['Decalogo Del Mentor', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700168'], ['Comunicacion Eficaz', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700320']],
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
			ova: [['Juego SALA DE ESCAPE', 'https://campus.virtual.unal.edu.co/mod/lesson/view.php?id=700603'], ['Cronograma Interactivo', 'https://campus.virtual.unal.edu.co/mod/page/view.php?id=701299'], ['SYLLABUS - Libro Interactivo', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700601'], ['Decalogo Del Mentor', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700405'], ['Comunicacion Eficaz', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700552']],
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

ReactDOM.render(React.createElement(LobbyCont, null), container);