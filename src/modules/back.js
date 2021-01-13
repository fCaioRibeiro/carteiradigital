import React, { Component } from 'react';
import '../css/config.css';

class Back extends Component {
  render() {
    return (
      <a href="/" className="btn position-absolute top-0 start-0 text-danger px-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="my-auto bi bi-arrow-return-left" viewBox="0 0 16 16">
          <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z"/>
        </svg>
      </a>
    )
  }
}

export default Back;