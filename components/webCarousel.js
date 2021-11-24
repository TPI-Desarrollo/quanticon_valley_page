var container = document.querySelector('.webinar-carousel');

var dataA = [[{
	n: 2,
	name: 'Crea una propuesta de valor desde el cliente y encuentra recursos para financiarla.',
	expo: 'Competir en el mercado requiere de múltiples aspectos fundamentales relacionados con la orientación al cliente y la planificación detallada de la idea de negocio.',
	date: '2021-1',
	link: {
		dos: 'https://campus.virtual.unal.edu.co/mod/url/view.php?id=756480',
		cuatro: 'https://campus.virtual.unal.edu.co/mod/url/view.php?id=756497'
	},
	state: 'pass'
}, {
	n: 1,
	name: 'Contexto de innovación y economía circular',
	expo: 'Conoce el la posición de Colombia en el panorama internacional de la Ciencia, Tecnología e Innovación',
	date: '2021-1',
	link: {
		dos: 'https://campus.virtual.unal.edu.co/mod/url/view.php?id=756468',
		cuatro: 'https://campus.virtual.unal.edu.co/mod/url/view.php?id=756485'
	},
	state: 'pass'
}]];
var data = [[{
	n: 2,
	name: 'Pasos clave para emprender',
	expo: 'Luis Felipe Botero',
	date: '24 Noviembre 2021',
	link: {
		dos: 'https://forms.gle/VqqMmdLCB2wJF2oLA',
		cuatro: 'https://forms.gle/VqqMmdLCB2wJF2oLA'
	},
	state: 'prox'
}, {
	n: 1,
	name: 'Innovación en iluminacion y alumbrado',
	expo: 'Mario Quiroga',
	date: '24 Noviembre 2021',
	link: {
		dos: 'https://campus.virtual.unal.edu.co/mod/url/view.php?id=700382',
		cuatro: 'https://campus.virtual.unal.edu.co/mod/url/view.php?id=700611'
	},
	state: 'pass'
}]];
var WebinarCard = function WebinarCard(_ref) {
	var item = _ref.item,
	    group = _ref.group,
	    t = _ref.t;

	return React.createElement(
		'div',
		{ className: 'webinar-cards' },
		item.map(function (i) {
			return React.createElement(
				'div',
				{ key: i.name, className: 'webinar-card-cont' },
				React.createElement(
					'a',
					{ href: i.link[group], target: '_blank', className: 'webinar-card' },
					React.createElement('img', { src: 'imgs/webinars/' + t + i.n + '.jpg', className: 'webinar-card' }),
					i.state === 'prox' ? React.createElement(
						'div',
						{ className: 'webinar-prox' },
						React.createElement(
							'h2',
							{ className: 'prox-text' },
							'PROXIMAMENTE'
						),
						React.createElement(
							'h4',
							{ className: 'prox-date' },
							i.date
						)
					) : null
				),
				React.createElement(
					'p',
					{ className: 'web-card-title' },
					i.n,
					'. ',
					i.name
				),
				React.createElement(
					'p',
					{ className: 'web-card-expo' },
					i.expo
				)
			);
		})
	);
};

