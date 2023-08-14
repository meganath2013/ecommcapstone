import { Routes,Route } from "react-router-dom";
import Home from "./Routes/home/home.component";
import Navigation from "./Routes/navigation/navigation.component";
import SignIn from "./Routes/signin/signin.component";
const Shop=()=>{

  return(
  <div>
    Shop component here
  </div>
  )
}

const App=()=>{
  return(
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route path='shop' element={<Shop/>}/>
        <Route index element={<Home/>}/>
        <Route path='sign-in' element={<SignIn/>}/>

      </Route>

    </Routes>
  )
}
export default App;