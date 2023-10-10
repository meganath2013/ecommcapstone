import { createContext,useContext,useEffect,useReducer,useState } from "react";

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

const decrementCartItem =(cartItems,productToRemove) =>
{
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

const CART_ITEMS={
    SET_CART_ITEMS:'SET_CART_ITEMS',
    SET_CART_OPEN:'SET_CARD_OPEN'
};

const INITIAL_STATE ={
    cartItems:[],
    cartCount:0,
    cartTotal:0,
    isCartOpen:false,
};

const cart_reducer=(state,action)=>{
    const {type,payload}=action;
    //const { newcartItems, newcartCount, newcartTotal} =payload

    switch(type)
    {
        case CART_ITEMS.SET_CART_ITEMS:
            return {
                ...state,
                ...payload,
            }
        case CART_ITEMS.SET_CART_OPEN:
            return{
                ...state,
                isCartOpen:payload
            }
        default:
            throw new Error (`Unhandled type ${type} exception occured in CartReducer`);
    }

}



export const CartProvider = ({children}) =>{
    
 const [{cartItems,cartCount,cartTotal,isCartOpen},dispatch]=useReducer(cart_reducer,INITIAL_STATE);

 const updateCartItems = (cartItems) => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    const payload = {
      cartItems,
      cartCount: newCartCount,
      cartTotal: newCartTotal,
    };

    dispatch({type:CART_ITEMS.SET_CART_ITEMS, payload});
  };

   const addItemToCart=(product)=>{
     return updateCartItems(addCartItem(cartItems,product));
   }
   const RemoveItemToCart=(product)=>{
    return updateCartItems(decrementCartItem(cartItems,product));
   }

   const clearItemFromCart=(product)=>{
    return updateCartItems(clearItem(cartItems,product));
   }
    
   const setCartOpen=(bool)=>{
        dispatch({type:CART_ITEMS.SET_CART_OPEN,payload:bool});
   }

    const value={isCartOpen,cartTotal,setCartOpen,cartItems,addItemToCart,cartCount,RemoveItemToCart,clearItemFromCart};
    return (<CartContext.Provider value={value}>{children}</CartContext.Provider>)
}