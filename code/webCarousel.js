const container = document.querySelector('.webinar-carousel')

const dataA = [
	[
	{
		n: 2,
		name: 'Crea una propuesta de valor desde el cliente y encuentra recursos para financiarla.',
		expo: 'Competir en el mercado requiere de múltiples aspectos fundamentales relacionados con la orientación al cliente y la planificación detallada de la idea de negocio.',
		date: '2021-1',
		link: {
			dos: 'https://campus.virtual.unal.edu.co/mod/url/view.php?id=756480',
			cuatro: 'https://campus.virtual.unal.edu.co/mod/url/view.php?id=756497'
		},
		state: 'pass'
	},
	{
		n: 1,
		name: 'Contexto de innovación y economía circular',
		expo: 'Conoce el la posición de Colombia en el panorama internacional de la Ciencia, Tecnología e Innovación',
		date: '2021-1',
		link: {
			dos: 'https://campus.virtual.unal.edu.co/mod/url/view.php?id=756468',
			cuatro: 'https://campus.virtual.unal.edu.co/mod/url/view.php?id=756485'
		},
		state: 'pass'
	}
	],
]
const data = [
	[
	{
		n: 2,
		name: 'Pasos clave para emprender',
		expo: 'Luis Felipe Botero',
		date: '24 Noviembre 2021',
		link: {
			dos: 'https://forms.gle/VqqMmdLCB2wJF2oLA',
			cuatro: 'https://forms.gle/VqqMmdLCB2wJF2oLA'
		},
		state: 'prox'
	},
	{
		n: 1,
		name: 'Innovación en iluminacion y alumbrado',
		expo: 'Mario Quiroga',
		date: '24 Noviembre 2021',
		link: {
			dos: 'https://campus.virtual.unal.edu.co/mod/url/view.php?id=700382',
			cuatro: 'https://campus.virtual.unal.edu.co/mod/url/view.php?id=700611'
		},
		state: 'pass'
	},
	]
]
const WebinarCard = ({item, group, t}) => {
	return (
		<div className="webinar-cards">
			{item.map((i) => 
				<div key={i.name} className="webinar-card-cont">
					<a href={i.link[group]} target="_blank" className="webinar-card">
					<img src={`imgs/webinars/${t}${i.n}.jpg`} className="webinar-card"/>
					{i.state === 'prox'
						?	<div className="webinar-prox">
								<h2 className="prox-text">PROXIMAMENTE</h2>
								<h4 className="prox-date">{i.date}</h4>
							</div>
						:	null
					}
					</a>
					<p className="web-card-title">{i.n}. {i.name}</p>
					<p className="web-card-expo">{i.expo}</p>
				</div>
			)}
		</div>
	)
}

const WebinarCarousel = () => {
	const sld = localStorage.getItem("webinar-slide")
	const slideNum = sld ? sld : '0'
	const setSlide = sldn => {
		localStorage.setItem("webinar-slide", sldn)
		location.reload()
	}
	const nextSlide = n => {
		let num = parseInt(slideNum) + n
		if( num < 0 ){num = data.length - 1}
		if( num == data.length ){num = 0}
		localStorage.setItem("webinar-slide", num.toString())
		location.reload()
	}

	const sldA = localStorage.getItem("webinar-slide-antes")
	const slideNumA = sld ? sld : '0'
	const setSlideA = sldn => {
		localStorage.setItem("webinar-slide-antes", sldn)
		location.reload()
	}
	const nextSlideA = n => {
		let num = parseInt(slideNum) + n
		if( num < 0 ){num = data.length - 1}
		if( num == data.length ){num = 0}
		localStorage.setItem("webinar-slide-antes", num.toString())
		location.reload()
	}

	const gr = localStorage.getItem("data-grupo-sel")
	const group = gr ? gr : 'dos'
	const setGroup = grp => {
		localStorage.setItem("data-grupo-sel", grp)
		location.reload()
	}

	return (
			<div className="carousel-container">
			<div className="grp-sel-cont">
				{group === 'dos'
					? <div className="grupo-sel grp-selected">
							Horario 2 - 4 pm
						</div>
					: <div className="grupo-sel" onClick={() => setGroup('dos')}>
							Horario 2 - 4 pm
						</div>
				}
				{group === 'cuatro'
					? <div className="grupo-sel grp-selected">
							Horario 4 - 6 pm
						</div>
					: <div className="grupo-sel" onClick={() => setGroup('cuatro')}>
							Horario 4 - 6 pm
						</div>
				}
			</div>
			<div class="webinar-header">
				<div class="webinar-text">
					<h2 class="webinar-title">WEBINARS</h2>
					<h4 class="webinar-desc">EN INNOVACION, TECNOLOGIA Y EMPRENDIMIENTO <span class="webinar-resalt">2021-2</span></h4>
				</div>
				<a href="https://docs.google.com/forms/d/e/1FAIpQLSdeFAWM1e4rokBcPQIzulx5ij-kmy7UkaqruEnNu3uE55JzCA/viewform" target="_blank"><div class="webinar-inscr">
					Inscribite Aquí
				</div></a>
			</div>
				<div className="carousel-select">  
					<div className="carousel-prev" onClick={()=>nextSlide(-1)}>&#10094;</div>
					{data.map((slide,index) =>
						slideNum === index.toString() 
							? <span key={`dot${index}`} className="dot dotactive" onClick={()=>setSlide(index.toString())}></span>
							: <span key={`dot${index}`} className="dot" onClick={()=>setSlide(index.toString())}></span>
					)}
					<div className="carousel-prev" onClick={()=>nextSlide(1)}>&#10095;</div>
				</div>
				{data.map((slide, index) => 
					slideNum === index.toString() 
						? <WebinarCard  
								key={`sld${index}`} 
								item={slide}
								group={group}
								t='n'
							/>
						: null
				)}
			<div class="webinar-header">
				<div class="webinar-text">
					<h2 class="webinar-title">WEBINARS 2021-1</h2>
					<h4 class="webinar-desc">DE INTERES PARA EL <span class="webinar-resalt">PISO 3: IDEACION</span></h4>
				</div>
			</div>
				<div className="carousel-select">  
					<div className="carousel-prev" onClick={()=>nextSlideA(-1)}>&#10094;</div>
					{dataA.map((slide,index) =>
						slideNum === index.toString() 
							? <span key={`dot${index}`} className="dot dotactive" onClick={()=>setSlideA(index.toString())}></span>
							: <span key={`dot${index}`} className="dot" onClick={()=>setSlideA(index.toString())}></span>
					)}
					<div className="carousel-prev" onClick={()=>nextSlideA(1)}>&#10095;</div>
				</div>
				{dataA.map((slide, index) => 
					slideNum === index.toString() 
						? <WebinarCard  
								key={`sld${index}`} 
								item={slide}
								group={group}
								t='a'
							/>
						: null
				)}
			</div>
	);
}

ReactDOM.render(<WebinarCarousel/>, container)

