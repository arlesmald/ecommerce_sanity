import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';

//NextJS uses a layout that works similar if we were working on the main page of a basic html page with its Head and body tags 

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Armald Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout