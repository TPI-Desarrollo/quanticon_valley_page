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
				{[1,2,3,4,5,6].map((item) => 
					(piso == item)
						? <div class="col-2 piso-col" data-piso={item}>
								<a><span id="piso-selected" class="piso-select">
									Piso {item}
								</span></a>
							</div> 
						: <div class="col-2 piso-col" data-piso={item} 
									onClick={() => selectorF(item)}>
								<a><span class="piso-select">
									Piso {item}
								</span></a>
							</div> 
				)}
			</div>
	);
}

ReactDOM.render(<Pisos/>, container)
