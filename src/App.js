import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Productpage from './components/Product-page/Product-page';

function App() {
 

  return (
    <>
    <div className="cover"></div>
    <Navbar/>
    <Productpage/>
    <Footer/>
    </>
  );
}

export default App;
