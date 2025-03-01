import React from 'react'
import './style.css'
import './App.css'
import ProductCard from './components/ProductCard'
import Navbar from './components/Navbar';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Footer from './components/Footer';

export default function App() {

  

  return (

    <>
    <Navbar />
    <Header />
    <HomePage />
    <ProductCard />
    <Footer />
    

    </>


  )
}