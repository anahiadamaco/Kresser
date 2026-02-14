export default function Vision() {
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
          <h1 style={{ color: 'white', marginBottom: '12px' }}>Visión</h1>
          <p className="lead" style={{ color: 'rgba(255, 255, 255, 0.95)', margin: 0 }}>
            Hacia dónde vamos
          </p>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <p className="lead" style={{ marginBottom: '24px', color: 'var(--accent)', fontWeight: 600 }}>
                Ser reconocidos como una empresa líder en ingeniería y construcción, destacada por su calidad, confiabilidad y capacidad de resolver proyectos complejos con eficiencia y responsabilidad, consolidándonos como un socio estratégico para clientes públicos y privados en todo Chile.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
