import { Routes,Route } from "react-router-dom";
import Home from "./Routes/home/home.component";
import Navigation from "./Routes/navigation/navigation.component";
import Authentication from "./components/Authentication/authentication.component";
import Shop from "./Routes/shop/shop.component";
import Checkout from "./Routes/checkout/checkout.component";
const App=()=>{
  return(
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route path='shop' element={<Shop/>}/>
        <Route index element={<Home/>}/>
        <Route path='auth' element={<Authentication/>}/>
        <Route path='checkout' element={<Checkout/>}/>

      </Route>

    </Routes>
  )
}
export default App;