import React from 'react';
import imagen from './carrito.png'

const CartWidget = (props) => {
    return (
        <a className="carrito-compras" href='#'>Mis compras &nbsp;
        <img src={imagen} width="35" height="35" />
        </a>
    );
}

export default CartWidget;