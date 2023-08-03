import React from 'react'
import Link from 'next/link'
import {AiOutlineShopping} from 'react-icons/ai'

import Cart from './Cart'
import { useStateContext } from '@/context/stateContext'

const Navbar = () => {
    const {showCart, setShowCart,totalQuentity} = useStateContext()

  return (
    <div className='navbar-container'>
     <p className='logo'>
      <Link href="/"> Nice Store </Link>
     </p>
     <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
      <AiOutlineShopping/>
      <span className='cart-item-qty'>{totalQuentity}</span>
     </button>
     {showCart && <Cart />}
    </div>
  )
}

export default Navbar