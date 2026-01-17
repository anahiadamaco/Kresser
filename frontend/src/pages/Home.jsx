export default function Home() {
  return (
    <>
      {/* HERO SECTION - CAMBIAR IMAGEN DE FONDO */}
      <section 
        style={{
          backgroundImage: 'url(/path-to-hero-image.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: 'var(--primary)',
          color: 'white',
          padding: '80px 0',
          position: 'relative'
        }}
        className="hero-section"
      >
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(26, 58, 82, 0.7)',
          zIndex: 1
        }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <h1 style={{ color: 'white', marginBottom: '16px' }}>Ingeniería que Construye Confianza</h1>
          <p className="lead" style={{ color: 'rgba(255, 255, 255, 0.95)', marginBottom: '32px' }}>
            Soluciones en ingeniería y construcción con excelencia, seguridad y cumplimiento
          </p>
          <button className="btn btn-primary btn-lg">Solicitar Presupuesto</button>
        </div>
      </section>

      {/* SECCIÓN SOBRE NOSOTROS */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="text-center">Sobre Kresser SpA</h2>
              <p className="lead text-center" style={{ marginBottom: '24px' }}>
                Empresa chilena dedicada a la ingeniería y la construcción
              </p>
              
              <p>
                Kresser SpA es una empresa chilena dedicada a la ingeniería y la construcción, orientada a ofrecer soluciones confiables, eficientes y técnicamente sólidas.
              </p>
              
              <p>
                Nuestro equipo multidisciplinario combina experiencia, innovación y un fuerte compromiso con la calidad para desarrollar proyectos de diversa complejidad en los sectores público y privado. En cada obra priorizamos la seguridad, el cumplimiento y la satisfacción del cliente, construyendo relaciones basadas en la confianza y en resultados concretos.
              </p>
              
              <p style={{ fontWeight: 600, color: 'var(--accent)', fontSize: '1.1rem' }}>
                En Kresser SpA transformamos desafíos en soluciones y proyectos en realidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN VALORES CORPORATIVOS */}
      <section className="section section-light">
        <div className="container">
          <h2 className="text-center">Valores Corporativos</h2>
          <p className="lead text-center" style={{ marginBottom: '48px', color: 'var(--gray-600)' }}>
            Principios que guían nuestro trabajo en cada proyecto
          </p>
          
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="list-group">
                
                {/* VALOR 1 - CAMBIAR ICONO SI LO NECESITAS */}
                <div className="list-group-item">
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '24px' }}>✓</span>
                    Calidad y Excelencia
                  </h4>
                  <p style={{ marginBottom: 0, color: 'var(--gray-700)' }}>
                    Ejecutamos cada obra con rigurosidad técnica y estándares superiores.
                  </p>
                </div>

                {/* VALOR 2 */}
                <div className="list-group-item">
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '24px' }}>🛡️</span>
                    Seguridad Primero
                  </h4>
                  <p style={{ marginBottom: 0, color: 'var(--gray-700)' }}>
                    Protegemos a nuestros trabajadores, clientes y comunidades en cada etapa del proyecto.
                  </p>
                </div>

                {/* VALOR 3 */}
                <div className="list-group-item">
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '24px' }}>📋</span>
                    Cumplimiento y Responsabilidad
                  </h4>
                  <p style={{ marginBottom: 0, color: 'var(--gray-700)' }}>
                    Honramos plazos, compromisos y normativas, generando confianza duradera.
                  </p>
                </div>

                {/* VALOR 4 */}
                <div className="list-group-item">
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '24px' }}>💡</span>
                    Innovación y Mejora Continua
                  </h4>
                  <p style={{ marginBottom: 0, color: 'var(--gray-700)' }}>
                    Incorporamos nuevas tecnologías, métodos constructivos y soluciones eficientes.
                  </p>
                </div>

                {/* VALOR 5 */}
                <div className="list-group-item">
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '24px' }}>🤝</span>
                    Integridad y Transparencia
                  </h4>
                  <p style={{ marginBottom: 0, color: 'var(--gray-700)' }}>
                    Actuamos con ética, claridad y profesionalismo en todas nuestras relaciones.
                  </p>
                </div>

                {/* VALOR 6 */}
                <div className="list-group-item">
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '24px' }}>🌱</span>
                    Sostenibilidad
                  </h4>
                  <p style={{ marginBottom: 0, color: 'var(--gray-700)' }}>
                    Promovemos prácticas responsables con el entorno y el uso eficiente de los recursos.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN CTA */}
      <section style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: '24px' }}>¿Listo para tu Proyecto?</h2>
          <p className="lead" style={{ color: 'rgba(255, 255, 255, 0.95)', marginBottom: '32px' }}>
            Contáctanos para conocer cómo podemos ayudarte
          </p>
          <button className="btn btn-primary btn-lg">Solicitar Presupuesto</button>
        </div>
      </section>
    </>
  );
}
