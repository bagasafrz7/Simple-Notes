import React, { Component } from 'react'
import './Register.scss'
// import firebase from '../../../config/firebase'
import Button from '../../../components/atoms/Button'
import { connect } from 'react-redux'
import { registerUserAPI } from '../../../config/redux/action'

class Register extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChangeText = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleRegisterSubmit = () => {
        const { email, password } = this.state

        console.log('data before send: ', email, password);
        this.props.registerAPI({ email, password })
    }

    render() {
        return [
            <div className="auth-container">
                <div className="auth-card">
                    <p className="auth-title">Register Page</p>
                    <input className="input" id="email" placeholder="Email" type="text" onChange={this.handleChangeText}></input>
                    <input className="input" id="password" placeholder="Password" type="password" onChange={this.handleChangeText}></input>
                    <Button onClick={this.handleRegisterSubmit} title="Register Now" loading={this.props.isLoading}></Button>
                    {/* <button>Go to Dashboard</button> */}
                </div>
            </div>
        ]
    }
}

const reduxState = (state) => ({
    isLoading: state.isLoading
})

const reduxDishpatch = (dishpatch) => ({
    registerAPI: (data) => dishpatch(registerUserAPI(data))
})

export default connect(reduxState, reduxDishpatch)(Register)