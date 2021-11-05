const container = document.querySelector('.asesor-vir')

function changeMon(e, i){
  e.preventDefault();
  var mon = document.querySelector('#mon')
  mon.innerHTML = `${asesores[i].nombreMon} - <strong> ${asesores[i].correoMon}</strong>`
}

const asesores = [
  {
    img: "1-hc.png",
    nombre: "Hernán G. Cortés Mora",
    rol: "profesor facultad de ingenieria",
    desc: "Doctor en Ingeniería - Industria y Organizaciones, Magister en Ingeniería Industrial e Ingeniero de Sistemas. Experiencia en gestión universitaria, gestión ambiental, aprendizaje basado en proyectos (PBL), gestión ambiental, de proyectos de extensión, consultoría, asesoría, formación de docentes, docencia universitaria (pregrado y posgrado), investigación, manejo de talento humano, sistemas de información y mentoría de emprendedores, con más de diez años de experiencia en acompañamiento de iniciativas de innovación y emprendimiento. Actualmente Jefe de la Oficina de Gestión Ambiental de la Sede Bogotá de la Universidad Nacional de Colombia.",     
    campo: "Ingenieria Industrial",
    costo: 500,
    nombreMon: "Mariana Barrera",
    correoMon: "lmbarreram@unal.edu.co"
  },
  {
    img: "1-or.png",
    nombre: "Oscar L. Rodriguez",
    rol: "profesor facultad de ingenieria",
    desc: "Ingeniero mecatrónico, magíster en ingeniería biomédica y candidato a doctor en ingeniería mecánica y mecatrónica. Mi área de trabajo ha estado orientada principalmente a la investigación interdisciplinar en áreas como la ingeniería biomédica, el modelado computacional de sistemas físicos y biológicos, la simulación multifísica, la programación científica, el diseño, implementación y administración de tecnología biomédica y la docencia en biomecánica y mecánica de sólidos. Entusiasta de todo lo que tenga que ver con nuevas aplicaciones de la tecnología, sistemas computacionales de alto rendimiento y sus aplicaciones.",
    campo: "Ingenieria Mecatronica",
    costo: 500,
    nombreMon: "David Andrés Niño",
    correoMon: "daninom@unal.edu.co"
  },
  {
    img: "1-oe.png",
    nombre: "Oscar Andres Erazo",
    rol: "profesor facultad de ingenieria",
    desc: "MBA con orientación en Dirección Estratégica. Coach Profesional. Ingeniero en Electrónica y Telecomunicaciones con 20 años de experiencia laboral en la planeación, el diseño y la gestión de redes y proyectos de telecomunicaciones. 5 años como Docente Universitario. Trabajo guiado por objetivos, orientado a obtener excelentes resultados. Buenas relaciones interpersonales y una amplia experiencia en la administración de personas. Aseguro un excelente grado de servicio, logrando identificar necesidades en este sector, disminuyendo la brecha entre la academia y el sector productivo.",
    campo: "Ingenieria Electronica",
    costo: 500,
    nombreMon: "Cristián Stiven Suavita",
    correoMon: "cssuavitam@unal.edu.co"
  },
  {
    img: "1-fb.png",
    nombre: "Ferney A. Beltran",
    rol: "profesor facultad de ingenieria",
    desc: "Ingeniero en Electrónica por la Universidad Nacional de Colombia y Magíster en Redes de Telecomunicaciones para Países en Desarrollo por la Universidad Rey Juan Carlos. Madrid España y candidato doctor en TIC.",
    campo: "Ingenieria Electronica",
    costo: 500,
    nombreMon: "Leidy Cardozo",
    correoMon: "lcardozo@unal.edu.co"
  },
  {
    img: "1-dg.png",
    nombre: "David L. Galindo",
    rol: "profesor facultad de ingenieria",
    desc: "Ingeniero Mecatrónico, con un máster en Automatización Industrial. Apasionado de la fiabilidad industrial, con experiencia en el desarrollo de sistemas de detección y diagnóstico de fallos, análisis de criticidad de activos (ACA), análisis de causa raíz (RCA) y seguimiento de indicadores clave de rendimiento (KPI). Con una experiencia centrada en el análisis del espectro electromagnético para la detección de fallos en máquinas eléctricas. Actualmente aspirante a doctor en ingeniería y docente ocasional de la Universidad Nacional desde el 2019.",
    campo: "Ingenieria Mecatronica",
    costo: 500,
    nombreMon: "Mariana Barrera",
    correoMon: "lmbarreram@unal.edu.co"
  },
  {
    img: "1-jv.png",
    nombre: "Julian D. Valbuena",
    rol: "profesor facultad de ingenieria",
    desc: "Formación académica: Ingeniero Electrónico (Grado Agosto 2016) – UNAL. Ingeniero Electricista (Grado Septiembre 2017) – UNAL. Magister en Ingeniería Eléctrica (Grado Septiembre 2020) – UNAL.",
    campo: "Ingenieria Electrica",
    costo: 500,
    nombreMon: "Mariana Barrera",
    correoMon: "lmbarreram@unal.edu.co"
  },
  {
    img: "1-ja.png",
    nombre: "John F. Acuña",
    rol: "Profesor Facultad de Ingeniería",
    desc: "Profesional de la ingeniería Agrícola, con estudios de maestría en estructuras y doctorado en mecanización y tecnología agraria, con 24 años de experiencia docente en el área de construcciones agrícolas (infraestructura rural y bioclimática). Director y participante en proyectos de consultoría, investigación y transferencia de tecnología a nivel nacional e internacional. Un hombre feliz, decidido y exitoso. Líder que busca soluciones a los retos a los que me enfrento. Analítico, organizado, colaborativo y en constante aprendizaje. Apasionado por la investigación aplicada y la docencia, buscando el bienestar de quienes me rodean en diferentes entornos.",
    campo: "Ingenieria Agricola",
    costo: 500,
    nombreMon: "David Andrés Niño",
    correoMon: "daninom@unal.edu.co"
  },
  {
    img: "1-ah.jpeg",
    nombre: "Alfonso Herrera Jiménez",
    rol: "Profesor Facultad de Ingeniería",
    desc: "Ingeniero de sistemas de la Universidad Nacional de Colombia. Candidato a Doctor en administración de la Universidad San Pablo CEU de Madrid (España). Especialista en Administración y Finanzas. Especialista en Alta Capacidad UNED en Madrid (España). Gerente Financiero y Administrativo Aseo Capital. Gerente Financiero y Administrativo ECSA. Gerente de Sistemas de Laboratorios Chalver Farmacéutica. Director de Sistemas Revista Cromos. Jefe de Auditoría de Sistemas Contraloría de Bogotá. Docente Universidad Nacional: cátedras de Gerencia de Proyectos y Gerencia de Empresa. Docente Universidad EAN: especialización y maestría en pensamiento estratégico. Docente Universidad de San Buenaventura: Cátedra de gestión de la responsabilidad social empresarial.",
    campo: "Ingeniería de Sistemas",
    costo: 500,
    nombreMon: "Alfonso Herrera",
    correoMon: ""
  }
]

