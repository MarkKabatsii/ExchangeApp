import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Footer from "./Footer/Footer"
import Rate from "./Rate/Rate";
import About from "./About/About";
import Contacts from "./Contacts/Contacts";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component{

  render() {
    return (
        <div className="site">
            <Header />
            <main>
              <Router>
                  <Switch>
                      <Route exact path="/" component={Rate} />
                      <Route exact path="/about" component={About} />
                      <Route exact path="/exchange" component={Rate} />
                      <Route exact path="/contacts" component={Contacts} />
                  </Switch>
              </Router>
            </main>
            {/*<div className="container" id="cookie_info">*/}
            {/*    <div className="site-content">*/}
            {/*        <div className="well">На нашем сайте мы используем cookie для сбора информации технического характера.<br/>В*/}
            {/*            частности, для персонифицированной работы сайта мы обрабатываем IP-адрес региона вашего*/}
            {/*            местоположения.&nbsp;*/}
            {/*            <button className="btn">*/}
            {/*                Ok*/}
            {/*            </button>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <Footer />
        </div>
    );
  }
}

export default App;
