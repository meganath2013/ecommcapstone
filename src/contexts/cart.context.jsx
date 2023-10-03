import { createContext,useContext,useState } from "react";

const addCartItem = (cartItems,productToAdd)=>
{
    const existingItem=cartItems.find((cartItem)=>cartItem.id===productToAdd.id);

if (existingItem)
{
    return(cartItems.map((cartItem)=>
        cartItem.id===productToAdd.id? {...cartItem, quantity: cartItem.quantity+1}:cartItem))
    
}

return [...cartItems,{ ...productToAdd,quantity:1}];
}

export const CartContext=createContext({
    isCartOpen:false,
    setCartOpen:()=>{},
    cartItems:[],
    addItemToCart:()=>{},
});

export const CartProvider = ({children}) =>{
    const [isCartOpen,setCartOpen]=useState(false);
    
    const [cartItems, setCartItems]=useState([])

   const addItemToCart=(product)=>{
    
    return setCartItems(addCartItem(cartItems,product))
   }
    

    const value={isCartOpen,setCartOpen,cartItems,addItemToCart};
    return (<CartContext.Provider value={value}>{children}</CartContext.Provider>)
}