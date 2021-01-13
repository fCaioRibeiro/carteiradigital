import React, { Component } from 'react';
import Back from './back.js'

class Transfer extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }
  render() {
    return (
      <div>
        <Back />
        <div className="card text-start m-3 border-0" style={{backgroundColor: "#C5C5C5", color: "#888888", borderRadius: "15px"}}>
          <input type="text" className="text-secondary form-control border-3 border-top-0 border-end-0 border-start-0 rounded-0 bg-transparent mb-3 py-3 border-secondary" placeholder="CPF destinatário" name="cpf-recipient" />
        </div>
        <div className="card text-start m-3 border-0" style={{backgroundColor: "#C5C5C5", color: "#888888", borderRadius: "15px"}}>
          <input type="text" className="text-secondary form-control border-3 border-top-0 border-end-0 border-start-0 rounded-0 bg-transparent mb-3 py-3 border-secondary" placeholder="Valor envio" name="value-recipient" />
        </div>
        <div className="card text-start m-3 border-0" style={{backgroundColor: "#7D7D7D", borderRadius: "15px"}}>
          <div className="card-body p-2" style={{color: "#E4E4E4"}}>
            <h6 className="card-title" >DADOS DESTINATÁRIO:</h6>
            <p className="mb-0"><small className="card-text">null</small></p>
            <p className="mb-0"><small className="card-text">null</small></p>
          </div>
          <div className="card-footer text-muted border-0 p-1 px-2" style={{backgroundColor: "#C5C5C5", color: "#888888", borderRadius: "0 0 15px 15px"}}>
            <h6 className="mb-0">CONFIRME OS DADOS</h6>
          </div>
        </div>
        <div className="card text-start m-3 border-0">
          <button className="btn btn-success" name="btn-send" style={{borderRadius: "15px"}}>ENVIAR VALOR</button>
        </div>
      </div>
    )
  }
}

export default Transfer;

