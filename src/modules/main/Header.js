import React, { Component } from 'react';
import storage from '../../utils/storage.js';

class Header extends Component {
  constructor(props){
    super(props)

    this.state = {
      account: {},
      className: 'd-block',
    }
  }

  componentDidMount() { 
    const a = storage.get('account');
    this.setState({
      account: a ? a : {},
    })
    // window.onscroll = () => this.handleScroll()
  }
  
  // handleScroll() { 
  //   if (document.documentElement.scrollTop > 100) {
  //     this.setState({
  //       className: 'd-none'
  //     })
  //   } else {
  //     this.setState({
  //       className: 'd-block'
  //     })
  //   }
  // }

  render(){
    return (
      <div className="card text-center rounded-0 border-0 basic-card">
        <div className="card-body">
          <h5 className="card-title">
            <div className={this.state.className+" border border-2 rounded-circle mx-auto d-flex"} style={{width: "100px", height: "100px"}}>
              <h1 className="text-center mx-auto my-auto">
                {/* {this.state.account && this.state.account.nmOperator.split(" ")[0].substr(0, 1) + this.state.account.nmOperator.split(" ")[1].substr(0, 1)} */}
              </h1>
            </div>
          </h5>
          <h6 className="card-text">{this.state.account && this.state.account.nmOperator}</h6>
        </div>
      </div>
    )
  }
}

export default Header;