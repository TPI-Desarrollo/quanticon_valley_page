const container = document.querySelector('.asesor-content')

const data = {
	dos: {
		1 : {
			ova: [
			],
			pdf: [
			],
			video: [
				['Como Hacer un Pitch', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700302'],
				['Pregunta Escencial', 'https://campus.virtual.unal.edu.co/mod/page/view.php?id=701245'],
			],
			tool: [
			],
		},
	},
	cuatro: {
		1 : {
			ova: [
			],
			pdf: [
			],
			video: [
				['Como Hacer un Pitch', 'https://campus.virtual.unal.edu.co/mod/hvp/view.php?id=700534'],
				['Pregunta Escencial', 'https://campus.virtual.unal.edu.co/mod/page/view.php?id=701209'],
			],
			tool: [
			],
		}
	}
}

const LobbyCont = () => {
	const str = localStorage.getItem("data-piso-sel")
	const selector = str ? str : 1
	const gr = localStorage.getItem("data-grupo-sel")
	const group = gr ? gr : 'dos'
	const setGroup = grp => {
		localStorage.setItem("data-grupo-sel", grp)
		location.reload()
	}
	return (
		<div>
			<div class="grp-sel-cont">
				{group === 'dos'
					? <div class="grupo-sel grp-selected">
							Horario 2 - 4 pm
						</div>
					: <div class="grupo-sel" onClick={() => setGroup('dos')}>
							Horario 2 - 4 pm
						</div>
				}
				{group === 'cuatro'
					? <div class="grupo-sel grp-selected">
							Horario 4 - 6 pm
						</div>
					: <div class="grupo-sel" onClick={() => setGroup('cuatro')}>
							Horario 4 - 6 pm
						</div>
				}
			</div>
		<div class="src-grid">
			{data[group][selector].ova[0] ? 
			<div class="src-element">
				<span>_OVAS</span>
				{data[group][selector] ? data[group][selector].ova.map(item => 
					<div key={item[0]} class="ova-item" data-source-type="ova" data-text={item[0]} data-link={item[1]}></div>
				): null}
			</div>
			: null}

			{data[group][selector].pdf[0] ? 
			<div class="src-element">
				<span>_PDFs</span>
				{data[group][selector] ? data[group][selector].pdf.map(item => 
					<div key={item[0]} class="ova-item" data-source-type="pdf" data-text={item[0]} data-link={item[1]}></div>
				): null}
			</div>
			: null}

			{data[group][selector].video[0] ? 
			<div class="src-element">
				<span>_VIDEOS</span>
				{data[group][selector] ? data[group][selector].video.map(item => 
					<div key={item[0]} class="ova-item" data-source-type="video" data-text={item[0]} data-link={item[1]}></div>
				): null}
			</div>
			: null}

			{data[group][selector].tool[0] ? 
			<div class="src-element">
				<span>_HERRAMIENTAS</span>
				{data[group][selector] ? data[group][selector].tool.map(item => 
					<div key={item[0]} class="ova-item" data-source-type="tools" data-text={item[0]} data-link={item[1]}></div>
				): null}
			</div>
			: null}
		</div>
		</div>
	);
}

ReactDOM.render(<LobbyCont/>, container)
