import React from 'react';

const ContactList = ({ contactList }) => {
  return (
    <>
      {contactList.map(contacto => (
        <tr key={contacto.id}>
          <td>{contacto.nombre}</td>
          <td>{contacto.apellido}</td>
          <td>{contacto.telefono}</td>
        </tr>
      ))}
    </>
  );
};

export default ContactList;