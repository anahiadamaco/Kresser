import { useState } from 'react';

export default function Presupuesto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    descripcion: ''
  });

  const [enviado, setEnviado] = useState(false);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCargando(true);
    setError('');

    try {
      const response = await fetch('http://localhost:3001/api/presupuesto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setEnviado(true);
        setFormData({ nombre: '', email: '', empresa: '', descripcion: '' });
        setTimeout(() => setEnviado(false), 3000);
      } else {
        setError(data.error || 'Error al enviar la solicitud');
      }
    } catch (err) {
      setError('Error de conexión. Asegúrate de que el servidor está corriendo en localhost:5000');
    } finally {
      setCargando(false);
    }
  };

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
          <h1 style={{ color: 'white', marginBottom: '12px' }}>Solicitar Presupuesto</h1>
          <p className="lead" style={{ color: 'rgba(255, 255, 255, 0.95)', margin: 0 }}>
            Cuéntanos sobre tu proyecto y te enviaremos un presupuesto personalizado
          </p>
        </div>
      </section>

      {/* FORMULARIO */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
                
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
                    ¡Tu solicitud ha sido recibida! Nos contactaremos pronto con una propuesta personalizada.
                  </div>
                )}

                {error && (
                  <div 
                    style={{
                      backgroundColor: '#f8d7da',
                      color: '#721c24',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      marginBottom: '24px',
                      border: '1px solid #f5c6cb'
                    }}
                  >
                    {error}
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
                  <label htmlFor="empresa" className="form-label">Empresa (opcional)</label>
                  <input
                    type="text"
                    className="form-control"
                    id="empresa"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="descripcion" className="form-label">Descripción del Proyecto</label>
                  <textarea
                    className="form-control"
                    id="descripcion"
                    name="descripcion"
                    rows="5"
                    value={formData.descripcion}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tu proyecto. Incluye detalles como ubicación, tamaño, timeline, etc."
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary btn-lg" 
                  style={{ width: '100%' }}
                  disabled={cargando}
                >
                  {cargando ? 'Enviando...' : 'Solicitar Presupuesto'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
