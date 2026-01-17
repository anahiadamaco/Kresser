import { useState } from 'react';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    setEnviado(true);
    setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
    setTimeout(() => setEnviado(false), 3000);
  };

  return (
    <div>
      {/* HEADER */}
      <section 
        style={{
          backgroundColor: 'var(--primary)',
          color: 'white',
          padding: '60px 0'
        }}
      >
        <div className="container">
          <h1 style={{ color: 'white', marginBottom: '12px' }}>Contacto</h1>
          <p className="lead" style={{ color: 'rgba(255, 255, 255, 0.95)', margin: 0 }}>
            Nos encantaría escucharte. Envíanos tu mensaje
          </p>
        </div>
      </section>

      {/* FORMULARIO Y INFO DE CONTACTO */}
      <section className="section">
        <div className="container">
          <div className="row">
            {/* INFORMACIÓN DE CONTACTO */}
            <div className="col-md-6" style={{ marginBottom: '32px' }}>
              <h3 style={{ marginBottom: '24px' }}>Información de Contacto</h3>
              
              <div style={{ marginBottom: '24px' }}>
                <h5 style={{ color: 'var(--accent)', marginBottom: '8px' }}>📞 Teléfono</h5>
                <p style={{ marginBottom: 0, color: 'var(--gray-700)' }}>
                  <a href="tel:+56912345678" style={{ color: 'var(--text)', textDecoration: 'none' }}>+56 9 1234 5678</a>
                </p>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <h5 style={{ color: 'var(--accent)', marginBottom: '8px' }}>✉️ Email</h5>
                <p style={{ marginBottom: 0, color: 'var(--gray-700)' }}>
                  <a href="mailto:contacto@kresser.cl" style={{ color: 'var(--text)', textDecoration: 'none' }}>contacto@kresser.cl</a>
                </p>
              </div>

              <div>
                <h5 style={{ color: 'var(--accent)', marginBottom: '8px' }}>📍 Dirección</h5>
                <p style={{ marginBottom: 0, color: 'var(--gray-700)' }}>
                  [Tu dirección aquí]<br />
                  [Ciudad], Chile
                </p>
              </div>
            </div>

            {/* FORMULARIO */}
            <div className="col-md-6">
              <form onSubmit={handleSubmit} style={{ maxWidth: '500px' }}>
                
                {enviado && (
                  <div 
                    style={{
                      backgroundColor: '#d4edda',
                      color: '#155724',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      marginBottom: '24px',
                      border: '1px solid #c3e6cb'
                    }}
                  >
                    ¡Mensaje enviado! Nos pondremos en contacto pronto.
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="nombre" className="form-label">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="telefono" className="form-label">Teléfono (opcional)</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="+56 9 ..."
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="mensaje" className="form-label">Mensaje</label>
                  <textarea
                    className="form-control"
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                    rows="5"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
