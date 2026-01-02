import { useState } from 'react';

export default function Presupuesto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    descripcion: '',
    presupuesto: ''
  });

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
    // Aquí puedes agregar la lógica para procesar el presupuesto
    alert('¡Tu solicitud de presupuesto ha sido recibida! Nos contactaremos pronto.');
    setFormData({ nombre: '', email: '', empresa: '', descripcion: '', presupuesto: '' });
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h1 className="mb-4">Solicitar Presupuesto</h1>
          <p className="lead mb-4">Completa el formulario y te enviaremos un presupuesto personalizado.</p>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="empresa" className="form-label">Empresa</label>
              <input
                type="text"
                className="form-control"
                id="empresa"
                name="empresa"
                value={formData.empresa}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="descripcion" className="form-label">Descripción del Proyecto</label>
              <textarea
                className="form-control"
                id="descripcion"
                name="descripcion"
                rows="5"
                value={formData.descripcion}
                onChange={handleChange}
                placeholder="Cuéntanos sobre tu proyecto..."
                required
              ></textarea>
            </div>

            <div className="mb-3">
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
                <option value="bajo">$1,000 - $5,000</option>
                <option value="medio">$5,000 - $15,000</option>
                <option value="alto">$15,000 - $50,000</option>
                <option value="premium">$50,000+</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary btn-lg">Solicitar Presupuesto</button>
          </form>
        </div>
      </div>
    </div>
  );
}
