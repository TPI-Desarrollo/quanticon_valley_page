const container = document.querySelector('#side_bar_container')
const selected = container.getAttribute('data-selected')

const data = [
	{
		sel: 'principal',
		src: './imgs/Icon_principal.svg',
		title: 'Principal',
		link: './principal.html',
		icon: './imags/Icon_principal.svg'
	},
	{
		sel: 'etesc',
		src: './imgs/Icon_ETESC.svg',
		title: 'ETESC',
		link: './etsc.html',
	},
	{
		sel: 'zonas-comunes',
		src: './imgs/Icon_zonas_comunes.svg',
		title: 'Zonas Comunes',
		link: './comunes.html',
	},
	{
		sel: 'oficina',
		src: './imgs/Icon_Oficina.svg',
		title: 'Oficina',
		link: './office.html',
	},
	{
		sel: 'info',
		src: './imgs/icon_Informacion.svg',
		title: 'Informacion',
		link: './info.html',
	},
]

const SideBar = () => {
	return (
		<div id="sidebar">
				<a href="index.html">
					<img id="logo" src="./imgs/QB_blanco_vertical 1.png" className="d-none d-md-block"/>
				</a>	
			{data.map((item) => {
				return item.sel === selected 
					?	<a href={item.link} key={item.sel}>
						<div id="sidebar-button-sel" className="sidebar-button">
							<img className="sidebar-button-icon" src={item.src}/>
							<span className="sidebar-button-text d-none d-md-block">{item.title}</span>
						</div></a>
					:	<a href={item.link} key={item.sel}>
						<div className="sidebar-button">
							<img className="sidebar-button-icon" src={item.src}/>
							<span className="sidebar-button-text d-none d-md-block">{item.title}</span>
						</div></a>
				})}
			<img className="sidebar-img" src="./imgs/QV_textura 1.png"/> 
		</div>
	);
}

ReactDOM.render(<SideBar/>, container)
