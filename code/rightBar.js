const container = document.querySelector('.right_bar_container')

const data = [
	{
		name: 'Calendario'
	},
	{
		name: 'Tareas y Fechas Importantes'
	},
	{
		name: 'Noticias'
	},
]

const RightBar = () => {
	return (
			<div id="rightbar">
				<div id="calendario"></div>
				<div class="right-jumbo">
					<p class="subtext">Ultimas Noticias</p>
					<iframe class="noti-video" src="https://www.youtube.com/embed/8ZrauuMpRD8" title="Noticias" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				</div>
		</div>
	);
}

ReactDOM.render(<RightBar/>, container)
