
import React, { Component } from 'react';

import ListaUsuarios from './ListaUsuarios';

export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {usuarios: []};
    }
      componentDidMount(){
        window.fetch('http://localhost:4000/usuario/', {
            method: 'GET',
        }).then((res)=> {
          res.json().then(data => {
            this.setState({usuarios: data})
          });          
        })
        .catch((err)=> {
          console.log("Error: " + err)
        });
      }
      


      ListaUsuarios(){
        return this.state.usuarios.map(function(object, i){
            return <ListaUsuarios obj={object} key={i} />;
        });
      }
  
      render() {
        return (
          <div>
            <h3 align="center">Lista Usuarios</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>password</th>
                  <th colSpan="2">Action</th>
                </tr>
              </thead>
              <tbody>
                { this.ListaUsuarios() }
              </tbody>
            </table>
          </div>
        );
      }
    }