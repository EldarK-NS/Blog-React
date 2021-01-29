import React from 'react';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';

import './App.css';
import ContactModal from './components/contactModal/ContactModal';
import SocialModal from './components/socialModal/SocialModal';
import Post from './components/post/Post';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import About from './components/About/About';
import Advertise from './components/advertise/Advertise';
import Works from './components/works/Works';
import Profile from './components/profile/Profile';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebar: false,
      contactModal: false
    }
  }

  OpenSidebar = () => {
    this.setState({
      sidebar: !this.state.sidebar,

    })
  }
  ContactModal = () => {
    this.setState({
      contactModal: !this.state.contactModal
    })
  }

  render() {
    return (
      <div className={this.state.sidebar ? 'App show-sidebar' : 'App'}>
        <div className="page" id="page">
          <Router>
            <Header OpenSidebar={this.OpenSidebar} />
            <Sidebar ContactModal={this.ContactModal} />
            <main className="main">
              <div className="container">
                <Switch>
                  <Route exact path="/" component={Main} />
                  <Route exact path="/post" component={Post} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/advertise" component={Advertise} />
                  <Route exact path="/works" component={Works} />
                  <Route exact path="/profile" component={Profile} />
                </Switch>
              </div>
            </main>
          </Router>
        </div>
        <ContactModal open={this.state.contactModal} onModalClose={this.ContactModal} />

        <SocialModal />

      </div>
    );
  }

}

export default App;
