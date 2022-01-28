import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


export default function Layout(props) {
  return (
    <div>
      <Header />
      <div className="layout-children">
      {props.children}
      </div>
      <Footer />
    </div>
  )
}