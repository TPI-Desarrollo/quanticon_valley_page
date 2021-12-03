var container = document.querySelector('.right_bar_container');

var selected = 0;
function changeNoti(e, num) {
	e.preventDefault();
	var vid = document.querySelector('#vid');
	var vid_title = document.querySelector('#vid-title');
	var vids = document.querySelectorAll(".video-button");

	vid.src = videos[num].video;
	vid_title.innerHTML = videos[num].fecha;
	vids.forEach(function (vid, i) {
		if (num == i) {
			vid.className = "video-button video-button-sel";
		} else {
			vid.className = "video-button";
		}
	});
}
var data = [{
	name: 'Calendario'
}, {
	name: 'Tareas y Fechas Importantes'
}, {
	name: 'Noticias'
}];

var videos = [{
	no: 0,
	nombre: "La Pasion: el mapa de los innovadores",
	fecha: "03-Diciembre 2021",
	img: "./imgs/noti/9.jpg",
	video: "https://www.youtube.com/embed/xjHP8tPvBsY"
}, {
	no: 1,
	fecha: "26-Noviembre 2021",
	img: "./imgs/news_logo.png",
	video: "https://www.youtube.com/embed/tl6AaqqyrSQ"
}, {
	no: 2,
	fecha: "19-Noviembre 2021",
	img: "./imgs/news_logo.png",
	video: "https://www.youtube.com/embed/Mtz92lwd9Gs"
}, {
	no: 3,
	fecha: "12-Noviembre 2021",
	img: "./imgs/news_logo.png",
	video: "https://www.youtube.com/embed/cgKLuTxNsVE"
}, {
	no: 4,
	fecha: "05-Noviembre 2021",
	img: "./imgs/news_logo.png",
	video: "https://www.youtube.com/embed/s1dIgi50Wic"
}, {
	no: 5,
	fecha: "29-Octubre 2021",
	img: "./imgs/news_logo.png",
	video: "https://www.youtube.com/embed/TUDKij3AXuc"
}, {
	no: 6,
	fecha: "20-Octubre 2021",
	img: "./imgs/news_logo.png",
	video: "https://www.youtube.com/embed/toumedldx-c"
}, {
	no: 7,
	fecha: "11-Octubre 2021",
	img: "./imgs/news_logo.png",
	video: "https://www.youtube.com/embed/KpILuChm-ko"
}, {
	no: 8,
	fecha: "4-Octubre 2021",
	img: "./imgs/news_logo.png",
	video: "https://www.youtube.com/embed/HnVqU8tOAGg"
}];

var Modal = function Modal() {
	return React.createElement(
		'div',
		{ className: 'modal fade', id: 'myModalNews', tabIndex: '-1', role: 'dialog', 'aria-labelledby': 'myModalLabel' },
		React.createElement(
			'div',
			{ className: 'modal-dialog modal-lg', role: 'document' },
			React.createElement(
				'div',
				{ className: 'modal-content' },
				React.createElement(
					'div',
					{ className: 'modal-header' },
					React.createElement(
						'a',
						{ type: 'button', className: 'close pointer', 'data-dismiss': 'modal', 'aria-label': 'Close' },
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
					React.createElement(
						'div',
						{ className: 'grid-noti' },
						React.createElement(
							'div',
							null,
							React.createElement(
								'p',
								{ id: 'vid-title', className: 'video-title' },
								' ',
								videos[selected].fecha,
								' '
							)
						),
						React.createElement('div', null),
						React.createElement(
							'div',
							null,
							React.createElement(
								'div',
								{ className: 'video-wrapper' },
								React.createElement('iframe', { id: 'vid', src: videos[selected].video, className: 'noti-video', title: 'Noticias', frameBorder: '0', allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: true })
							)
						),
						React.createElement(
							'div',
							null,
							React.createElement(
								'div',
								null,
								React.createElement('img', { className: 'video-banner', src: './imgs/vid_banner.png' })
							),
							videos.map(function (vid) {
								var style = "video-button";
								if (vid.no == selected) {
									style = "video-button video-button-sel";
								}

								return React.createElement(
									'div',
									{ key: vid.no, className: 'video-banner' },
									React.createElement(
										'button',
										{ className: style, key: vid.no, onClick: function onClick(e) {
												changeNoti(e, vid.no);
											} },
										React.createElement(
											'p',
											{ className: 'noti-img' },
											React.createElement('img', {
												src: vid.img,
												width: '100px'
											})
										),
										React.createElement(
											'p',
											{ className: 'noti-name' },
											React.createElement(
												'strong',
												null,
												vid.nombre
											),
											React.createElement('br', null),
											vid.fecha
										)
									)
								);
							})
						)
					)
				),
				React.createElement('div', { className: 'modal-footer' })
			)
		)
	);
};

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
				React.createElement('iframe', { className: 'noti-video', src: videos[selected].video, title: 'Noticias', frameBorder: '0', allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture', allowFullScreen: true })
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
		React.createElement(Modal, null)
	);
};

ReactDOM.render(React.createElement(RightBar, null), container);