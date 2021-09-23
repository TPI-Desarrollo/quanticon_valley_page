var containers = document.querySelectorAll('.ova-item');

// ovas, pdf, videos, herramientas, entregables
var styles = {
	text: {
		marginLeft: 20
	},
	icon: {
		fontSize: 60,
		color: '#ffc024'
	},
	div: {
		display: 'flex',
		color: '#303CFE',
		alignItems: 'center',
		padding: 20,
		paddingBottom: 5,
		paddingTop: 5,
		marginBottom: 10,
		marginTop: 10,
		width: '75%',
		borderRadius: 20,
		boxShadow: "rgba(0, 0, 0, 0.2) 0px 2px 4px, rgba(0, 0, 0, 0.1) 0px 5px 8px"
	}
};
var types = [{
	type: "ova",
	name: 'layers',
	color: '#ffc024'
}, {
	type: "pdf",
	name: 'picture_as_pdf',
	color: '#ffc024'
}, {
	type: "video",
	name: 'smart_display',
	color: '#ffc024'
}, {
	type: "tools",
	name: 'plumbing',
	color: '#ffc024'
}, {
	type: "entrega",
	name: 'text_snippet',
	color: '#ffc024'
}];

var OvaItem = function OvaItem(_ref) {
	var dataset = _ref.dataset;

	console.log(dataset);
	var sourceType = dataset.sourceType,
	    text = dataset.text,
	    link = dataset.link;

	return React.createElement(
		'li',
		null,
		React.createElement(
			'a',
			{ href: link, target: '_blank' },
			React.createElement(
				'div',
				{ style: styles.div },
				types.map(function (item) {
					return item.type === sourceType ? React.createElement(
						'span',
						{
							key: item.name,
							style: Object.assign({}, styles.icon, { color: item.color }),
							'class': 'material-icons' },
						item.name
					) : null;
				}),
				React.createElement(
					'span',
					{ style: styles.text },
					text
				)
			)
		)
	);
};

containers.forEach(function (c) {
	var dataset = c.dataset;
	ReactDOM.render(React.createElement(OvaItem, { dataset: dataset }), c);
});