import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Routes} from 'react-router-dom';
import './App.css'
import Right from './right/han'
import EventBinding from './EventBinding/index'
import Hooksr from './Hooksr/index3'
import Object from './component/obj';
import Props from './component/props';
import ClassObj from './component/classObj';
import PageCopy from './component/pageCopy';
import About from './component/AboutUs/about';
import Cart from './component/Cart/Cart';
import From from './component/Page.jsx/From';
import UseState from './component/HookUsestate/UseState';
import Faq from './component/FAQ/Faq';
import FaqSection from './component/FaqSection/FaqSection';

function App() {
  
  const title = "my name is kongkon jowarder";

  return (
    
    
   <div>
     {/* <BrowserRouter>
    <Routes>
      <Route path="/obj" element={<Obj />} />
    </Routes>
  </BrowserRouter> */}
    <ClassObj />
    <Object />
    <Props name="sujon" from="Dhaka" />
    <Props name="Roy" from="Gazipr" />
    <Props name="Shuvro" from="Dhaka" />
    <PageCopy />
    <About />
    <Cart/>
    <From />
    <UseState name={title}/>
    <Faq/> 
    <FaqSection/> 
   </div>
      //  <div>
      //   <EventBinding  />
      //   <Right />
      //   <EventBinding />
      //   <Hooksr /> 
      //  </div>
      
      
    
  );
}

export default App;
