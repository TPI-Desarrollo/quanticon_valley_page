var container = document.querySelector('.right_bar_container');

var data = [{
	name: 'Calendario'
}, {
	name: 'Tareas y Fechas Importantes'
}, {
	name: 'Noticias'
}];

var RightBar = function RightBar() {
	return React.createElement(
		'div',
		{ id: 'rightbar' },
		React.createElement(
			'div',
			null,
			React.createElement('div', { id: 'calendario' })
		),
		React.createElement(
			'div',
			{ className: 'right-jumbo' },
			React.createElement(
				'p',
				{ className: 'subtext-rb' },
				'Ultimas Noticias'
			),
			React.createElement('iframe', { className: 'noti-video', src: 'https://www.youtube.com/embed/TOUmEDldx-c', title: 'Noticias', frameBorder: '0', allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: true })
		),
		React.createElement(
			'a',
			{ href: 'https://drive.google.com/file/d/1DsxZt4232mjOLK8-4hVIm0QOPxQJ9JrX/view?usp=sharing', target: '_blank' },
			React.createElement(
				'div',
				{ className: 'right-jumbo pildoras' },
				React.createElement(
					'div',
					null,
					React.createElement('img', { style: { marginRight: 10 }, src: './imgs/pil.png' })
				),
				React.createElement(
					'div',
					null,
					'Conoce las pildoras de esta Semana'
				)
			)
		)
	);
};

ReactDOM.render(React.createElement(RightBar, null), container);
