import React from 'react';
import ItemList from './ItemList';

const ItemListContainer = ({titulo}) => {
    return (
        <>
        <h1>{titulo}</h1>
        <ItemList />
        </>
    )
}
export default ItemListContainer;