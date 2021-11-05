const container = document.querySelector('#pisos_selector')

const Pisos = () => {
	const piso = localStorage.getItem("data-piso-sel")
	const [el, setPiso] = React.useState(0)
	const selectorF = (num) => {
		setPiso(num)
		container.setAttribute("data-piso-sel", num)
		localStorage.setItem("data-piso-sel", num)
		location.reload();
	}
	return (
	<div id="piso-selector"> 
	    {['1','2','3','4','5','6'].map((item) => 
		    (piso == item)
			? <div className="col-2 piso-col" data-piso={item} key={item}>
			    <a><span id="piso-selected" className="piso-select">
				    Piso {item}
			    </span></a>
			    </div> 
			: <div className="col-2 piso-col" data-piso={item} key={item}
				onClick={() => selectorF(item)}>
			    <a><span className="piso-select">
				Piso {item}
			    </span></a>
			</div> 
		)}
	</div>
	);
}

ReactDOM.render(<Pisos/>, container)
