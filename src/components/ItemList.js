import React from 'react';

const ejemploPromise = new Promise((resolve, reject) => {

    setTimeout((Item) => {
      resolve(Item);
    }, 3000);
  });
  //aca la llamas
  ejemploPromise.then((Item) => {
   console.log(ItemList);
  });