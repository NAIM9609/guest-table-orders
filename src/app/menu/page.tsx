import React from 'react'
import MenuListItem from '../components/MenuListItem'
import NavBar from './../components/NavBar';
import MenuTab from './../components/MenuTab';
import ModalAddToCart from '../components/ModalAddToCart';

const Menu = async () => {

    // // Fetch menu items from backEnd
    // const res = await fetch("");
    // const menuList = await res.json();

  return (
    <>
      <div className='container mx-auto px-4 size-full content-center'>
        <div className='container flex flex-col justify-center'>
          <MenuTab />
        </div>
      </div>
    </>
  )
}

export default Menu