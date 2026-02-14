export default function Servicio1() {
  return (
    <div>
      {/* HEADER SERVICIO - CAMBIAR IMAGEN DE FONDO */}
      <section 
        style={{
          backgroundImage: 'url(/path-to-servicio1-image.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: 'var(--primary)',
          color: 'white',
          padding: '60px 0',
          position: 'relative'
        }}
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
          <h1 style={{ color: 'white', marginBottom: '12px' }}>Servicio 1</h1>
          <p className="lead" style={{ color: 'rgba(255, 255, 255, 0.95)', margin: 0 }}>
            Soluciones profesionales y especializadas
          </p>
        </div>
      </section>

      {/* CONTENIDO DEL SERVICIO */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <p className="lead" style={{ marginBottom: '24px' }}>
                Descripción del Servicio 1
              </p>
              <p>
                Detalle completo sobre este servicio y cómo puede ayudarte a alcanzar tus objetivos.
              </p>
              
              {/* IMAGEN DEL SERVICIO - CAMBIAR POR TU IMAGEN */}
              <div style={{ marginTop: '32px', marginBottom: '32px' }}>
                <img 
                  src="https://via.placeholder.com/600x300?text=Servicio+1" 
                  className="img-fluid rounded" 
                  alt="Servicio 1"
                  style={{ width: '100%', height: 'auto' }}
                />
                <small style={{ color: 'var(--gray-500)', display: 'block', marginTop: '8px' }}>
                  {/* CAMBIAR ESTA IMAGEN: reemplaza /path-to-servicio1-image.jpg con tu imagen */}
                </small>
              </div>
              
              <button className="btn btn-primary btn-lg" style={{ marginTop: '24px' }}>
                Solicitar Presupuesto
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
