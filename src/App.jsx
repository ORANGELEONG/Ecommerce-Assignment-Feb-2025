import React from 'react'
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



export default function App() {



  return (

    <>

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