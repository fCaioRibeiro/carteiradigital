import React, { Component } from 'react';
import axios from 'axios';

class Header extends Component {
  constructor(){
    super()

      this.state = {
        account: {}
      }
  }

  // getAccount() {
  //   axios.get(``)
  //     .then(res => {
  //       const account = res.data;
  //       this.setState({ account });
  //     })
  // }

  render() {
    let user = this.state.user
    return (
      <div className="card text-center rounded-0 border-0" style={{backgroundColor: "#A0A0A0"}}>
        <div className="card-body">
          <h5 className="card-title">
            <div className="border border-2 rounded-circle mx-auto d-flex" style={{width: "100px", height: "100px", backgroundColor: "#7D7D7D"}}>
              <h1 className="text-center mx-auto my-auto" style={{color: "#E4E4E4"}}>NM</h1>
            </div>
          </h5>
          <h6 className="card-text" style={{color: "#E4E4E4"}}>NOME</h6>
        </div>
      </div>
    )
  }
}

export default Header;