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
			'a',
			{ type: 'button', className: 'pointer', 'data-toggle': 'modal', 'data-target': '#myModalNews' },
			React.createElement(
				'div',
				{ className: 'right-jumbo-news' },
				React.createElement('iframe', { className: 'noti-video', src: 'https://www.youtube.com/embed/HnVqU8tOAGg', title: 'Noticias', frameBorder: '0', allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: true })
			)
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
		),
		React.createElement(
			'div',
			{ className: 'modal fade', id: 'myModalNews', tabIndex: '-1', role: 'dialog', 'aria-labelledby': 'myModalLabel' },
			React.createElement(
				'div',
				{ className: 'modal-dialog', role: 'document' },
				React.createElement(
					'div',
					{ className: 'modal-content' },
					React.createElement(
						'div',
						{ className: 'modal-header' },
						React.createElement(
							'a',
							{ type: 'button', 'class': 'close pointer', 'data-dismiss': 'modal', 'aria-label': 'Close' },
							React.createElement('img', { src: './imgs/exit.png' })
						),
						React.createElement(
							'h4',
							{ className: 'modal-title', id: 'myModalLabel' },
							'Noticias'
						)
					),
					React.createElement(
						'div',
						{ className: 'modal-body' },
						'En el transcurso del curso aqui podran ver los noticieros lanzados cada semana',
						React.createElement(
							'div',
							{ className: 'video-wrapper' },
							React.createElement('iframe', { src: 'https://www.youtube.com/embed/HnVqU8tOAGg', title: 'Noticias', frameBorder: '0', allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: true })
						)
					),
					React.createElement('div', { className: 'modal-footer' })
				)
			)
		)
	);
};

ReactDOM.render(React.createElement(RightBar, null), container);