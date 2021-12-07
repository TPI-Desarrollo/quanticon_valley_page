const container = document.querySelector('.right_bar_container');

var selected = 0;
function changeNoti(e, num){
    e.preventDefault();
    var vid = document.querySelector('#vid');
    var vid_title = document.querySelector('#vid-title');
	var vids = document.querySelectorAll(".video-button");

    vid.src = videos[num].video;
    vid_title.innerHTML = videos[num].fecha;
	vids.forEach((vid, i) => {
		if(num == i){
			vid.className = "video-button video-button-sel"
		}else{
			vid.className = "video-button"
		}
	})
}
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

const videos = [
	{
		no: 0,
		nombre: "La Pasion: el mapa de los innovadores",
		fecha: "03-Diciembre 2021",
		img: "./imgs/noti/9.jpg",
		video: "https://www.youtube.com/embed/xjHP8tPvBsY"
	},
	{
		no: 1,
		fecha: "26-Noviembre 2021",
		img: "./imgs/news_logo.png",
		video: "https://www.youtube.com/embed/tl6AaqqyrSQ"
	},
	{
		no: 2,
		fecha: "19-Noviembre 2021",
		img: "./imgs/news_logo.png",
		video: "https://www.youtube.com/embed/Mtz92lwd9Gs"
	},
	{
		no: 3,
		fecha: "12-Noviembre 2021",
		img: "./imgs/news_logo.png",
		video: "https://www.youtube.com/embed/cgKLuTxNsVE"
	},
	{
		no: 4,
		fecha: "05-Noviembre 2021",
		img: "./imgs/news_logo.png",
		video: "https://www.youtube.com/embed/s1dIgi50Wic"
	},
	{
		no: 5,
		fecha: "29-Octubre 2021",
		img: "./imgs/news_logo.png",
		video: "https://www.youtube.com/embed/TUDKij3AXuc"
	},
	{
		no: 6,
		fecha: "20-Octubre 2021",
		img: "./imgs/news_logo.png",
		video: "https://www.youtube.com/embed/toumedldx-c"
	},
	{
		no: 7,
		fecha: "11-Octubre 2021",
		img: "./imgs/news_logo.png",
		video: "https://www.youtube.com/embed/KpILuChm-ko"
	},
	{
		no: 8,
		fecha: "4-Octubre 2021",
		img: "./imgs/news_logo.png",
		video: "https://www.youtube.com/embed/HnVqU8tOAGg"
	},
]


const Modal = () => {
	return (
		<div className="modal fade" id="myModalNews" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
			<div className="modal-dialog modal-lg" role="document">
			<div className="modal-content">
				<div className="modal-header">
				<a type="button" className="close pointer" data-dismiss="modal" aria-label="Close"><img src="./imgs/exit.png"/></a>
				<h4 className="modal-title" id="myModalLabel">Noticias</h4>
				</div>
		
				<div className="modal-body"><div className="grid-noti">
					<div>
						<p id="vid-title" className="video-title"> {videos[selected].fecha} </p>
					</div>
					<div>
					</div>
					<div>
						<div className="video-wrapper">
							<iframe id="vid" src={videos[selected].video} className="noti-video" title="Noticias" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
						</div>
					</div>
					<div>
						<div>
							<img className="video-banner" src="./imgs/vid_banner.png"/>
						</div>
						{videos.map((vid) => {
							var style = "video-button"
							if(vid.no == selected){
								style = "video-button video-button-sel"
							}
							
							return(
								<div key={vid.no} className="video-banner">	
									<button className={style} key={vid.no} onClick={e => {changeNoti(e, vid.no)}}>
										<p className="noti-img">
											<img 
												src={vid.img} 
												width="100px"
											/>
										</p>
										<p className="noti-name">
											<strong>{vid.nombre}</strong> 
											<br/>{vid.fecha}
										</p>
										
									</button>
								</div>
							) 	
						})}
					</div>
					</div>
				</div>
				<div className="modal-footer">
				</div>
			</div>
			</div>
		</div>
	)
}

const RightBar = () => {
	return (
			<div id="rightbar">
				<div>
					<div id="calendario"></div>
				</div>
				<a type="button" className="pointer" data-toggle="modal" data-target="#myModalNews">
				<div className="right-jumbo-news">
					<iframe className="noti-video" src={videos[selected].video} title="Noticias" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				</div>
				</a>
				<a href="https://drive.google.com/file/d/1xRTV1yWZlF3viIvIS8vgQjLpMZy9AP51/view?usp=sharing" target="_blank"><div className="right-jumbo pildoras">
					<div>
						<img style={{marginRight: 10}} src="./imgs/pil.png" />
					</div>
					<div>
						Conoce las pildoras de esta Semana
					</div>
				</div></a>
				<Modal/>
			</div>
	);
}

ReactDOM.render(<RightBar/>, container)
