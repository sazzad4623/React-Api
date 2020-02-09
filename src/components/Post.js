import React, { Component } from "react";
//import ReactHtmlParser from "html-react-parser";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";

export default class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: {},
      //ggg: {},
      title: "",
      content: ""
      //isLoaded: false
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);
    var link = "http://problems.gridstacks.com/wp-json/wp/v2/posts/" + id;
    console.log(link);
    fetch(link)
      .then(res => res.json())
      .then(json => {
        this.setState({
          item: {
            title: json.title.rendered,
            content: json.content.rendered
          }
        });
        // console.log("Title", this.state.item.title.rendered);
        // console.log("Item", this.state.item);
        console.log("Content", this.state.item.content);
        // this.setState({
        //   //ggg: JSON.stringify(this.state.item.content.rendered),
        //   //titles: JSON.stringify(this.state.item.title.rendered)
        // });
        //console.log("ggg", this.state.ggg);
        // console.log("titles", this.state.titles);
      });
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.item.title}
          <br />
        </h1>
        {/* {JSON.stringify(this.state.item.title)} */}
        {ReactHtmlParser(this.state.item.content)}
        {/* {ReactHtmlParser(this.state.ggg)} */}
        {/* {{ __html: JSON.stringify(this.state.ggg) }} */}
      </div>
    );
  }
}
