export default function Empresa() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          
          {/* DESCRIPCIÓN CORPORATIVA */}
          <h1 className="mb-4">Sobre Nosotros</h1>
          <p className="lead">
            Kresser SpA es una empresa chilena dedicada a la ingeniería y la construcción, orientada a ofrecer soluciones confiables, eficientes y técnicamente sólidas.
          </p>
          <p>
            Nuestro equipo multidisciplinario combina experiencia, innovación y un fuerte compromiso con la calidad para desarrollar proyectos de diversa complejidad en los sectores público y privado. En cada obra priorizamos la seguridad, el cumplimiento y la satisfacción del cliente, construyendo relaciones basadas en la confianza y en resultados concretos.
          </p>
          <p>
            <strong>En Kresser SpA transformamos desafíos en soluciones y proyectos en realidad.</strong>
          </p>

          {/* VALORES CORPORATIVOS */}
          <h2 className="mt-5 mb-4">Valores Corporativos</h2>
          <div className="list-group">
            <div className="list-group-item">
              <h5 className="mb-2">1. Calidad y Excelencia</h5>
              <p className="mb-0">Ejecutamos cada obra con rigurosidad técnica y estándares superiores.</p>
            </div>
            <div className="list-group-item">
              <h5 className="mb-2">2. Seguridad Primero</h5>
              <p className="mb-0">Protegemos a nuestros trabajadores, clientes y comunidades en cada etapa del proyecto.</p>
            </div>
            <div className="list-group-item">
              <h5 className="mb-2">3. Cumplimiento y Responsabilidad</h5>
              <p className="mb-0">Honramos plazos, compromisos y normativas, generando confianza duradera.</p>
            </div>
            <div className="list-group-item">
              <h5 className="mb-2">4. Innovación y Mejora Continua</h5>
              <p className="mb-0">Incorporamos nuevas tecnologías, métodos constructivos y soluciones eficientes.</p>
            </div>
            <div className="list-group-item">
              <h5 className="mb-2">5. Integridad y Transparencia</h5>
              <p className="mb-0">Actuamos con ética, claridad y profesionalismo en todas nuestras relaciones.</p>
            </div>
            <div className="list-group-item">
              <h5 className="mb-2">6. Sostenibilidad</h5>
              <p className="mb-0">Promovemos prácticas responsables con el entorno y el uso eficiente de los recursos.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
