var containers = document.querySelectorAll('.ova-item');

// ovas, pdf, videos, herramientas, entregables
var styles = {
	text: {
		marginLeft: 10,
		fontSize: 12
	},
	icon: {
		fontSize: 20
	}
};
var types = [{
	type: "ova",
	src: './imgs/sources/ova.png'
}, {
	type: "pdf",
	src: './imgs/sources/pdf.png'
}, {
	type: "video",
	src: './imgs/sources/video.png'
}, {
	type: "tools",
	src: './imgs/sources/tool.png'
}, {
	type: "form",
	src: './imgs/sources/form.png'
}];

var OvaItem = function OvaItem(_ref) {
	var dataset = _ref.dataset;
	var sourceType = dataset.sourceType,
	    text = dataset.text,
	    link = dataset.link;

	return React.createElement(
		'div',
		{ style: { paddingLeft: 20 } },
		React.createElement(
			'a',
			{ href: link, target: '_blank', className: 'div-src' },
			types.map(function (item) {
				return item.type === sourceType ? React.createElement('img', { key: item.type, style: styles.icon, src: item.src }) : null;
			}),
			React.createElement(
				'span',
				{ style: styles.text },
				text
			)
		)
	);
};

containers.forEach(function (c) {
	var dataset = c.dataset;
	ReactDOM.render(React.createElement(OvaItem, { dataset: dataset }), c);
});