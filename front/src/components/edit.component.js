// Edit.component.js

import React, { Component } from 'react'
export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeNombre = this.onChangeNombre.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      nombre: '',
      email: '',
      password:''
    }
  }

  componentDidMount() {
      window.fetch('http://localhost:4000/usuario/edit/'+this.props.match.params.id,{
        method: 'GET'
    })
          .then(response => {
            response.json().then (data => {
              this.setState({ 
                "nombre": data.nombre, 
                "email": data.email,
                "password": data.password });
            })
              
          })
          .catch(function (error) {
              console.log(error);
          })
    }

  onChangeNombre(e) {
    this.setState({
      nombre: e.target.value
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })  
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      nombre: this.state.nombre,
      email: this.state.email,
      password: this.state.password
    };
    window.fetch('http://localhost:4000/usuario/update/'+this.props.match.params.id, {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {'Content-Type': 'application/json'}
    })
        .then(res => {
          res.json().then(data => console.log(res.data));
        });
    
    this.props.history.push('/index');
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Actualizar usuario</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Nombre  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.nombre}
                      onChange={this.onChangeNombre}
                      />
                </div>
                <div className="form-group">
                    <label>Email </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                      />
                </div>
                <div className="form-group">
                    <label>Password: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.password}
                      onChange={this.onChangePassword}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Actualizar usuario" 
                      className="btn btn-primary"/>
                </div>
                <div className= "map">
            
                </div>

            </form>
        </div>
    )
  }
}