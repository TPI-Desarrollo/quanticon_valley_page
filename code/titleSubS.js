const container = document.querySelector('.title-subsection')
const dataset = container.dataset

const styles = {
	back: {
	},
	row: {
		display: 'flex',
		flexWrap: 'wrap',
		marginBottom: 15,
	},
	img: {
		height: 100,
		marginRight: 20,
	},
}
const data = {
		LOBBY: [ 'Tus Tareas inician aqui', './imgs/subsection/lobby.png', 100 ], 
		ASESORES: [ 'Aqui Resuelves todas tus dudas', './imgs/subsection/asesor.png', 55 ],
		REUNIONES: [ 'Webinars para todos', './imgs/subsection/reun.png', 55 ],
}

const Subsection = ({dataset}) => {
	const {title} = dataset
	const goBack = () => {
		history.back()
	}
	return (
			<div>
				<div style={styles.row}>
					<img style={{...styles.img, height:data[title][2]}} src={data[title][1]} />
					<div>
						<h2 className="title-content">{title}</h2>
						<p className="subtext">{data[title][0]}</p>
					</div>
				</div>
				<a href="comunes.html"><img className="back-button" src={'./imgs/sources/atras.png'}/></a>
			</div>
	);
}

ReactDOM.render(<Subsection dataset={dataset}/>, container)
