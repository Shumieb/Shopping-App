import NavBar from "./SharedComponents/NavBar";
import Home from './Pages/Home';
import ShoppingLists from './Pages/ShoppingLists';
import ShoppingList from './Pages/ShoppingList';
import About from './Pages/About';
import { Route, Routes} from "react-router-dom";
import Footer from "./SharedComponents/Footer";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />}/>
        <Route path="shoppinglists" element={<ShoppingLists/>}/>
        <Route path="shoppinglists/:listId" element={<ShoppingList />} />        
      </Routes>     
      <Footer /> 
    </div>
  );
}

export default App;