var WebinarCarousel = function WebinarCarousel() {
	var sld = localStorage.getItem("webinar-slide");
	var slideNum = sld ? sld : '0';
	var setSlide = function setSlide(sldn) {
		localStorage.setItem("webinar-slide", sldn);
		location.reload();
	};
	var nextSlide = function nextSlide(n) {
		var num = parseInt(slideNum) + n;
		if (num < 0) {
			num = data.length - 1;
		}
		if (num == data.length) {
			num = 0;
		}
		localStorage.setItem("webinar-slide", num.toString());
		location.reload();
	};

	var sldA = localStorage.getItem("webinar-slide-antes");
	var slideNumA = sld ? sld : '0';
	var setSlideA = function setSlideA(sldn) {
		localStorage.setItem("webinar-slide-antes", sldn);
		location.reload();
	};
	var nextSlideA = function nextSlideA(n) {
		var num = parseInt(slideNum) + n;
		if (num < 0) {
			num = data.length - 1;
		}
		if (num == data.length) {
			num = 0;
		}
		localStorage.setItem("webinar-slide-antes", num.toString());
		location.reload();
	};

	var gr = localStorage.getItem("data-grupo-sel");
	var group = gr ? gr : 'dos';
	var setGroup = function setGroup(grp) {
		localStorage.setItem("data-grupo-sel", grp);
		location.reload();
	};

	return React.createElement(
		'div',
		{ className: 'carousel-container' },
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
		React.createElement(
			'div',
			{ 'class': 'webinar-header' },
			React.createElement(
				'div',
				{ 'class': 'webinar-text' },
				React.createElement(
					'h2',
					{ 'class': 'webinar-title' },
					'WEBINARS'
				),
				React.createElement(
					'h4',
					{ 'class': 'webinar-desc' },
					'EN INNOVACION, TECNOLOGIA Y EMPRENDIMIENTO ',
					React.createElement(
						'span',
						{ 'class': 'webinar-resalt' },
						'2021-2'
					)
				)
			),
			React.createElement(
				'a',
				{ href: 'https://docs.google.com/forms/d/e/1FAIpQLSdeFAWM1e4rokBcPQIzulx5ij-kmy7UkaqruEnNu3uE55JzCA/viewform', target: '_blank' },
				React.createElement(
					'div',
					{ 'class': 'webinar-inscr' },
					'Inscribite Aqu\xED'
				)
			)
		),
		React.createElement(
			'div',
			{ className: 'carousel-select' },
			React.createElement(
				'div',
				{ className: 'carousel-prev', onClick: function onClick() {
						return nextSlide(-1);
					} },
				'\u276E'
			),
			data.map(function (slide, index) {
				return slideNum === index.toString() ? React.createElement('span', { key: 'dot' + index, className: 'dot dotactive', onClick: function onClick() {
						return setSlide(index.toString());
					} }) : React.createElement('span', { key: 'dot' + index, className: 'dot', onClick: function onClick() {
						return setSlide(index.toString());
					} });
			}),
			React.createElement(
				'div',
				{ className: 'carousel-prev', onClick: function onClick() {
						return nextSlide(1);
					} },
				'\u276F'
			)
		),
		data.map(function (slide, index) {
			return slideNum === index.toString() ? React.createElement(WebinarCard, {
				key: 'sld' + index,
				item: slide,
				group: group,
				t: 'n'
			}) : null;
		}),
		React.createElement(
			'div',
			{ 'class': 'webinar-header' },
			React.createElement(
				'div',
				{ 'class': 'webinar-text' },
				React.createElement(
					'h2',
					{ 'class': 'webinar-title' },
					'WEBINARS 2021-1'
				),
				React.createElement(
					'h4',
					{ 'class': 'webinar-desc' },
					'DE INTERES PARA EL ',
					React.createElement(
						'span',
						{ 'class': 'webinar-resalt' },
						'PISO 3: IDEACION'
					)
				)
			)
		),
		React.createElement(
			'div',
			{ className: 'carousel-select' },
			React.createElement(
				'div',
				{ className: 'carousel-prev', onClick: function onClick() {
						return nextSlideA(-1);
					} },
				'\u276E'
			),
			dataA.map(function (slide, index) {
				return slideNum === index.toString() ? React.createElement('span', { key: 'dot' + index, className: 'dot dotactive', onClick: function onClick() {
						return setSlideA(index.toString());
					} }) : React.createElement('span', { key: 'dot' + index, className: 'dot', onClick: function onClick() {
						return setSlideA(index.toString());
					} });
			}),
			React.createElement(
				'div',
				{ className: 'carousel-prev', onClick: function onClick() {
						return nextSlideA(1);
					} },
				'\u276F'
			)
		),
		dataA.map(function (slide, index) {
			return slideNum === index.toString() ? React.createElement(WebinarCard, {
				key: 'sld' + index,
				item: slide,
				group: group,
				t: 'a'
			}) : null;
		})
	);
};

ReactDOM.render(React.createElement(WebinarCarousel, null), container);