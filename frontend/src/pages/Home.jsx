import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
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
          backgroundColor: 'rgba(45, 95, 127, 0.7)',
          zIndex: 1
        }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <h1 style={{ color: 'white', marginBottom: '16px' }}>Ingeniería que Construye Confianza</h1>
          <p className="lead" style={{ color: 'rgba(255, 255, 255, 0.95)', marginBottom: '32px' }}>
            Soluciones en ingeniería y construcción con excelencia, seguridad y cumplimiento
          </p>
          <button className="btn btn-primary btn-lg" onClick={() => navigate('/presupuesto')}>Solicitar Presupuesto</button>
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
          
          <div className="row" style={{ marginTop: '32px', gap: '24px' }}>
            {/* VALOR 1 */}
            <div style={{ flex: '1 1 calc(33.333% - 16px)', minWidth: '200px' }}>
              <div style={{
                paddingLeft: '16px',
                borderLeft: '4px solid var(--accent)',
              }}>
                <h5 style={{ marginBottom: '8px', color: 'var(--primary)', marginTop: 0 }}>Calidad</h5>
                <p style={{ fontSize: '0.9rem', color: 'var(--gray-700)', marginBottom: 0 }}>
                  Excelencia técnica en cada proyecto
                </p>
              </div>
            </div>

            {/* VALOR 2 */}
            <div style={{ flex: '1 1 calc(33.333% - 16px)', minWidth: '200px' }}>
              <div style={{
                paddingLeft: '16px',
                borderLeft: '4px solid var(--accent)',
              }}>
                <h5 style={{ marginBottom: '8px', color: 'var(--primary)', marginTop: 0 }}>Seguridad</h5>
                <p style={{ fontSize: '0.9rem', color: 'var(--gray-700)', marginBottom: 0 }}>
                  Protección en cada etapa
                </p>
              </div>
            </div>

            {/* VALOR 3 */}
            <div style={{ flex: '1 1 calc(33.333% - 16px)', minWidth: '200px' }}>
              <div style={{
                paddingLeft: '16px',
                borderLeft: '4px solid var(--accent)',
              }}>
                <h5 style={{ marginBottom: '8px', color: 'var(--primary)', marginTop: 0 }}>Cumplimiento</h5>
                <p style={{ fontSize: '0.9rem', color: 'var(--gray-700)', marginBottom: 0 }}>
                  Plazos y compromisos honrados
                </p>
              </div>
            </div>

            {/* VALOR 4 */}
            <div style={{ flex: '1 1 calc(33.333% - 16px)', minWidth: '200px' }}>
              <div style={{
                paddingLeft: '16px',
                borderLeft: '4px solid var(--accent)',
              }}>
                <h5 style={{ marginBottom: '8px', color: 'var(--primary)', marginTop: 0 }}>Innovación</h5>
                <p style={{ fontSize: '0.9rem', color: 'var(--gray-700)', marginBottom: 0 }}>
                  Nuevas tecnologías y métodos
                </p>
              </div>
            </div>

            {/* VALOR 5 */}
            <div style={{ flex: '1 1 calc(33.333% - 16px)', minWidth: '200px' }}>
              <div style={{
                paddingLeft: '16px',
                borderLeft: '4px solid var(--accent)',
              }}>
                <h5 style={{ marginBottom: '8px', color: 'var(--primary)', marginTop: 0 }}>Integridad</h5>
                <p style={{ fontSize: '0.9rem', color: 'var(--gray-700)', marginBottom: 0 }}>
                  Ética y profesionalismo
                </p>
              </div>
            </div>

            {/* VALOR 6 */}
            <div style={{ flex: '1 1 calc(33.333% - 16px)', minWidth: '200px' }}>
              <div style={{
                paddingLeft: '16px',
                borderLeft: '4px solid var(--accent)',
              }}>
                <h5 style={{ marginBottom: '8px', color: 'var(--primary)', marginTop: 0 }}>Sostenibilidad</h5>
                <p style={{ fontSize: '0.9rem', color: 'var(--gray-700)', marginBottom: 0 }}>
                  Responsabilidad ambiental
                </p>
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
          <button className="btn btn-primary btn-lg" onClick={() => navigate('/presupuesto')}>Solicitar Presupuesto</button>
        </div>
      </section>
    </>
  );
}
