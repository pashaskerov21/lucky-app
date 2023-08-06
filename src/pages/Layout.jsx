import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Layout({ children }) {
  window.addEventListener('scroll', () => {
    if(window.scrollY > 300){
      document.querySelector('.page-scroll-button').classList.remove('d-none');
    }else{
      document.querySelector('.page-scroll-button').classList.add('d-none');
    }
  })
  return (
    <>
      <button className='page-scroll-button d-none' onClick={() => window.scrollTo(0,0)}><i className="fa-solid fa-chevron-up"></i></button>
      <Header />
      <main>
        {children}
      </main>
      <ToastContainer position="bottom-right" theme="colored" autoClose={3000} />
      <Footer />
    </>
  )
}

export default Layout
