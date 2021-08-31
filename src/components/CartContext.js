import React, { useState } from 'react'
​
export const CartContext = React.createContext()
​
export default function CartProvider({ children, defaultCart = [] }) {
​
    const [cart, setCart] = useState(defaultCart)
​
    const addItem = ({ producto, cantidad }) => {
        setCart([...cart, {
            producto,
            cantidad
        }])
    }
    
    const clear = () => {
        setCart([])
    }
​
    return (
        <>
            <CartContext.Provider value={{ cart, addItem }}>
                {children}
            </CartContext.Provider>
        </>
    )
}