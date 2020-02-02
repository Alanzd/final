// create.component.js

import React, { Component } from 'react';

export default class Create extends Component {

    constructor(props) {
        super(props);
        this.onChangeNombre = this.onChangeNombre.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this); 

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            nombre: '',
            email: '',
            password:'',

        }
    }

    onChangeNombre(event) {
        this.setState({
            nombre: event.target.value
        })
    }
    onChangeEmail(event) {
        this.setState({
            email: event.target.value
        })
    }
    onChangePassword(event) {
        this.setState({
            password: event.target.value
        })
    }
    onSubmit(event) {
        event.preventDefault();

        const obj = {
            nombre: this.state.nombre,
            email: this.state.email,
            password: this.state.password
          };

        window.fetch('http://localhost:4000/usuario/add', {
            method: 'POST',
            body: JSON.stringify(obj), 
            headers: {'Content-Type': 'application/json'}
        }).then((res)=> alert('Usuario creado'))
        .catch((err)=> alert ('Pues habra ido mal jojo'))


        this.setState({
          nombre: '',
          email: '',
          password: ''
        })
      }

    render() {
        return (
            <div style={{marginTop: 10}}>
            <h3>Usuario</h3>
            <form onSubmit={this.onSubmit}> 
                <div className="form-group">
                    <label>Nombre  </label>
                    <input 
                        type="text" className="form-control"
                        value={this.state.nombre}
                        onChange={this.onChangeNombre}
                    />
                </div>
                <div className="form-group">
                    <label>Email </label>
                    <input 
                        type="email" className="form-control"
                        value={this.state.email}
                        onChange={this.onChangeEmail} 
                    />
                </div>
                <div className="form-group">
                    <label>Contraseña </label>
                    <input 
                        type="password" className="form-control"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                    />

                </div>
                <div className="form-group">
                    <input type="submit" value="Registrar" className="btn btn-primary"/>
                </div>
                <div className="map">

                </div>
            </form>
        </div>
    )
}
}