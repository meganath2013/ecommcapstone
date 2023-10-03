import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg'
import { useState,useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './cart-icon.styles.scss';

const CartIcon = ()=>{

    const {isCartOpen,setCartOpen,cartCount}=useContext(CartContext);
    const toggleCartOpen=()=> setCartOpen(!isCartOpen);
    return(
        <div className='cart-icon-container' onClick={toggleCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{cartCount}</span>

        </div>
    )
}

export default CartIcon;