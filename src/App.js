import React, { Component } from 'react';
import AppHeader from './components/header/header';
import AppFooter from './components/footer/footer';

class AppHomeComponent extends Component {
  render() {
    return (
      <div className="app-layout">
          <AppHeader/>
      </div>
    );
  }
}

export default AppHomeComponent;
