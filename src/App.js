import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import NavBar from "./componentes/NavBar/NavBar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import LandingPage from './componentes/LandingPage/LandingPage.js'


function App() {
  return (
    <BrowserRouter>
      
        <NavBar />
           <Routes>   
           {/* <Route></Route> */}
           {/* <div className="container-app"> */}
           <Route path='/' element={<LandingPage />}   />
          <Route path='/items' element={<ItemListContainer />}   />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} / >  
          <Route path='/category/:id' element={<ItemListContainer />} / >  
            
         {/*  </div> */}
           
          
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;
