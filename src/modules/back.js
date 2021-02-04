import React, { Component } from 'react';
import '../css/config.css';

class Back extends Component {
  render() {
    return (
      <a href="/" className="btn position-absolute top-0 start-0 px-1" style={{color: "#E4E4E4"}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="my-auto bi bi-arrow-return-left" viewBox="0 0 16 16">
          <path d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
        </svg>
      </a>
    )
  }
}

export default Back;