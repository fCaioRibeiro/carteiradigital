import React from 'react';
import Swal from 'sweetalert2';
import API from "../api/api.js";
import storage from '../utils/storage.js';
import { useHistory } from "react-router-dom";

const Toast = Swal.mixin({
  toast: true,
  position: 'bottom-end',
  showConfirmButton: false,
  timer: 2000,
  padding: '15px',
  background: '#7D7D7D',
});

const Login = () => {

  const history = useHistory();

  async function getData(event) {
    event.preventDefault();

    await sendData(
      {
        cdCPFOperator: event.target.cdCPFOperator.value
        ,dsPassword: event.target.dsPassword.value,
      }, event.target
    );
  };

  async function sendData(data, form) {
    await API.post(`account/getByCPFAndPassword`, data).catch((error) => {
      if (error.response) {
        Toast.fire({
          icon: 'error',
          html: `<small style="color:white; padding:10px;">${error.response.data.response}</small>`,
        });
      }
    }).then(success => {
      if (success) {
        Toast.fire({
          icon: 'success',
        });
        storage.set('app-token', success.data.response.token);
        storage.set('account', success.data.response.account);

        API.get( 
          `operation/getAllByCPF/${success.data.response.account.cdCPFOperator}`
          ,{ 'headers': { 'x-access-token': success.data.response.token } },
        ).then( success => {
          storage.set('transations', success.data.response);
          history.push('/');

        }).catch(console.log);

        form.reset();
      }
    });
  };

  return (
    <div>
      <div className="card text-center rounded-0 border-0 basic-card">
        <div className="card-body">
          <h5 className="card-title">
            <div className="border border-2 rounded-circle mx-auto d-flex" style={{width: "100px", height: "100px"}}>
              <h1 className="text-center mx-auto my-auto"></h1>
            </div>
          </h5>
          <h6 className="card-text">Carteira digital</h6>
        </div>
      </div>
      <form onSubmit={getData}>
        <div className="card text-start m-3 border-0 basic-card">
          <input maxLength="110" autoComplete="off" type="text" className="form-control border-top-0 border-end-0 border-start-0 bg-transparent mb-3 py-3" placeholder="CPF" id="cdCPFOperator" />
        </div>
        <div className="card text-start m-3 border-0 basic-card">
          <input autoComplete="off" type="password" className="form-control border-top-0 border-end-0 border-start-0 bg-transparent mb-3 py-3" placeholder="Senha" id="dsPassword" />
        </div>
        <div className="text-start m-3 border-0">
          <button className="btn btn-success w-100" name="btn-send" type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};


export default Login;