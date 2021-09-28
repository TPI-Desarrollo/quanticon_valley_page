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
		React.createElement('div', { id: 'calendario' }),
		React.createElement(
			'div',
			{ 'class': 'right-jumbo' },
			React.createElement(
				'p',
				{ 'class': 'subtext' },
				'Ultimas Noticias'
			),
			React.createElement('iframe', { 'class': 'noti-video', src: 'https://www.youtube.com/embed/8ZrauuMpRD8', title: 'Noticias', frameBorder: '0', allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: true })
		)
	);
};

ReactDOM.render(React.createElement(RightBar, null), container);