const Modal = () => {
	return (
		<div className="modal fade" id="myModalAsesores" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
			<div className="modal-dialog" role="document">
			<div className="modal-content">
				<div className="modal-header">
				<a type="button" className="close pointer" data-dismiss="modal" aria-label="Close"><img src="./imgs/exit.png"/></a>
				<h4 className="modal-title" id="myModalLabel">Asesorias</h4>
				</div>
		
				<div className="modal-body">
          <div>
						<p className="video-title"> Instrucciones para solicitar una Asesoria </p>
					</div>
          <div>
						<p> Si deseas recibir una asesoria para apoyar el desarrollo de tu proyecto debes:</p>
            <ul>
              <li>Preparar un correo con el Asunto: <strong>TPI-SolicitudAsesoria-GXX</strong> donde XX es el numero de tu grupo</li>
              <li>En el cuerpo del correo escribe  tu <strong>Horario</strong> (2-4pm o 4-6pm), el <strong>Numero y Nombre de tu grupo</strong> y el <strong>Nombre del Asesor</strong> con el que deseas solicitar una reunion.</li>
              <li>Adicionalmente puedes definir un <strong>Dia y Hora</strong> en la que tu grupo podria estar disponible. (la fecha y hora final dependera de la disponibilidad del asesor) </li>
              <li>Enviar el mensaje al <strong>Monitor Correspondiente</strong> que aparece abajo, ellos se comunicaran contigo y organizaran una fecha para reunirse con el asesor.
                <ul>
                  <li id="mon"> 
                  Leidy Cardozo - <strong>cssuavitam@unal.edu.co</strong> 
                  </li> 
                </ul> 
              </li>
            </ul>
					</div>
				</div>
				<div className="modal-footer">
				</div>
			</div>
			</div>
		</div>
	)
}


const AsesorVir = () => {
    const asr = localStorage.getItem("data-asesor-sel")
    const asesor = asr ? asr : '1'
    return (
    <div>
	{asesor === '2' ?
      <div>
        <p>Asesores Virtuales</p>
        {asesores.map((asesor, i) => {
          return  <div className="asesor-card">
                    <div>
                      <img className="asesor-img" src={"./imgs/profs/" + asesor.img}/>
                    </div>
                    <div>
                      <h4 className="no-margin">{asesor.nombre}</h4>
                      <h5 className="no-margin">{asesor.rol}</h5>
                      <p className="asesor-txt no-margin">
                        {asesor.desc.substr(0, 295) + "..."}
                      </p>
                    </div>
                    <div className="asesor-coins-div">
                      <span className="asesor-campo">{asesor.campo}</span>
                      <p className="asesor-costo-label">Costo Asesoria</p>
                      <div className="asesor-coins">
                        <img src="./imgs/QV_Innocoins 1.png"/>
                        {asesor.costo}
                      </div>
                      <button data-toggle="modal" data-target="#myModalAsesores" style={{fontSize:'16px'}} 
                      className="grupo-sel grp-selected" onClick={(e) => {changeMon(e, i)}}>Mas Informacion</button>
                    </div>
                  </div>
        })}
        <Modal/>               
      </div>
	 : null }
    </div>
    );
}

ReactDOM.render(<AsesorVir/> , container)
