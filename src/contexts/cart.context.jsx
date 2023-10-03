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

const clearItem=(cartItems,productToClear) =>{
    return cartItems.filter(item=>item.id!==productToClear.id)

}

export const CartContext=createContext({
    isCartOpen:false,
    setCartOpen:()=>{},
    cartItems:[],
    addItemToCart:()=>{},
    cartCount:0,
    RemoveItemToCart:()=>{},
    clearItemFromCart:()=>{},
    cartTotal:0,
});

export const CartProvider = ({children}) =>{
    const [isCartOpen,setCartOpen]=useState(false);
    
    const [cartItems, setCartItems]=useState([])

    const [cartCount,setCartCount]=useState(0);

    const [cartTotal,setCartTotal]=useState(0);

    useEffect(()=>{
        const newCount=cartItems.reduce((total,cartItem)=>cartItem.quantity+total,0);
        setCartCount(newCount);
    },[cartItems])

    useEffect(() => {
        const newCartTotal = cartItems.reduce(
          (total, cartItem) => total + cartItem.quantity * cartItem.price,
          0
        );
        setCartTotal(newCartTotal);
      }, [cartItems]);

   const addItemToCart=(product)=>{
    
    return setCartItems(addCartItem(cartItems,product))
   }
   const RemoveItemToCart=(product)=>{
    
    return setCartItems(decrementCartItem(cartItems,product))
   }

   const clearItemFromCart=(product)=>{
    
    return setCartItems(clearItem(cartItems,product))
   }
    

    const value={isCartOpen,cartTotal,setCartOpen,cartItems,addItemToCart,cartCount,RemoveItemToCart,clearItemFromCart};
    return (<CartContext.Provider value={value}>{children}</CartContext.Provider>)
}