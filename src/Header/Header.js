import React from 'react';
import './Header.css';

import Nav from "../Nav/Nav";

class Header extends React.Component{

  render() {
      return (
          <header>
              <div className="main-header">
                  <div className="container-fluid">
                      <div className="row align-items-center">
                          <div className="col-2">
                              <div className="logo">
                                  <a href="/">
                                      <h1 className="site-title">Exchange</h1>
                                  </a>
                              </div>
                          </div>
                          <div className="col-8">
                              <Nav />
                          </div>
                          <div className="col-2">
                              <div className="sign-in">
                                  <i className="fa fa-user-o" aria-hidden="true"></i>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </header>
      )
  }
}

export default Header;
