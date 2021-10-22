var container = document.querySelector('.info-content');

var infoA = ["./imgs/info/1.png", "./imgs/info/2.png", "./imgs/info/3.png", "./imgs/info/4.png"];
var infoB = ["./imgs/info/5.png", "./imgs/info/6.png", "./imgs/info/7.png", "./imgs/info/8.png", "./imgs/info/9.png", "./imgs/info/10.png"];
var Acerca = function Acerca() {
	return React.createElement(
		"div",
		null,
		React.createElement(
			"h3",
			{ className: "info-title" },
			"_Acerca de"
		),
		React.createElement(
			"div",
			{ className: "grid-info-a" },
			React.createElement(
				"div",
				null,
				React.createElement(
					"p",
					null,
					"El juego Quanticon Valley es una apuesta de gamificacion desarrollada y propuesta por la Facultad de ingenieria. Participaron el programa innovaTE, grupo LIATER, el programa de innovacion y el Taller de Proyectos Interdisciplinarios (TPI)."
				),
				React.createElement(
					"p",
					null,
					"Se basa en la experiencia de TPI, busca promover la motivacion y el desarrolla de habilidades blandas de sus participantes con el desarrollo de un proyecto. Damos una calurosa bienvenida y esperamos contar con cualquier aporte para la mejora continua."
				)
			),
			React.createElement("img", { src: "./imgs/info/QV.png" })
		),
		React.createElement(
			"h4",
			{ className: "info-subtitle" },
			"Organiza"
		),
		React.createElement(
			"div",
			{ className: "grid-info-b" },
			infoA.map(function (i) {
				return React.createElement("img", { key: i, src: i });
			})
		),
		React.createElement(
			"h4",
			{ className: "info-subtitle" },
			"Apoya"
		),
		React.createElement(
			"div",
			{ className: "grid-info-b" },
			infoB.map(function (i) {
				return React.createElement("img", { key: i, src: i });
			})
		)
	);
};
var equipo = [{ ph: './imgs/team/1.png', name: 'Luis Carlos Forero', rol: 'Lider de estrategia', depend: 'Programa de innovacion Tecnologica II-2021' }, { ph: './imgs/team/1.png', name: 'Camilo Cortes', rol: 'Vicedecano de Investigacion', depend: 'Facultad de Ingenieria Sede Bogota' }, { ph: './imgs/team/1.png', name: 'Fernando Herrera', rol: 'Lider LIAT-ER', depend: 'Programa de innovacion Tecnologica II-2021' }, { ph: './imgs/team/1.png', name: 'Alfonso Herrera', rol: 'Profesor Taller de Proyectos Interdisciplinarios', depend: 'InnovaTE' }, { ph: './imgs/team/1.png', name: 'Lina Maria Chacon', rol: 'Profesora', depend: '' }, { ph: './imgs/team/1.png', name: 'Luis Alejandro Cardenas', rol: 'Inginiero Apoyo', depend: 'Coordinacion LIAT-ER' }];
var Equipo = function Equipo() {
	return React.createElement(
		"div",
		{ className: "team-grid" },
		equipo.map(function (i) {
			return React.createElement(
				"div",
				{ key: i.name, className: "team-ele" },
				React.createElement("img", { className: "photo", src: i.ph }),
				React.createElement(
					"span",
					{ className: "mit-name" },
					i.name
				),
				React.createElement(
					"span",
					null,
					i.rol
				),
				React.createElement(
					"span",
					null,
					i.depend
				)
			);
		})
	);
};

var Info = function Info() {
	var pg = localStorage.getItem("data-informacion-sel");
	var page = pg ? pg : '1';
	var selectorPage = function selectorPage(num) {
		localStorage.setItem("data-informacion-sel", num);
		location.reload();
	};
	console.log(page);
	return React.createElement(
		"div",
		null,
		React.createElement(
			"div",
			{ className: "page-selector" },
			page === '1' ? React.createElement(
				"div",
				{ className: "pg-item-sel" },
				"Acerca de"
			) : React.createElement(
				"div",
				{ className: "pg-item", onClick: function onClick() {
						return selectorPage('1');
					} },
				"Acerca de"
			)
		),
		page === '1' ? React.createElement(Acerca, null) : null
	);
};

ReactDOM.render(React.createElement(Info, null), container);