import Button from "../button/button.component";
import './cart-drop-down.styles.scss'
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";

const CartDropDown =()=>{

    const {cartItems}=useContext(CartContext);

return(
    <div className='cart-dropdown-container'>
        <div className="cart-items">
            {cartItems.length?
            (cartItems.map((item) => (<CartItem key={item.id} cartItem={item}/>)))
            :(<span className='empty-message'>Your cart is empty</span>)}
        </div>
        <div>
            <Button>Go to Checkout</Button>
        </div>

    </div>)

}

export default CartDropDown;
