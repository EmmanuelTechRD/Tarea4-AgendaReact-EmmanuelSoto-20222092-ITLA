import React, { useState } from 'react';

const AddContactForm = ({ agregarContacto }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const nuevoContacto = {
      nombre,
      apellido,
      telefono,
    };

    agregarContacto(nuevoContacto);

    // Limpiar los campos después de agregar el contacto
    setNombre('');
    setApellido('');
    setTelefono('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">
          Nombre:
        </label>
        <input
          type="text"
          className="form-control"
          id="nombre"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="apellido" className="form-label">
          Apellido:
        </label>
        <input
          type="text"
          className="form-control"
          id="apellido"
          value={apellido}
          onChange={e => setApellido(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="telefono" className="form-label">
          Teléfono:
        </label>
        <input
          type="text"
          className="form-control"
          id="telefono"
          value={telefono}
          onChange={e => setTelefono(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        ¡Agregar contacto!
      </button>
    </form>
  );
};

export default AddContactForm;