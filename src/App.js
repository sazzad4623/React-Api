import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Posts from "./components/Posts";
import Main from "./components/Main";
import Post from "./components/Post";
import About from "./components/About";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Main}></Route>
            <Route path="/posts" component={Posts}></Route>
            <Route path="/post/:id" exact component={Post}></Route>
            <Route path="/about" component={About}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
