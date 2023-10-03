import { createContext,useContext,useEffect,useState } from "react";

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

const decrementCartItem =(cartItems,productToRemove) =>{
    //const ItemtoMinus=cartItems.find((cartItem)=>cartItem.id===productToRemove.id);
    if (productToRemove.quantity===1)
{

    return(cartItems.filter(cartItem=> cartItem.id!==productToRemove.id))
    
}
return(cartItems.map((cartItem)=>
cartItem.id===productToRemove.id? {...cartItem, quantity: cartItem.quantity-1}:cartItem))


}
export const CartContext=createContext({
    isCartOpen:false,
    setCartOpen:()=>{},
    cartItems:[],
    addItemToCart:()=>{},
    cartCount:0,
    RemoveItemToCart:()=>{},
});

export const CartProvider = ({children}) =>{
    const [isCartOpen,setCartOpen]=useState(false);
    
    const [cartItems, setCartItems]=useState([])

    const [cartCount,setCartCount]=useState(0);

    useEffect(()=>{
        const newCount=cartItems.reduce((total,cartItem)=>cartItem.quantity+total,0);
        setCartCount(newCount);
    },[cartItems])

   const addItemToCart=(product)=>{
    
    return setCartItems(addCartItem(cartItems,product))
   }
   const RemoveItemToCart=(product)=>{
    
    return setCartItems(decrementCartItem(cartItems,product))
   }
    

    const value={isCartOpen,setCartOpen,cartItems,addItemToCart,cartCount,RemoveItemToCart};
    return (<CartContext.Provider value={value}>{children}</CartContext.Provider>)
}