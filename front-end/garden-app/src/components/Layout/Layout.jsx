import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


export default function Layout(props) {
  return (
    <div>
      <Header loggedIn={props.loggedIn} />
      <div className="layout-children">
      {props.children}
      </div>
      <Footer />
    </div>
  )
}
