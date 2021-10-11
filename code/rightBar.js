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
				<div className="right-jumbo">
					<p className="subtext-rb">Ultimas Noticias</p>
					<iframe className="noti-video" src="https://www.youtube.com/embed/KpILuChm-ko" title="Noticias" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				</div>
				<a href="https://drive.google.com/file/d/1DsxZt4232mjOLK8-4hVIm0QOPxQJ9JrX/view?usp=sharing" target="_blank"><div className="right-jumbo pildoras">
                                    <div>
                                      <img style={{marginRight: 10}} src="./imgs/pil.png" />
                                    </div>
                                    <div>
                                      Conoce las pildoras de esta Semana
                                    </div>
				</div></a>
		</div>
	);
}

ReactDOM.render(<RightBar/>, container)
