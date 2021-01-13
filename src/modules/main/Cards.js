import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="card text-start m-3 border-0" style={{backgroundColor: "#7D7D7D", borderRadius: "15px"}}>
          <div className="card-body p-2" style={{color: "#E4E4E4"}}>
            <h6 className="card-title mb-0" >SALDO DISPONÍVEL:</h6>
            <small className="card-text">2000,00</small>
          </div>
          <div className="card-footer text-muted border-0 p-1 px-2" style={{backgroundColor: "#C5C5C5", color: "#888888", borderRadius: "0 0 15px 15px"}}>
            <h6 className="mb-0">FAZER TRANSAÇÃO</h6>
          </div>
        </div>
        
        <div className="card text-start m-3 border-0" style={{backgroundColor: "#7D7D7D", borderRadius: "15px"}}>
          <div className="card-body p-2" style={{color: "#E4E4E4"}}>
            <h6 className="card-title" >HISTÓRICO RECENTE:</h6>
            <p className="mb-0"><small className="card-text">Kaipira mercantil - hoje ás 12:00</small></p>
            <p className="mb-0"><small className="card-text">Moto peças cariri - 01/11/2020</small></p>
            <p className="mb-0"><small className="card-text">Sexy shop - 11/05/2020</small></p>
            <p className="mb-0"><small className="card-text">Cabaré do Val - 24/03/2020</small></p>
          </div>
          <div className="card-footer text-muted border-0 p-1 px-2" style={{backgroundColor: "#C5C5C5", color: "#888888", borderRadius: "0 0 15px 15px"}}>
            <h6 className="mb-0">HISTÓRICO COMPLETO</h6>
          </div>
        </div>
        
        <div className="row px-3 w-100 m-0 h-0">

          <a className="col px-1 btn py-0" href="/">
            <div className="card border-0" style={{backgroundColor: "#7D7D7D", borderRadius: "5px"}}>
              <div className="card-body p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-down text-white" viewBox="0 0 16 16">
                  <path d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"/>
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                </svg>
                <p className="card-text" style={{fontSize: "66%", color: "#E4E4E4"}}>Crédito</p>
              </div>
            </div>
          </a>

          <a className="col px-1 btn py-0" href="/transfer">
            <div className="card border-0" style={{backgroundColor: "#7D7D7D", borderRadius: "5px"}}>
              <div className="card-body p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up text-white" viewBox="0 0 16 16">
                  <path d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"/>
                  <path d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"/>
                </svg>
                <p className="card-text" style={{fontSize: "66%", color: "#E4E4E4"}}>Transferir</p>
              </div>
            </div>
          </a>

          {/* <div className="col px-1">
            <div className="card border-0" style={{backgroundColor: "#7D7D7D", borderRadius: "5px"}}>
              <div className="card-body p-2">
                <p className="card-text" style={{fontSize: "66%", color: "#E4E4E4"}}>Transferir</p>
              </div>
            </div>
          </div>

          <div className="col px-1">
            <div className="card border-0" style={{backgroundColor: "#7D7D7D", borderRadius: "5px"}}>
              <div className="card-body p-2">
                <p className="card-text" style={{fontSize: "66%", color: "#E4E4E4"}}>Transferir</p>
              </div>
            </div>
          </div> */}

        </div>
        
      </div>
    )
  }
}

export default Header;