var container = document.querySelector('.title-subsection');
var dataset = container.dataset;

var styles = {
	back: {},
	row: {
		display: 'flex',
		flexWrap: 'wrap',
		marginBottom: 15
	},
	img: {
		height: 100,
		marginRight: 20
	}
};
var data = {
	LOBBY: ['Tus Tareas inician aqui', './imgs/subsection/lobby.png', 100],
	ASESORES: ['Aqui Resuelves todas tus dudas', './imgs/subsection/asesor.png', 55]
};

var Subsection = function Subsection(_ref) {
	var dataset = _ref.dataset;
	var title = dataset.title;

	var goBack = function goBack() {
		history.back();
	};
	return React.createElement(
		'div',
		null,
		React.createElement(
			'div',
			{ style: styles.row },
			React.createElement('img', { style: Object.assign({}, styles.img, { height: data[title][2] }), src: data[title][1] }),
			React.createElement(
				'div',
				null,
				React.createElement(
					'h2',
					{ className: 'title-content' },
					title
				),
				React.createElement(
					'p',
					{ className: 'subtext' },
					data[title][0]
				)
			)
		),
		React.createElement('img', { className: 'back-button', src: './imgs/sources/atras.png', onClick: function onClick() {
				return goBack();
			} })
	);
};

ReactDOM.render(React.createElement(Subsection, { dataset: dataset }), container);