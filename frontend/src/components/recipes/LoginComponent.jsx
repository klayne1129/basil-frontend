import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        // added state to component
        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false

        }
        //bind methods
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this)

    }
    //whenever there is a change in a text element an event will handle it
    //event updates the state 
    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    //Call the JWTAuthenticationService, if succesful response comes back,
    //register a token for the intercepter so token will be used on,
    //every subsequent request
    loginClicked() {
        AuthenticationService
            .executeJWTAuthenticationService(this.state.username, this.state.password)
            .then((response) => {
                AuthenticationService.registerSuccessfulLoginForJwt(this.state.username, response.data.token)
                this.props.history.push(`/welcome/${this.state.username}`)
            }).catch(() => {
                this.setState({ showSuccessMessage: false })
                this.setState({ hasLoginFailed: true })
            })
    }


    handleKeyPress = e => {
        if (e.key === "Enter") {
            AuthenticationService
                .executeJWTAuthenticationService(this.state.username, this.state.password)
                .then((response) => {
                    AuthenticationService.registerSuccessfulLoginForJwt(this.state.username, response.data.token)
                    this.props.history.push(`/welcome/${this.state.username}`)
                }).catch(() => {
                    this.setState({ showSuccessMessage: false })
                    this.setState({ hasLoginFailed: true })
                })
        }
    }

    render() {
        return (


            <div >
                <h1>Login</h1>
                
                <div className="container">

                    {/* give userfeedback based on credentials */}
                    {/* if true show message */}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Successful</div>}
                    
                    Username: <input type="text" name="username" placeholder='current username' value={this.state.username} onChange={this.handleChange} />

                    Password: <input type="password" name="password" placeholder='current password' value={this.state.password} onChange={this.handleChange} onKeyPress={this.handleKeyPress} />

                    <button type='submit' className="btn btn-success" onClick={this.loginClicked}>Login</button>
 
                </div>
                
            </div>
        )
    }
}

export default LoginComponent