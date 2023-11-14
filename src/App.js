import React, { useState, useEffect } from 'react';
import './App.css'; // Crear un archivo App.css para tus estilos
import AddContactForm from './AddContactForm';
import ContactList from './ContactList';
import miImagen from './resources/agenda.png';

const App = () => {
  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    obtenerListaContactos();
  }, []);

  const obtenerListaContactos = () => {
    fetch('https://www.raydelto.org/agenda.php')
      .then(response => response.json())
      .then(data => setContactList(data))
      .catch(error => console.log(error));
  };

  const agregarContacto = nuevoContacto => {
    fetch('https://www.raydelto.org/agenda.php', {
      method: 'POST',
      body: JSON.stringify(nuevoContacto),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        alert('Tu contacto ha sido guardado exitosamente.');
        obtenerListaContactos();
      })
      .catch(error =>
        console.error('Ha sucedido un error, no hemos podido guardar tu contacto:', error)
      );
  };

  return (
    <div className="App container">
      <img src={miImagen} alt="Logo" className="logo" />
      <div className="shadow-lg p-3 mb-5 bg-body rounded">
        <h2>Agregar nuevo contacto:</h2>
        <AddContactForm agregarContacto={agregarContacto} />
      </div>

      <div className="shadow-lg p-3 mb-5 bg-body rounded">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Teléfono</th>
            </tr>
          </thead>
          <tbody>
            <ContactList contactList={contactList} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;