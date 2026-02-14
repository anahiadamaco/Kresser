import { useState } from 'react';

export default function Presupuesto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    descripcion: '',
    presupuesto: ''
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
    console.log('Presupuesto solicitado:', formData);
    setEnviado(true);
    setFormData({ nombre: '', email: '', empresa: '', descripcion: '', presupuesto: '' });
    setTimeout(() => setEnviado(false), 3000);
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

                <div className="form-group">
                  <label htmlFor="presupuesto" className="form-label">Rango de Presupuesto Estimado</label>
                  <select
                    className="form-select"
                    id="presupuesto"
                    name="presupuesto"
                    value={formData.presupuesto}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecciona un rango...</option>
                    <option value="bajo">$1,000,000 - $5,000,000 CLP</option>
                    <option value="medio">$5,000,000 - $15,000,000 CLP</option>
                    <option value="alto">$15,000,000 - $50,000,000 CLP</option>
                    <option value="premium">Más de $50,000,000 CLP</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                  Solicitar Presupuesto
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
