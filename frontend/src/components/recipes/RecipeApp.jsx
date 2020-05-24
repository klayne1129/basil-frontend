import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import ErrorComponent from './ErrorComponent.jsx'
// import FooterComponent from './FooterComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import ListRecipesComponent from './ListRecipesComponent.jsx'
import LoginComponent from './LoginComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import RecipeComponent from './RecipeComponent.jsx'
import ViewRecipeComponent from './ViewRecipeComponent.jsx'
import SearchComponent from './SearchComponent.jsx'
import ContactComponent from './ContactComponent.jsx'
import UserListComponent from './UserListComponent.jsx'
import RegisterComponent from './RegisterComponent.jsx';



class RecipeApp extends Component {
    render() {
        return (
            <div className="RecipeApp">

                {/* allows you to type in browser to route to specific pages */}
                <Router>
                    <>
                        <HeaderComponent />
                        {/* switch makes sure only one route is active at a time */}
                        {/* AuthenticatedRoute prevents unathenticated users from trying 
                            to access restricted pages via typing in the browser 
                            RecipeComponent must have higher priority than ListRecipesComponent
                        Place it higher*/}
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" component={LoginComponent} />
                            <Route path="/register" component={RegisterComponent} />
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent} />
                            <AuthenticatedRoute path="/recipes/:id" component={RecipeComponent} />
                            <AuthenticatedRoute path="/recipes" component={ListRecipesComponent} />
                            <AuthenticatedRoute path="/logout" component={LogoutComponent} />
                            <AuthenticatedRoute path="/view/:id" component={ViewRecipeComponent} />
                            <AuthenticatedRoute path="/search" component={SearchComponent} />
                            <AuthenticatedRoute path="/contact" component={ContactComponent} />
                            <AuthenticatedRoute path="/userList" component={UserListComponent} />
                            <Route component={ErrorComponent} />
                        </Switch>
                        {/* <FooterComponent/> */}
                    </>
                </Router>

            </div>

        )
    }
}

export default RecipeApp


