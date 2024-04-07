import React from 'react'
import MenuListItem from '../components/MenuListItem'

const Menu = async () => {

    // // Fetch menu items from backEnd
    // const res = await fetch("");
    // const menuList = await res.json();

  return (
    <>
        <h1>Menu</h1>
        <MenuListItem />
    </>
  )
}

export default Menu