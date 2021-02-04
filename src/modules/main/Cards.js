import React, { Component } from 'react';
import moment from 'moment';
import storage from '../../utils/storage.js';

import localization from 'moment/locale/pt-br'
moment.locale('pt-br', localization);

class Cards extends Component {
  constructor(props){
    super(props)

    this.state = {
      account: {},
      transations: [],
    }
  }

  componentDidMount() {
    const t = storage.get('transations');
    this.setState({
      transations: t ? t : [],
    })
    const a = storage.get('account');
    this.setState({
      account: a ? a : {},
    })
  }
  
  render() {
    return (
      <div>
        <div className="card text-start m-3 border-0 basic-card">
          <div className="card-body p-2">
            <h6 className="card-title mb-0" >Saldo disponível:</h6>
            <small className="card-text">{this.state.account && this.state.account.balance}</small>
          </div>
          <div className="card-footer text-muted border-0 p-1 px-2 basic-card-footer">
            <h6 className="mb-0">Reais</h6>
          </div>
        </div>
        
        <div className="card text-start m-3 border-0 basic-card">
          <div className="card-body p-2">
            <h6 className="card-title" >Histórico recente:</h6>
            <small className="card-text">
              <ul className="list-group list-group-flush">
                {
                  this.state.transations && this.state.transations.reverse().map((el, ind) => { 
                    if (ind <= 4) {
                      return (
                        <li key={el._id} className="list-group-item px-0" style={{backgroundColor: 'transparent'}}>
                          {
                            this.state.account.cdCPFOperator === el.accountOperator.cdCPFOperator.cdCPFOperator ?
    
                            <div>
                              <div className="d-flex">
                                <h6 className="mb-0">{el.dsTypeOperation.nmOperation} {moment(el.dtOperation).calendar()}</h6>
                                <label className="ms-auto">R$ {el.vrOperation.toLocaleString('pt-br', {minimumFractionDigits: 2})}</label>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"fill="currentColor" className="ms-2 bi bi-box-arrow-in-down text-danger" viewBox="0 0 16 16">
                                  <path d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"/>
                                  <path d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"/>
                                </svg>
                              </div>
                              <label>{el.accountNegotiator.cdCPFOperator.nmOperator}</label>
                            </div> :
    
                            <div>
                              <div className="d-flex">
                                <h6 className="mb-0">{el.dsTypeOperation.nmOperation} {moment(el.dtOperation).calendar()}</h6>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"fill="currentColor" className="ms-auto bi bi-box-arrow-in-down text-success" viewBox="0 0 16 16">
                                  <path d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"/>
                                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                                </svg>
                              </div>
                              <label>{el.accountOperator.cdCPFOperator.nmOperator} {el.vrOperation.toLocaleString('pt-br', {minimumFractionDigits: 2})}</label>
                            </div> 
                          }
                        </li>
                      )
                    }
                  })
                }
              </ul>
            </small>
          </div>
          <div className="card-footer text-muted border-0 p-1 px-2 basic-card-footer">
            <h6 className="mb-0">Histórico completo</h6>
          </div>
        </div>
        
        <div className="row px-3 w-100 m-0 h-0">
  
          <a className="col px-1 btn py-0" href="/">
            <div className="card border-0 basic-mini-card">
              <div className="card-body p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-down text-white" viewBox="0 0 16 16">
                  <path d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"/>
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                </svg>
                <p className="card-text">Crédito</p>
              </div>
            </div>
          </a>
  
          <a className="col px-1 btn py-0" href="/transfer">
            <div className="card border-0 basic-mini-card">
              <div className="card-body p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up text-white" viewBox="0 0 16 16">
                  <path d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"/>
                  <path d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"/>
                </svg>
                <p className="card-text">Transferir</p>
              </div>
            </div>
          </a>
  
        </div>
        
      </div>
    )
  }
}

export default Cards;