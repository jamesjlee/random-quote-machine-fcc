import React from "react";
import { Container, Row, Col, Button, ButtonGroup } from "reactstrap";
import "../styles/QuoteBox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

class QuoteBox extends React.Component {
  unescapeHTML(html) {
    var div = document.createElement("div");
    div.innerHTML = html;
    return "innerText" in div ? div.innerText : div.textContent;
  }

  render() {
    const { text, author, handleNewQuoteClick, handleTweetClick } = this.props;
    const tweetUnescaped = this.unescapeHTML(text);

    return (
      <Container id="quote-box">
        <Row className="QuoteBoxRow">
          {text && author ? (
            <Col xs="auto" className="Quote">
              <div>
                <p id="text">{tweetUnescaped}</p>
                <p id="author">By: {author}</p>
              </div>
              <div>
                <ButtonGroup>
                  <Button
                    id="new-quote"
                    color="primary"
                    onClick={handleNewQuoteClick}
                  >
                    New Quote
                  </Button>
                  <Button id="tweet-quote-btn">
                    <a
                      href={`https://twitter.com/intent/tweet?text=${tweetUnescaped}By: ${author}`}
                      id="tweet-quote"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </Button>
                </ButtonGroup>
              </div>
            </Col>
          ) : (
            <Col xs="auto" className="Quote text-primary">
              <FontAwesomeIcon icon={faSpinner} size="lg" />
            </Col>
          )}
        </Row>
      </Container>
    );
  }
}

export default QuoteBox;
