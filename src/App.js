import { Routes,Route } from "react-router-dom";
import Home from "./Routes/home/home.component";
import Navigation from "./Routes/navigation/navigation.component";
import Authentication from "./components/Authentication/authentication.component";
import Shop from "./Routes/shop/shop.component";
import Checkout from "./Routes/checkout/checkout.component";

import { onAuthStateChangedListener } from "./utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "./utils/firebase/firebase.utils";
import { useEffect } from "react";
import { setCurrentUser } from "./store/user/user-action";
import { useDispatch } from "react-redux";

const App=()=>{
  const dispatch=useDispatch();

  useEffect(()=>{
    const unsubscribe = onAuthStateChangedListener((user)=>{
        if (user) {
            createUserDocumentFromAuth(user);
        }
        dispatch(setCurrentUser(user));

    });
return unsubscribe;
},[dispatch])

  return(
    <Routes>
      <Route path='/' element={<Navigation />}>
      <Route index element={<Home/>}/>
        <Route path='shop/*' element={<Shop/>}/>
        
        <Route path='auth' element={<Authentication/>}/>
        <Route path='checkout' element={<Checkout/>}/>

      </Route>

    </Routes>
  )
}
export default App;