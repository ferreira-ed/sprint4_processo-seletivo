import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './pages/home/App';
import notfound from './pages/notfound/notfound'
import ListaUsuario from './pages/desafio/desafio';

import reportWebVitals from './reportWebVitals';

import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom'



const routing = (
  <Router>
    <div>
      <Switch>
        {/* caminho da rota */}
        <Route exact path = "/" component = {App}/>  {/*home*/}
        <Route path = "/lista" component = {ListaUsuario}/>  {/*tipos eventos*/}  
        <Route path = "/notfound" component = {notfound}/>  {/*tipos eventos*/}  
        <Redirect to = "/notfound"/>  {/*redireciona para notfound se não encontrar nenhuma rota*/}  
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
