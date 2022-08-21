import Home from './Pages/Home';
import Footer from './SharedComponents/Footer';
import NavBar from './SharedComponents/NavBar';
import TopBanner from './SharedComponents/TopBanner';
import './Styles/App.scss';

function App() {
  return (
    <div className="App">
      <TopBanner/>
      <NavBar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
