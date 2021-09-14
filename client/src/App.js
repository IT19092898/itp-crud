import React,{ Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import Home from './components/Home';
import PostDetails from './components/PostDetails';
import Reason from './components/Reason';
import MainHome from './components/MainHome';

export default class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
      
      <div className="containerApp">
        <Route path="/home" component={MainHome}></Route>
        <Route path="/" exact component={Home}></Route>
        <Route path="/add" component={CreatePost}></Route>
        <Route path="/edit/:id" component={EditPost}></Route>
        <Route path="/post/:id" component={PostDetails}></Route>
        <Route path="/reason" component={Reason}></Route>
      </div>
      
      </BrowserRouter>
    )
  }
}