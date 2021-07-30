import React from 'react';
import cocaCola from '../images/gaseosa-1.PNG';
import logoCoca from '../images/log-1.PNG';

export default function Product() {
  return (
    <div className="container">
      <div className="cuadrado">
        <p>Para los consumidores de todo el mundo. El sabor universal de Coca-Cola es frescura para el cuerpo, mente y espíritu.</p>
        <img src={cocaCola} alt="" />
      </div>
      <img src={logoCoca} alt="" />
      <button>Atencion al cliente</button>

    </div>
  )
}
