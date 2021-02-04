import React, { Component } from 'react';
import Swal from 'sweetalert2';
import Header from './main/Header.js'
import storage from '../utils/storage.js';

import API from "../api/api.js";
import Back from './Back.js';

const Toast = Swal.mixin({
  toast: true,
  position: 'bottom-end',
  showConfirmButton: false,
  timer: 2000,
  padding: '15px',
  background: '#7D7D7D',
});

const ConfirmPass = Swal.mixin({
    html: `<h6>Digite sua senha</h6>
          <input type="password" id="passwordConfirm" />`,
    inputAttributes: {
      autocapitalize: 'off',
    },
    background: '#E4E4E4',
    showCancelButton: true,
    showLoaderOnConfirm: true,
    cancelButtonText: `Cancelar`,
    confirmButtonText: 'Confirmar',
    customClass: {
      cancelButton: 'btn btn-danger btn-sm',
      confirmButton: 'btn btn-success btn-sm m-2',
    },
    buttonsStyling: false
})

class Transfer extends Component {
  constructor(props){
    super(props)

    this.state = {
      token: {},
      account: {},
      data: {},
      negotiator: {}
    }
  }

  componentDidMount() {
    const t = storage.get('app-token');
    this.setState({
      token: t ? t : [],
    })
    const a = storage.get('account');
    this.setState({
      account: a ? a : {},
    })
  }

  // pega os dados do form
  getData = event => {
    event.preventDefault();


    ConfirmPass.fire({
      preConfirm: () => {
        this.setState({
    
          data: {
            accountOperator: {
                cdCPFOperator: this.state.account.cdCPFOperator
            },
            dsTypeOperation: {
                cdOperation: "03P"
            },
            accountNegotiator:{
                cdCPFOperator: event.target.cpfRecipient.value
            },
            vrOperation: parseFloat(event.target.valueRecipient.value),
            dsPassword: document.getElementById('passwordConfirm').value
          }
        });
    
        this.sendData(this.state.data, event.target);
      },
      allowOutsideClick: () => !Swal.isLoading()
    })
  };

  // PEGA OS DADOS DO NEGOCIADOR ----------------------
  getNegotiator = async event => {
    
    clearTimeout(this.time);

    this.time = await setTimeout(()  => {
      this.setState({negotiator: {}});
      if (event.target.value.length !== 14) return;

      API.get(`account/getByCPF/${event.target.value}`
        ,{
          headers: { 'x-access-token': this.state.token } 
        },
      )
      .catch((error) => {
        if (error.response) {
          Toast.fire({
            icon: 'error',
            html: `<small style="color:white; padding:10px;">${error.response.data.response}</small>`,
          });
        }
      })
      .then(success => {
        if (success) {
          Toast.fire({
            icon: 'success',
          });
          this.setState({negotiator: success.data.response})
        }
      });
    }, 1000);
  }

  // ENVIA REQUISIÇÃO ---------------------------------
  async sendData(data, form) {

    await API.post(`operation/set` ,data
      ,{
        headers: { 'x-access-token': this.state.token }
      },
    )
    .catch((error) => {
      if (error.response) {
        Toast.fire({
          icon: 'error',
          html: `<small style="color:white; padding:10px;">${error.response.data.response}</small>`,
        });
      }
    })
    .then(success => {
      if (success) {
        Toast.fire({
          icon: 'success',
        });

        API.get( 
          `operation/getAllByCPF/${this.state.account.cdCPFOperator}`
          ,{ 'headers': { 'x-access-token': this.state.token } },
        ).then( success => {
          localStorage.setItem('transations', JSON.stringify(success.data.response))
        }).catch(console.log);

        this.setState({data: {}, negotiator: {}});
        form.reset();
      }
    });

  };

  render() {
    return (
      <div>
        <Header />
        <Back />
        <form onSubmit={this.getData}>
          <div className="card text-start m-3 border-0 basic-card">
            <input maxLength="110" autoComplete="off" onKeyUp={this.getNegotiator} type="text" className="form-control border-top-0 border-end-0 border-start-0 bg-transparent mb-3 py-3" placeholder="CPF destinatário" id="cpfRecipient" />
          </div>
          <div className="card text-start m-3 border-0 basic-card">
            <input autoComplete="off" type="text" className="form-control border-top-0 border-end-0 border-start-0 bg-transparent mb-3 py-3" placeholder="Valor envio" id="valueRecipient" />
          </div>
          <div className="card text-start m-3 border-0 basic-card">
            <div className="card-body p-2" style={{color: "#E4E4E4"}}>
              <h6 className="card-title" >Dados destinatário:</h6>
              <p className="mb-0"><small className="card-text">{ this.state.negotiator.nmOperator }</small></p>
              <p className="mb-0"><small className="card-text"></small>{ this.state.negotiator.cdCPFOperator }</p>
            </div>
            <div className="card-footer text-muted border-0 p-1 px-2 basic-card-footer">
              <h6 className="mb-0">Confirme os dados</h6>
            </div>
          </div>
          <div className="text-start m-3 border-0">
            <button className="btn btn-success w-100" name="btn-send" type="submit" disabled={!this.state.negotiator.nmOperator}>Transferir</button>
          </div>
        </form>
      </div>
    );
  };
};

export default Transfer;

