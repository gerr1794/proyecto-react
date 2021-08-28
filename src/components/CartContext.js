import React, {useContext} from 'react'
import ItemDetail from "./ItemDetail"

const CustomContext = React.createContext()

export default function CartContext() {
    return(
        <>
        <CustomContext.Provider value{{ item: {} , quantity}}>
            <TestContext />
            <ItemDetail />
        </CustomContext.Provider>
        </>
    )
}

const TestContext = () => {
    const value = useContext(CustomContext)
    console.log(value)
    return(
        <div>{value.value}</div>
    )
}