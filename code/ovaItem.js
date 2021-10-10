const containers = document.querySelectorAll('.ova-item')

// ovas, pdf, videos, herramientas, entregables
const styles= {
	text: {
		marginLeft: 10,
		fontSize: 12,
	},
	icon: {
		fontSize: 20,
	},
}
const types = [
	{
		type: "ova",
		src: './imgs/sources/ova.png',
	},
	{
		type: "pdf",
		src: './imgs/sources/pdf.png',
	},
	{
		type: "video",
		src: './imgs/sources/video.png',
	},
	{
		type: "tools",
		src: './imgs/sources/tool.png',
	},
	{
		type: "form",
		src: './imgs/sources/form.png',
	},
]

const OvaItem = ({dataset}) => {
	const {sourceType, text, link} = dataset
	return (
		<div style={{paddingLeft: 20}}>
				<a href={link} target="_blank" className="div-src">
					{types.map((item) => {
						return item.type === sourceType
							? <img key={item.type} style={styles.icon} src={item.src}/>
							: null
					})}
					<span style={styles.text}>{text}</span>
				</a>
			</div>
	);
}

containers.forEach(c => {
	const dataset = c.dataset
	ReactDOM.render(<OvaItem dataset={dataset}/>, c)
})
