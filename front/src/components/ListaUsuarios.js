// ListaUsuarios.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListaUsuarios extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete(e) {
        window.fetch('http://localhost:4000/usuario/delete/'+this.props.obj._id,{
          method: 'GET'
        }).then((res)=> {
          res.json().then(data => {
            this.setState({usuarios: data})
          });          
        })
        .catch((err)=> {
          console.log("Error: " + err)
        });
      }
      
          
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.nombre}
          </td>
          <td>
            {this.props.obj.email}
          </td>
          <td>
            {this.props.obj.password}
          </td>
          <td>
            <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default ListaUsuarios;