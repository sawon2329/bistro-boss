import './App.css'
import './Components/Style/global.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import OurMenu from './Components/OurMenu/OurMenu';
import Footer from './Components/Footer/Footer';
import Review from './Components/Review/Review';
import OurShop from './Components/OurShop/OurShop';
import MenuSection from './Components/OurShop/menuSection';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import CreateAnAccount from './Components/CreateAnAccount/CreateAnAccount';
import Account from './Components/Login/Account';
import { createContext, useContext, useState } from 'react';
import Cart from './Components/Cart/Cart';


export const userContext = createContext();




function App() {

  const [globalUser, setGlobalUser] = useState({})
  return (
    <userContext.Provider value={[globalUser,setGlobalUser]}>
      <Router>
        <ConditionalHeader />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/ourmenu' element={<OurMenu/>}/>
          <Route path='/review' element={<Review/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/ourshop' element={<OurShop/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={<Login/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/createanaccount' element={<CreateAnAccount/>}/>
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer></Footer>
      </Router>
      </userContext.Provider>
  );
}

function ConditionalHeader() {
  const location = useLocation();
  const locationCondition = location.pathname !== '/home' && location.pathname !== '/' && location.pathname !== '/ourmenu' && location.pathname !== '/ourshop' && location.pathname !== '/contact' && location.pathname !== '/login' ? <Header /> : null;
  return locationCondition;
}

export default App;
