const container = document.querySelector('.faqs')

const styles = {
	yeLine: {
		textDecoration: 'underline #FFC024',
		fontSize: '22px',
	},
	titleQ: {
		textShadow: '2px 2px 6px #FFC024',
		fontSize: '22px',
		margin: 0,
	},
	response: {
		fontSize: '18px',
		paddingLeft: 40,
		margin: 0,
	},
}

const preguntas = [
	['Cual es el Proposito de esta pagina?','Respuesta']
]

const Faqs = () => {
	return (
		<div>
			<h2 style={styles.yeLine}>COMO USAR ESTA PAGINA ?</h2>
			<a href="" target="_blank"><div className="div-src">
				<img src="./imgs/sources/ova.png"/>
				<span className="etesc-subtitle">Guia Interactiva</span>
			</div></a>
			<br/>
			<h2 style={styles.yeLine}>PREGUNTAS FRECUENTES</h2>
			<ul>{preguntas.map(item => 
					<li>
						<p style={styles.titleQ}>{item[0]}</p>
						<p style={styles.response}>{item[1]}</p>
					</li>
			)}</ul>
		</div>
	);
}

ReactDOM.render(<Faqs/>, container)
