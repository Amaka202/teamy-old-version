/* eslint-disable react/jsx-filename-extension */
import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
import { Route, Switch,Redirect } from "react-router-dom";
import Login from './Components/login/Login';
import Signup from './Components/signup/Signup';
import User from './Components/user/User'
import Users from './Components/users/Users'
import Posts from './Components/posts/postsJSFiles/Posts'
import Home from './Components/home/Home';
import NotFound from './Components/NotFound';
import { ProtectedRoute } from './Components/ProtectedRoute'
import WriteArticle from './Components/posts/postsJSFiles/WriteArticle';
// import CommentPost from './Components/posts/CommentPost';
import Post from './Components/posts/postsJSFiles/Post';
import LogOut from './Components/login/LogOut';

function App() {
  return (
    <div className="App">
        <Switch>
          {/* <Redirect from='/teamy-frontend' to="/" /> */}
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={Login} />
          <Route path='/logout' exact component={LogOut} />
          <ProtectedRoute path='/posts' exact component={Posts} />
          <Route path='/signup' exact component={Signup} />
          <ProtectedRoute path='/users' exact component={Users} />
          <ProtectedRoute path='/user' exact component={User} />
          <ProtectedRoute path='/write-post' exact component={WriteArticle} />
          <ProtectedRoute path="/posts/:id" component={Post} />
          <Route component={NotFound}/>
        </Switch>
    </div>
  );
}

export default App;
