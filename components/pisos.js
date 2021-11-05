var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var container = document.querySelector('#pisos_selector');

var Pisos = function Pisos() {
	var piso = localStorage.getItem("data-piso-sel");

	var _React$useState = React.useState(0),
	    _React$useState2 = _slicedToArray(_React$useState, 2),
	    el = _React$useState2[0],
	    setPiso = _React$useState2[1];

	var selectorF = function selectorF(num) {
		setPiso(num);
		container.setAttribute("data-piso-sel", num);
		localStorage.setItem("data-piso-sel", num);
		location.reload();
	};
	return React.createElement(
		"div",
		{ id: "piso-selector" },
		['1', '2', '3', '4', '5', '6'].map(function (item) {
			return piso == item ? React.createElement(
				"div",
				{ className: "col-2 piso-col", "data-piso": item, key: item },
				React.createElement(
					"a",
					null,
					React.createElement(
						"span",
						{ id: "piso-selected", className: "piso-select" },
						"Piso ",
						item
					)
				)
			) : React.createElement(
				"div",
				{ className: "col-2 piso-col", "data-piso": item, key: item,
					onClick: function onClick() {
						return selectorF(item);
					} },
				React.createElement(
					"a",
					null,
					React.createElement(
						"span",
						{ className: "piso-select" },
						"Piso ",
						item
					)
				)
			);
		})
	);
};

ReactDOM.render(React.createElement(Pisos, null), container);