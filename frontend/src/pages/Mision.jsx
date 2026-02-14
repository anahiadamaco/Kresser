export default function Mision() {
  return (
    <div>
      {/* HEADER */}
      <section 
        style={{
          backgroundColor: 'var(--primary)',
          color: 'white',
          padding: '60px 0',
          textAlign: 'center'
        }}
      >
        <div className="container">
          <h1 style={{ color: 'white', marginBottom: '12px' }}>Misión</h1>
          <p className="lead" style={{ color: 'rgba(255, 255, 255, 0.95)', margin: 0 }}>
            Nuestro compromiso diario
          </p>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <p className="lead" style={{ marginBottom: '24px', color: 'var(--accent)', fontWeight: 600 }}>
                La misión de Kresser SpA es proveer servicios integrales de ingeniería y construcción bajo los más altos estándares de calidad, seguridad y eficiencia.
              </p>
              <p>
                Ejecutamos proyectos confiables que aportan valor sostenible a nuestros clientes y a las comunidades, mediante soluciones técnicas sólidas, innovación constante y un equipo profesional altamente calificado.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
