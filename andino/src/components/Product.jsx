import React from 'react';

export default function Product({texto,bebida,logo}) {
  return (
    <div className="product-container">
      <div className="cuadrado">
        <p>{texto}</p>
        <img className = "bebida" src={bebida} alt="" />
      </div>
      <img className = "logo-bebida" src={logo} alt="" />
      <button>ATENCION AL CLIENTE</button>
    </div>
  )
}

