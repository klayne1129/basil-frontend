import React, { Component } from 'react'
import UserDataService from '../../api/recipes/UserDataService.js'




class RegisterComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            verifyPassword: '',
            role: "ROLE_USER",
            hasSignUpFailed: false,
            showSuccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.signUpClicked = this.signUpClicked.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this)

    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    signUpClicked() {
        let user = {
            username: this.state.username,
            password: this.state.password,
            role: "ROLE_USER"
        }

        if (this.state.password === this.state.verifyPassword) {
            UserDataService.createUser(user)
            this.setState({ showSuccessMessage: true })
            this.setState({ hasSignUpFailed: false })
        } else {
            this.setState({ showSuccessMessage: false })
            this.setState({ hasSignUpFailed: true })
        }
    }

    handleKeyPress = e => {
        if (e.key === "Enter") {
            let user = {
                username: this.state.username,
                password: this.state.password,
                role: "ROLE_USER"
            }
    
            if (this.state.password === this.state.verifyPassword) {
                UserDataService.createUser(user)
                this.setState({ showSuccessMessage: true })
                this.setState({ hasSignUpFailed: false })
            } else {
                this.setState({ showSuccessMessage: false })
                this.setState({ hasSignUpFailed: true })
            }
        }
    }

    

    render() {
        return (
            <div >
                <h1>Registration</h1>
                {this.state.hasSignUpFailed && <div className="alert alert-warning">Passwords do not match!</div>}
                {this.state.showSuccessMessage && <div className="alert alert-success">Registration successful. Return to login page.</div>}
                <div className="container">

                    <label>Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} /></label>

                    <label>Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} /></label>
                    <label>Verify Password: <input type="password" name="verifyPassword" value={this.state.verifyPassword} onChange={this.handleChange} onKeyPress={this.handleKeyPress}/></label>
                    <button type='submit' className="btn btn-success" onClick={this.signUpClicked}>Sign Up</button>

                </div>
            </div>
        )
    }
}

export default RegisterComponent