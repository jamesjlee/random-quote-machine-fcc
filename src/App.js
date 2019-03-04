import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import QuoteBox from "./components/QuoteBox";
import { randQuoteFetch } from "./utils/QuoteFetch";

class App extends Component {
  state = {
    text: "",
    author: ""
  };

  handleNewQuoteClick = async () => {
    const quote = await randQuoteFetch();
    this.setState({
      text: quote[0].content,
      author: quote[0].title
    });
  };

  handleTweetClick = () => {};

  async componentDidMount() {
    const quote = await randQuoteFetch();
    this.setState({
      text: quote[0].content,
      author: quote[0].title
    });
  }
  render() {
    return (
      <QuoteBox
        text={this.state.text}
        author={this.state.author}
        handleNewQuoteClick={this.handleNewQuoteClick}
        handleTweetClick={this.handleTweetClick}
      />
    );
  }
}

export default App;
