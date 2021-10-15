var _this = this;

var container = document.querySelector('#pisos_container');

var select = 3;

function pisoSwitch(e, piso) {
	e.preventDefault();
	select = piso;
	console.log(piso);
	window.location.reload(false);
}

function pisoContentSwitch(piso) {
	switch (piso) {
		case 1:
			return React.createElement(
				"div",
				null,
				React.createElement(
					"h2",
					{ "class": "title-content" },
					"Piso 1"
				),
				React.createElement(
					"p",
					{ "class": "text" },
					"Informacion sobre el entregable a realizar para subir del Piso 1 al Piso 2 y diferentes recursos que apoyan esta entrega."
				),
				React.createElement(
					"ul",
					{ "class": "text" },
					React.createElement(
						"li",
						null,
						"Instrucciones claras sobre el entregable."
					),
					React.createElement(
						"li",
						null,
						"Instrucciones sobre el pitch a realizar y el horario en el que se presentaria."
					),
					React.createElement(
						"li",
						null,
						"Link a Moodle donde se realiza la entrega e instrucciones para realizarlo."
					),
					React.createElement(
						"li",
						null,
						"Explicar como la entrega hace parte del funcionamiento del juego."
					),
					React.createElement(
						"li",
						null,
						"En que fechas se debe realizar esta entrega."
					)
				)
			);
		case 2:
			return React.createElement(
				"div",
				null,
				React.createElement(
					"h2",
					{ "class": "title-content" },
					"Piso 2"
				),
				React.createElement(
					"p",
					{ "class": "text" },
					"Informacion sobre el entregable a realizar para subir del Piso 2 al Piso 3 y diferentes recursos que apoyan esta entrega."
				),
				React.createElement(
					"ul",
					{ "class": "text" },
					React.createElement(
						"li",
						null,
						"Instrucciones claras sobre el entregable."
					),
					React.createElement(
						"li",
						null,
						"Instrucciones sobre el pitch a realizar y el horario en el que se presentaria."
					),
					React.createElement(
						"li",
						null,
						"Link a Moodle donde se realiza la entrega e instrucciones para realizarlo."
					),
					React.createElement(
						"li",
						null,
						"Explicar como la entrega hace parte del funcionamiento del juego."
					),
					React.createElement(
						"li",
						null,
						"En que fechas se debe realizar esta entrega."
					)
				)
			);
		case 3:
			return React.createElement(
				"div",
				null,
				React.createElement(
					"h2",
					{ "class": "title-content" },
					"Piso 3"
				),
				React.createElement(
					"p",
					{ "class": "text" },
					"Informacion sobre el entregable a realizar para subir del Piso 3 al Piso 4 y diferentes recursos que apoyan esta entrega."
				),
				React.createElement(
					"ul",
					{ "class": "text" },
					React.createElement(
						"li",
						null,
						"Instrucciones claras sobre el entregable."
					),
					React.createElement(
						"li",
						null,
						"Instrucciones sobre el pitch a realizar y el horario en el que se presentaria."
					),
					React.createElement(
						"li",
						null,
						"Link a Moodle donde se realiza la entrega e instrucciones para realizarlo."
					),
					React.createElement(
						"li",
						null,
						"Explicar como la entrega hace parte del funcionamiento del juego."
					),
					React.createElement(
						"li",
						null,
						"En que fechas se debe realizar esta entrega."
					)
				)
			);
		case 4:
			return React.createElement(
				"div",
				null,
				React.createElement(
					"h2",
					{ "class": "title-content" },
					"Piso 4"
				),
				React.createElement(
					"p",
					{ "class": "text" },
					"Informacion sobre el entregable a realizar para subir del Piso 4 al Piso 5 y diferentes recursos que apoyan esta entrega."
				),
				React.createElement(
					"p",
					{ "class": "text" },
					React.createElement(
						"ul",
						null,
						React.createElement(
							"li",
							null,
							"Instrucciones claras sobre el entregable."
						),
						React.createElement(
							"li",
							null,
							"Instrucciones sobre el pitch a realizar y el horario en el que se presentaria."
						),
						React.createElement(
							"li",
							null,
							"Link a Moodle donde se realiza la entrega e instrucciones para realizarlo."
						),
						React.createElement(
							"li",
							null,
							"Explicar como la entrega hace parte del funcionamiento del juego."
						),
						React.createElement(
							"li",
							null,
							"En que fechas se debe realizar esta entrega."
						)
					)
				)
			);
		case 5:
			return React.createElement(
				"div",
				null,
				React.createElement(
					"h2",
					{ "class": "title-content" },
					"Piso 5"
				),
				React.createElement(
					"p",
					{ "class": "text" },
					"Informacion sobre el entregable a realizar para subir del Piso 5 al Piso 6 y diferentes recursos que apoyan esta entrega."
				),
				React.createElement(
					"ul",
					{ "class": "text" },
					React.createElement(
						"li",
						null,
						"Instrucciones claras sobre el entregable."
					),
					React.createElement(
						"li",
						null,
						"Instrucciones sobre el pitch a realizar y el horario en el que se presentaria."
					),
					React.createElement(
						"li",
						null,
						"Link a Moodle donde se realiza la entrega e instrucciones para realizarlo."
					),
					React.createElement(
						"li",
						null,
						"Explicar como la entrega hace parte del funcionamiento del juego."
					),
					React.createElement(
						"li",
						null,
						"En que fechas se debe realizar esta entrega."
					)
				)
			);
		case 6:
			return React.createElement(
				"div",
				null,
				React.createElement(
					"h2",
					{ "class": "title-content" },
					"Piso 6"
				),
				React.createElement(
					"p",
					{ "class": "text" },
					"Informacion sobre el entregable a realizar la entrega final del piso 6 y diferentes recursos que apoyan esta entrega."
				),
				React.createElement(
					"ul",
					{ "class": "text" },
					React.createElement(
						"li",
						null,
						"Instrucciones claras sobre el entregable."
					),
					React.createElement(
						"li",
						null,
						"Instrucciones sobre el pitch a realizar y el horario en el que se presentaria."
					),
					React.createElement(
						"li",
						null,
						"Link a Moodle donde se realiza la entrega e instrucciones para realizarlo."
					),
					React.createElement(
						"li",
						null,
						"Explicar como la entrega hace parte del funcionamiento del juego."
					),
					React.createElement(
						"li",
						null,
						"En que fechas se debe realizar esta entrega."
					)
				)
			);
		default:
			return null;
	}
}

