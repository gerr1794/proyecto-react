import React, { useContext, useState } from 'react';

const cartContext = React.createContext ()

const CarritoFuncion = ({children}) => {
    const [carrito, setCarrito] = useState ([])
    const [unidades, setUnidades] = useState (0)
    const [total, setTotal] = useState (0)


    const onAdd = (producto, cantidad) =>{
        const existencias = carrito.find(item=>item.id===producto.id)
        if(!existencias ){
            setCarrito([...carrito, {id:producto.id, nombre:producto.nombre, precio:producto.precio, cantidad:cantidad, subTotal:(producto.precio*cantidad)}])
        setUnidades(unidades+1)
        setTotal(total+(producto.precio*cantidad))
        } else{
            const carritoAux = carrito.map((item)=>{
                if(item.id===producto.id){
                    item.cantidad+=cantidad
                    item.subTotal+=(producto.precio*cantidad)
                }
                return item
            })
            setCarrito(carritoAux)
            setTotal(producto.precio*cantidad)
        }
        }
        const clear= () =>{
            setCarrito([])
            setTotal(0)
    }
    return <cartContext.Provider value={{carrito, unidades, onAdd, total, clear}}>

        {children}
    </cartContext.Provider>
}

export {CarritoFuncion, cartContext};
