import React, { Component } from 'react';
import { Form, Control } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../index.css'
import { connect } from 'react-redux';
import authOperations from '../redux/Auth/authOperations'

class Register extends Component {
    state = {
        name: '',
        email: '',
        password: ''
    }
    changeValues = (even) => {
        switch (even.target.type) {
            case('text'):
            this.setState({
                name: even.target.value
            })
                break
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
            this.setState({
                password: ''
            })
        }
    }
    submitReg = (even) => {
        even.preventDefault()
        if (this.state.password.length < 7) {
            const alertEl = document.querySelector('.alertValid');
            alertEl.classList.add('isHidden')
            setTimeout(() => {
                alertEl.classList.remove('isHidden')
            }, 3000);
            return
        }
        this.props.onSubmit(this.state)
        this.setState({
            name: '',email: '',password: ''
        })
        even.target[0].value = '';
        even.target[1].value = '';
        even.target[2].value = '';
    }
    render() {
        return (
        <div className="containerReg">
            <form type="submit" className="formReg" onSubmit={this.submitReg}>
                <label className="labelReg">
                        <p>Name</p>
                        <Form.Control type="text" placeholder="Enter name" className="inputAuth" onChange={this.changeValues}/>
                </label>
                <label className="labelReg">
                    <p>Email</p>
                    <Form.Control type="email" placeholder="Enter email" className="inputAuth" onChange={this.changeValues}/>
                </label>
                <label className="labelReg">
                    <p>Password</p>
                    <Form.Control type="password" placeholder="Enter password" className="inputAuth" onChange={this.changeValues}/><span className="alertValid">The password is too short. Password must be at least 7 characters long </span>
                </label>
                <Button type="submit" variant="secondary" className="buttonAuth">Register</Button>
            </form>
        </div>
    )
    }
}
const mapDispatchToProps = dispatch => ({
    onSubmit: (data) => dispatch(authOperations.register(data))
})
export default connect(null,mapDispatchToProps)(Register)