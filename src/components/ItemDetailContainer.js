import React from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({titulo}) => {
    return (
        <>
        <h1>{titulo}</h1>
        <ItemDetail />
        </>
    )
}
export default ItemDetailContainer;
