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
        alertSub: 'The password is too short. Password must be at least 7 characters long'
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
            if(even.target.value.length < 7){
                this.setState({
                error: true
            })
            setTimeout(() => {
                this.setState({
                error: false
            })
            },1000)
            }
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
                alertSub: 'The password is too short. Password must be at least 7 characters long'
            })
            },3500)
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
                <CSSTransition in={this.state.error} timeout={500} classNames="alertValid" unmountOnExit>
                    <span className="alertValid">{this.state.alertSub} </span>
                </CSSTransition>
            <form type="submit" className="formAuth" onSubmit={this.submitReg}>
                <label className="labelAuth">
                        <p>Name</p>
                        <Form.Control type="text" placeholder="Enter name" className="inputAuth" onChange={this.changeValues}/>
                </label>
                <label className="labelAuth">
                    <p>Email</p>
                    <Form.Control type="email" placeholder="Enter email" className="inputAuth" onChange={this.changeValues}/>
                </label>
                <label className="labelAuth">
                    <p>Password</p>
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