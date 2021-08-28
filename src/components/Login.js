import React from "react";
import { Component } from "react";
import { Form, Control } from 'react-bootstrap';
import '../index.css'
import { connect } from "react-redux";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import operations from '../redux/Auth/authOperations'

class Login extends Component {
    state = {
        email: '',
        password: ''
    }
    changeValue = (even) => {
        switch (even.target.type) {
            case('email'): 
                this.setState({
                email: even.target.value
            })
            break
            case('password'): 
                this.setState({
                password: even.target.value
            })
            break
            default:
                return ''
        }
    }
    submitLogin = (evn) => {
        evn.preventDefault();
        this.props.onSubmit(this.state)
        this.setState({
            email: '',
            password: ''
        })
        evn.target[0].value = '';
        evn.target[1].value = '';
    }
    render() {
      return (
        <div>
            <form type="submit" className="formAuth" onSubmit={this.submitLogin}>
                <label className="labelAuth">
                      <p>Email</p>
                      <Form.Control type="email" placeholder="Enter email" className="inputAuth" onChange={this.changeValue}/>
                </label>
                <label className="labelAuth">
                      <p>Password</p>
                      <Form.Control type="password" placeholder="Password" className="inputAuth" onChange={this.changeValue}/>
                </label>
                <Button type="submit" variant="secondary" className="buttonAuth">Login</Button>
            </form>
        </div>
    )   
    }
}
const mapDispatchToProps = dispatch => ({
    onSubmit: (data) => dispatch(operations.login(data))
})
export default connect(null, mapDispatchToProps)(Login)