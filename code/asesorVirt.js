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
    nombreMon: "Leidy Cardozo",
    correoMon: "lcardozo@unal.edu.co"
  },
  {
    img: "1-aea.jpg",
    nombre: "Alfonso Esteban Alarcón",
    rol: "",
    desc: "Ingeniero biológico, M.Sc. Ingeniería química, con experiencia en el área de bioprocesos, he realizado actividades de docencia en el área de la biotecnología y seminarios de proyectos, he sido evaluador de proyectos en el área de biotecnología para diferentes convocatorias de Colciencias, entre ellas la convocatoria para el fortalecimiento de CTeI en instituciones de educación superior y la convocatoria para la innovación y desarrollo tecnológico en empresas. Actualmente me encuentro desarrollando el doctorado en ingeniería y soy asesor en calidad e inocuidad en la industria alimentaria.",
    campo: "Ingeniería Biologica",
    costo: 500,
    nombreMon: "",
    correoMon: ""
  },
  {
    img: "1-lrr.jpeg",
    nombre: "Lina Rocío Ramos Pachón",
    rol: "",
    desc: "Ingeniera Química de la Universidad Industrial de Santander y estudiante de la Maestría en Ingeniería Química de la Universidad Nacional de Colombia. Durante su vida profesional se ha desempeñado principalmente en el manejo integrado del recurso hídrico, así como en su análisis fisicoquímico y microbiológico. Posee amplia experiencia en investigación científica, gestión de proyectos y en el desarrollo operacional de prácticas de laboratorio, además de un gran conocimiento en el tratamiento de agua potable y residual. Le apasiona la ciencia y en el futuro desea desempeñarse en gestión y dirección de proyectos ambientales que aporten en la preservación del ecosistema colombiano.",
    campo: "Ingeniería Quimica",
    costo: 500,
    nombreMon: "",
    correoMon: ""
  },
  {
    img: "1-efl.jpg",
    nombre: "Fernando Lizarazo Barrero",
    rol: "",
    desc: "Ingeniero Industrial, con un Magister en Administración de Negocios MBA y una Maestría en Contabilidad y Finanzas con énfasis en Investigación. Candidato a Doctor en Ingeniería, Industria y Organizaciones. Experiencia laboral de más de veinte años en áreas de Contabilidad y Finanzas, Logística, Producción, Administrativa y Comercio Exterior en empresas de sectores de Telecomunicaciones, Autopartes, Plástico y Agroindustrial. Experiencia de 25 años como docente de posgrado y pregrado en áreas de Negocios, Finanzas, Logística, Administración y Emprendimiento. Investigador asociado Grupo de Investigación Biogestión.",
    campo: "Finanzas",
    costo: 500,
    nombreMon: "",
    correoMon: ""
  },
  {
    img: "1-lcg.jpeg",
    nombre: "Luis Carlos Gonzalez S",
    rol: "",
    desc: "Docente y administrativo, con amplia experiencia, apasionado por los resultados y metas a través de un trabajo en equipo, con calidad y responsabilidad. Formación Ingeniero mecánico, Especialización en Diseño Mecánico y Máster en Ingeniería Agrícola. Experiencia en el área de Sistemas de Gestión de Calidad y Gestión de Proyectos en la Universidad Nacional de Colombia en el área administrativa. Experiencia como consultor para empresas del sector privado en el diseño de plantas, traslados y automatización. Experiencia en área de Diseño y Construcción de Equipos para sector educativo como Universidad de los Andes y Universidad Pontificia Javeriana, Universidad de Tolima entre otras. Docente de TPI taller de Proyectos Interdisciplinarios y control en biosistemas por más de tres años en la Universidad Nacional, docente en área de Automatización y Diseño de Sistema Eléctrico y otras materias en el área de ingeniería en Universidades privadas.",
    campo: "Gestion de Proyectos",
    costo: 500,
    nombreMon: "",
    correoMon: ""
  },
  {
    img: "1-icf.jpg",
    nombre: "Ismael Castañeda",
    rol: "Profesor Facultad de Ingenieria",
    desc: "Ingeniero Mecanico, Maestria en Ingeniería de Sistemas. Profesor de Bases de Datos, Mentor en cursos de TPI y Director de Proyectos.",
    campo: "Ingeniería de Sistemas",
    costo: 500,
    nombreMon: "",
    correoMon: ""
  },
  {
    img: "1-rgc.jpg",
    nombre: "Rosario Guerrero C.",
    rol: "",
    desc: "Diseñadora industrial Magister en Salud y Seguridad en el Trabajo egresada de la Universidad Nacional de Colombia y ergónoma de la Universidad Politécnica de Cataluña con experiencia en desarrollo de investigaciones en condiciones de trabajo de trabajadores del sector de la salud. Con trayectoria en asesoría y consultoría a empresas y administradoras de riesgos profesionales en el campo de la ergonomía y de la prevención de riesgos laborales. Experiencia en coordinación de trabajo de campo en proyectos de salud laboral y en el campo docente en programas de pregrado y postgrado que dentro de su plan curricular tengan relación con el área de factores humanos. Interés en proyectos de desarrollo vinculados a políticas de inclusión social orientadas al diseño aplicado como una herramienta útil de reflexión sobre la necesidad, la responsabilidad y el compromiso con la sociedad de potenciar la creación de entornos, servicios, herramientas y productos de fácil uso para la mayoría de las personas con el objetivo claro de contribuir con el mejoramiento de calidad de vida de las personas que, por una u otra razón, edad, estado físico o mental, cultura, habilidades, etc.…son a menudo excluidas a la hora de generar productos y/o servicios. Interés en proyectos de diseño que tengan dentro de sus metas la reducción del impacto negativo en el medio ambiente y el aumento de la calidad de vida de las personas dentro y fuera del trabajo. Con experiencia en gestión de proyectos con miras al fortalecimiento e innovación de las organizaciones, con una orientación sistémica, sostenible y con responsabilidad social.",
    campo: "Diseño Industrial",
    costo: 500,
    nombreMon: "",
    correoMon: ""
  },
  {
    img: "1-abt.jpg",
    nombre: "Alfonso Bohórquez Torres",
    rol: "",
    desc: "Profesor Asociado de la Escuela de Diseño Industrial Líneas de investigación: Innovación impulsada por diseño - la dimensión cultural. Diseño de producto y proceso. Manufactura de prototipos. Acciones de diseño que impulsan el cambio [o la resignificación] en las culturas organizacionales (Investigación en curso en la Maestría en Diseño de la Facultad de Artes UNAL). Consultor en áreas de comunicación de mercadotecnia.",
    campo: "Diseño Industrial",
    costo: 500,
    nombreMon: "",
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