var data = [{
	piso: 1
}, {
	piso: 2
}, {
	piso: 3
}, {
	piso: 4
}, {
	piso: 5
}, {
	piso: 6
}];

var Pisos = function Pisos() {
	return React.createElement(
		"div",
		null,
		React.createElement(
			"div",
			{ id: "piso-selector", "class": "row" },
			data.map(function (item) {
				if (select == item.piso) {
					return React.createElement(
						"div",
						{ "class": "col-2 piso-col", "data-piso": item.piso },
						React.createElement(
							"a",
							null,
							" ",
							React.createElement(
								"span",
								{ id: "piso-selected", "class": "piso-select" },
								"Piso ",
								item.piso
							),
							" "
						)
					);
				} else {
					return React.createElement(
						"div",
						{ "class": "col-2 piso-col", "data-piso": item.piso, onClick: function onClick(e) {
								return _this.pisoSwitch(e, item.piso);
							} },
						React.createElement(
							"a",
							null,
							" ",
							React.createElement(
								"span",
								{ "class": "piso-select" },
								"Piso ",
								item.piso
							),
							" "
						)
					);
				}
			})
		),
		React.createElement("br", null),
		_this.pisoContentSwitch(select)
	);
};

ReactDOM.render(React.createElement(Pisos, null), container);