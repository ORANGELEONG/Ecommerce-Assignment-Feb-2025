// import React from 'react'

import React, { useEffect } from 'react';
import './style.css'
import './App.css'
import ProductCard from './components/ProductCard'
import Navbar from './components/Navbar';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import { Route, Switch } from 'wouter';
import ProductsPage from './components/ProductsPage';
import RegisterPage from './components/RegisterPage';
import { useFlashMessage } from './components/FlashMessageStore';



export default function App() {

  const { getMessage, clearMessage  } = useFlashMessage();
  const flashMessage = getMessage();

  useEffect(() => {

    const timer = setTimeout(() => {
      clearMessage();
    }
    , 3000);
    return () => {
      clearTimeout(timer);
    };
  }
  , [flashMessage]);

  return (

    <>

{/* <Navbar /> */}
      {flashMessage.message && (
        <div className={`alert alert-${flashMessage.type} text-center flash-alert`} role="alert">
          {flashMessage.message}
        </div>
      )}

    

      {/* Self Documenting code */}
      <Navbar />
      <Header />
      {/* <HomePage /> */}
      {/* <ProductCard /> */}
      <Switch>

        <Route path="/" component={HomePage} />
        <Route path="/products" component={ProductsPage} />
        <Route path="/register" component={RegisterPage} />

      </Switch>
      <Footer />


    </>


  )
}