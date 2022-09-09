import NavBar from "./SharedComponents/NavBar";
import Home from './Pages/Home';
import ShoppingLists from './Pages/ShoppingLists';
import ShoppingList from './Pages/ShoppingList';
import About from './Pages/About';
import { Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route index element={<Home />} />
            <Route path='about' element={<About />}/>
            <Route path="shoppinglists" element={<ShoppingLists/>}>
              <Route path=":listId" element={<ShoppingList />} />         
        </Route>
      </Routes>      
    </div>
  );
}

export default App;
