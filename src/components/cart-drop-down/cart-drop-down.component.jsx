import Button from "../button/button.component";
import './cart-drop-down.styles.scss'
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";
import { Navigate, useNavigate } from "react-router-dom";

const CartDropDown =()=>{

    const {cartItems}=useContext(CartContext);
    const navigate=useNavigate();
    const gotoCheckout=()=>navigate('/Checkout');

return(
    <div className='cart-dropdown-container'>
        <div className="cart-items">
            {cartItems.length?
            (cartItems.map((item) => (<CartItem key={item.id} cartItem={item}/>)))
            :(<span className='empty-message'>Your cart is empty</span>)}
        </div>
        <div>
            <Button onClick={gotoCheckout}>Go to Checkout</Button>
        </div>

    </div>)

}

export default CartDropDown;
