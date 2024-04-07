'use client';
import React from 'react'

function AddItemToCart() {
    console.log("Elemento aggiunto");
}

const AddToCart = () => {
  return (
    <>
      <button className='btn btn-primary' onClick={AddItemToCart}>AddToCart</button>
    </>
  )
}

export default AddToCart