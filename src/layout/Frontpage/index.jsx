import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './styleGlobal.css' ;
import './glypicon.css';

const Layout = ({ children , navmenu , footer}) => {

 
  return (
   <div className='frontpage'>
    {!navmenu ? "" : <Header/> }
        <main >
          { children }
        </main>
        {!footer ? "" : <Footer/> } 
   </div>
  );
};



export default Layout;