import React, { useState } from 'react';

const Form = () => {
  const [nombre, setName] = useState("");
  const [correo, setCorreo] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  
  const input1Regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]{6,}$/;
  const input2Regex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    if (!input1Regex.test(nombre) || !input2Regex.test(correo)) {
      setError("Por favor verifique su información nuevamente");
      setTimeout(() => {
        setError("");
      }, 3000); 
      return;
    } else {
      console.log("Formulario enviado con éxito");
      setSuccessMessage(`Gracias ${nombre}, te contactaremos cuando antes vía mail`);
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000); 
    }

    setName("");
    setCorreo("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='formulario'>
        <label>Nombre completo:</label>
        <input type="text" value={nombre} onChange={(e) => setName(e.target.value)} />
        <label>Correo electrónico:</label>
        <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} />
        {error && <p style={{ color: "red" }}>{error}</p>}
        {successMessage && <h2>{successMessage}</h2>}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
