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
				<div>
					<div id="calendario"></div>
				</div>
				<div class="right-jumbo">
					<p class="subtext-rb">Ultimas Noticias</p>
					<iframe class="noti-video" src="https://www.youtube.com/embed/HnVqU8tOAGg" title="Noticias" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				</div>
				<div class="right-jumbo">
					<p class="subtext-rb">Pildoras</p>
					<embed class="pdf" src="./content/pildoras.pdf#toolbar=0&navpanes=0&scrollbar=0" type="application/pdf" width="95%" height="120px" />
				</div>
		</div>
	);
}

ReactDOM.render(<RightBar/>, container)
