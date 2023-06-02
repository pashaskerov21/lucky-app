import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Layout({children}) {
  return (
    <>
    <Header/>
    <main>
        {children}
    </main>
    <ToastContainer position="bottom-right" autoClose={3000}/>
    <Footer/>
    </>
  )
}

export default Layout
