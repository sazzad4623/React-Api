import React, { Component } from "react";
//import About from "./About";
import { Link } from "react-router-dom";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Main from "./Main";
// import Post from "./Post";

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
      //isLoaded: false
    };
  }
  componentDidMount() {
    // fetch(`http://problems.gridstacks.com/wp-json/wp/v2/posts`)
    //   .then(res => res.json())
    //   .then(json => this.setState({ data: json }));
    fetch(`http://problems.gridstacks.com/wp-json/wp/v2/posts?per_page=25`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          items: json
          // isLoaded: true
        });
        // console.log(items);
      });
    // console.log(items);
  }
  render() {
    return (
      <div>
        {/* <Switch>
            <Route path="/" exact component={Main}></Route>
            <Route path="/posts" component={Posts}></Route>
            <Route path="/post/:id" component={Post}></Route>
          </Switch> */}
        <ul style={{ listStyleType: "none" }}>
          {this.state.items.map(el => (
            <li key={el.id}>
              {el.id}: <a href={"/post/" + el.id}>{el.title.rendered}</a>
            </li>
          ))}
        </ul>
        <ul style={{ listStyleType: "none" }}>
          <Link to="/About">
            <li>
              <h1 style={{ color: "red" }}>About</h1>
            </li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default Posts;
