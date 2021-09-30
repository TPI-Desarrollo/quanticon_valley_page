var container = document.querySelector('#side_bar_container');
var selected = container.getAttribute('data-selected');

var data = [{
	sel: 'principal',
	src: './imgs/Icon_principal.svg',
	title: 'Principal',
	link: './principal.html',
	icon: './imags/Icon_principal.svg'
}, {
	sel: 'etesc',
	src: './imgs/Icon_ETESC.svg',
	title: 'ETESC',
	link: './etsc.html'
}, {
	sel: 'zonas-comunes',
	src: './imgs/Icon_zonas_comunes.svg',
	title: 'Zonas Comunes',
	link: './comunes.html'
}];

var SideBar = function SideBar() {
	return React.createElement(
		'div',
		{ id: 'sidebar' },
		React.createElement(
			'a',
			{ href: 'index.html' },
			React.createElement('img', { id: 'logo', src: './imgs/QB_blanco_vertical 1.png', 'class': 'd-none d-md-block' })
		),
		data.map(function (item) {
			return item.sel === selected ? React.createElement(
				'a',
				{ href: item.link, key: item.sel },
				React.createElement(
					'div',
					{ id: 'sidebar-button-sel', 'class': 'sidebar-button' },
					React.createElement('img', { 'class': 'sidebar-button-icon', src: item.src }),
					React.createElement(
						'span',
						{ 'class': 'sidebar-button-text d-none d-md-block' },
						item.title
					)
				)
			) : React.createElement(
				'a',
				{ href: item.link, key: item.sel },
				React.createElement(
					'div',
					{ 'class': 'sidebar-button' },
					React.createElement('img', { 'class': 'sidebar-button-icon', src: item.src }),
					React.createElement(
						'span',
						{ 'class': 'sidebar-button-text d-none d-md-block' },
						item.title
					)
				)
			);
		}),
		React.createElement('img', { 'class': 'sidebar-img', src: './imgs/QV_textura 1.png' })
	);
};

ReactDOM.render(React.createElement(SideBar, null), container);