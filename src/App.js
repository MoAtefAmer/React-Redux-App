import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Posts from '../src/components/Posts'
import PostForm from './components/PostForm'
import {Provider} from 'react-redux'
import store from './store'


class App extends Component { 
  
  render(){
  return (

    <Provider store={store}>
    <div>
      <PostForm/>
      <hr/>
      <Posts/>
    </div>
    </Provider>
      );
}
}


export default App;
