const container = document.querySelector('#asesor_selector')

const data = [
    ['CONTENIDO ETESC','1'],
    ['ASESORES VIRTUALES','2'],
    ['PREGUNTAS FRECUENTES','3']
]
const AsesorSel = () => {
	const asesor = localStorage.getItem("data-asesor-sel")
	const selectorF = (num) => {
	    container.setAttribute("data-asesor-sel", num)
	    localStorage.setItem("data-asesor-sel", num)
	    location.reload();
	}
	return (
	<div className="asesor-sel">
	    {data.map(i =>
		asesor === i[1]
		? <div className="slted">{i[0]}</div>
		: <div onClick={() => selectorF(i[1])}>{i[0]}</div>
	    )}
	    
	</div>
	);
}

ReactDOM.render(<AsesorSel/>, container)
