const containers = document.querySelectorAll('.ova-item')

// ovas, pdf, videos, herramientas, entregables
const styles= {
	text: {
		marginLeft: 20,
	},
	icon: {
		fontSize: 60,
		color: '#ffc024'
	},
	div: {
		display: 'flex',
		color: '#303CFE',
		alignItems: 'center',
		padding: 20,
		paddingBottom: 5,
		paddingTop: 5,
		marginBottom: 10,
		marginTop: 10,
		width: '75%',
		borderRadius: 20,
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 2px 4px, rgba(0, 0, 0, 0.1) 0px 5px 8px",
	}
}
const types = [
	{
		type: "ova",
		name: 'layers',
		color: '#ffc024',
	},
	{
		type: "pdf",
		name: 'picture_as_pdf',
		color: '#ffc024',
	},
	{
		type: "video",
		name: 'smart_display',
		color: '#ffc024',
	},
	{
		type: "tools",
		name: 'plumbing',
		color: '#ffc024',
	},
	{
		type: "entrega",
		name: 'text_snippet',
		color: '#ffc024',
	}
]

const OvaItem = ({dataset}) => {
	console.log(dataset)
	const {sourceType, text, link} = dataset
	return (
		<li>
			<a href={link} target="_blank">
				<div style={styles.div}>
					{types.map((item) => {
						return item.type === sourceType
							? <span 
									key={item.name}
									style={{...styles.icon, color: item.color}} 
									class="material-icons">
										{item.name}
								</span>
							: null
					})}
					<span style={styles.text}>{text}</span>
				</div>
			</a>
		</li>
	);
}

containers.forEach(c => {
	const dataset = c.dataset
	ReactDOM.render(<OvaItem dataset={dataset}/>, c)
}
)
