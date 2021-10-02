var container = document.querySelector('.faqs');

var styles = {
	yeLine: {
		textDecoration: 'underline #FFC024',
		fontSize: '22px'
	},
	titleQ: {
		textShadow: '2px 2px 6px #FFC024',
		fontSize: '22px',
		margin: 0
	},
	response: {
		fontSize: '18px',
		paddingLeft: 40,
		margin: 0
	}
};

var preguntas = [['Cual es el Proposito de esta pagina?', 'Respuesta']];

var Faqs = function Faqs() {
	return React.createElement(
		'div',
		null,
		React.createElement(
			'h2',
			{ style: styles.yeLine },
			'COMO USAR ESTA PAGINA ?'
		),
		React.createElement(
			'a',
			{ href: '', target: '_blank' },
			React.createElement(
				'div',
				{ className: 'div-src' },
				React.createElement('img', { src: './imgs/sources/ova.png' }),
				React.createElement(
					'span',
					{ className: 'etesc-subtitle' },
					'Guia Interactiva'
				)
			)
		),
		React.createElement('br', null),
		React.createElement(
			'h2',
			{ style: styles.yeLine },
			'PREGUNTAS FRECUENTES'
		),
		React.createElement(
			'ul',
			null,
			preguntas.map(function (item) {
				return React.createElement(
					'li',
					null,
					React.createElement(
						'p',
						{ style: styles.titleQ },
						item[0]
					),
					React.createElement(
						'p',
						{ style: styles.response },
						item[1]
					)
				);
			})
		)
	);
};

ReactDOM.render(React.createElement(Faqs, null), container);