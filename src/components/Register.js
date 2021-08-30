import React, { Component } from 'react';
import { Form, Control } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CSSTransition } from 'react-transition-group';
import '../index.css';
import { connect } from 'react-redux';
import authOperations from '../redux/Auth/authOperations'

class Register extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        error: false,
        alertSub: 'Password minimum 7 characters'
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
        if (this.state.name === "" || this.state.email === "" || this.state.password === "") {
            this.setState({
                alertSub: 'You did not fill in all the fields'
            })
            this.setState({
                error: true
            })
            setTimeout(() => {
                this.setState({
                error: false,
            })
            }, 3000)
            setTimeout(() => {
                this.setState({
                alertSub: 'Password minimum 7 characters'
            })
            },3500)
            return
        }
        if (this.state.password.length < 7) {

                this.setState({
                error: true
            })
            setTimeout(() => {
                this.setState({
                error: false
            })
            }, 3500)
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
            <div>
            <form type="submit" className="formAuth" onSubmit={this.submitReg}>
                <label className="labelAuth">
                        <p className="titleCon">Name</p>
                        <Form.Control type="text" placeholder="Enter name" className="inputAuth" onChange={this.changeValues}/>
                </label>
                <label className="labelAuth">
                    <p className="titleCon">Email</p>
                    <Form.Control type="email" placeholder="Enter email" className="inputAuth" onChange={this.changeValues}/>
                </label>
                <label className="labelAuth">
                        <p className="titleConPass">Password</p>
                        <CSSTransition in={this.state.error} timeout={3500} classNames="alertValid">
                    <div className="alertValid">{this.state.alertSub} </div>
                </CSSTransition>
                    <Form.Control type="password" placeholder="Enter password" className="inputAuth" onChange={this.changeValues}/>
                    
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