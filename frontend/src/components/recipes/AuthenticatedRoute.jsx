import React, {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'

//prevents unathenticated users from trying to access restricted pages via typing in the browser
class AuthenticatedRoute extends Component {
    render() {

        // calling a spread operator
        //take all the properties and spread them out
        if(AuthenticationService.isUserLoggedIn()){
            return <Route {...this.props}/>
        } else {
            return <Redirect to="/login"/>
        }
    }
}

export default AuthenticatedRoute