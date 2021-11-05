var container = document.querySelector('#asesor_selector');

var data = [['CONTENIDO ETESC', '1'], ['ASESORES VIRTUALES', '2'], ['PREGUNTAS FRECUENTES', '3']];
var AsesorSel = function AsesorSel() {
	var asesor = localStorage.getItem("data-asesor-sel");
	var selectorF = function selectorF(num) {
		container.setAttribute("data-asesor-sel", num);
		localStorage.setItem("data-asesor-sel", num);
		location.reload();
	};
	return React.createElement(
		'div',
		{ className: 'asesor-sel' },
		data.map(function (i) {
			return asesor === i[1] ? React.createElement(
				'div',
				{ className: 'slted' },
				i[0]
			) : React.createElement(
				'div',
				{ onClick: function onClick() {
						return selectorF(i[1]);
					} },
				i[0]
			);
		})
	);
};

ReactDOM.render(React.createElement(AsesorSel, null), container);