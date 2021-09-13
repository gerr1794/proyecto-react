import React, {useContext} from 'react';
import { cartContext } from 'Cartcontext';

const Cart = () => {
    const {cart, total, clear} = useContext(cartContext)

    return(
        <>
        {cart.length>0?cart.map((item)=><><div>nombre:{item.nombre}, precio:{item.precio}, subTotal:{item.subTotal}, cantidad:{item.cantidad}</div><div>{total}</div></>):<div>No hay items en el carrito</div>}
        <button onClick={()=>clear()}>Limpiar carrito</button>
        </>
    )
}

export default Cart;