import { Routes,Route } from "react-router-dom";
import Home from "./Routes/home.component";
import Navigation from "./Routes/navigation.component";
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

      </Route>

    </Routes>
  )
}
export default App;