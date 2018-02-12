import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppHomeComponent from './App';
import LoginComponent from './components/authentication/login';
import BlogPostComponent from './components/blog/blog-posts'

class AppRoute extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                  <Switch>
                    <Route  path="/login" component={LoginComponent} />
                    <Route path="/" component={AppHomeComponent} />
                  </Switch>
                    <Route exact path="/blog" component={BlogPostComponent} />                
                </div>
            </BrowserRouter>
        );
    }
}
export default AppRoute;
