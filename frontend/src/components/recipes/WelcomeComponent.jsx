import React, { Component } from 'react'
import logo from "../../images/logo2.png"
import AuthenticationService from './AuthenticationService.js'

class WelcomeComponent extends Component {

    constructor(props) {
        super(props)
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        this.handleError = this.handleError.bind(this)
        this.state = {
            welcomeMessage: '',
            errorMessage: ''

        }

    }
    handleError(error) {
        console.log(error.response)
        let errorMessage = '';
        if (errorMessage) {
            errorMessage += error.message
        }

        if (error.response && error.response.data) {
            errorMessage += error.response.data.message
        }
        this.setState({ errorMessage: errorMessage })
    }
    handleSuccessfulResponse(response) {
        this.setState({ welcomeMessage: response.data.message })
    }

    render() {
        return (

            <>
                <div className="container">

                    {/*Jumbotron Header*/}
                    
                    <header className="jumbotron my-4">
                    <img src={logo} width="300" alt="github.com/klayne1129" />
                        <h1 className="display-3">Welcome {AuthenticationService.getLoggedInUser()}!</h1>
                        <p className="lead">
                            Hey there! Basil is designed to be your own personal recipe database. 
                            Whether its from your favorite food blog or your family's recipe book, 
                            all recipes can be stored here. Click the button below to get started.</p>
                        <a href="/recipes" className="btn btn-dark btn-lg">View my recipes!</a>
                    </header>

                    <div className="container">
                        {this.state.welcomeMessage}
                    </div>

                    {/* errors */}
                    <div className="container">
                        {this.state.errorMessage}
                    </div>

                </div>

            </>

        )
    }
}


export default WelcomeComponent