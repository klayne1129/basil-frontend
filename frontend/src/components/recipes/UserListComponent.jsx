
import React, { Component } from 'react'
import UserDataService from '../../api/recipes/UserDataService.js'



class UserListComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            message: null
        }
        this.deleteUserClicked = this.deleteUserClicked.bind(this);
        this.refreshUsers = this.refreshUsers.bind(this);
    }

    //dont call initial api in the constructor
    //if you do the state doesn't reinitialize until the api is finished 
    componentDidMount() {

        console.log("component did Mount")
        this.refreshUsers();
    }

    refreshUsers() {

        UserDataService.retrieveAllUsers()
            .then(
                response => {
                    this.setState({ users: response.data })
                }
            )
    }

    deleteUserClicked(id) {
        UserDataService.deleteUser(id)
            .then(
                response => {
                    this.setState({ message: `Deletion of user ${id} successful.` })
                    this.refreshUsers()
                }
            )
    }

    render() {
        return (
            <div>
                <h1>Active User List</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(
                                    user =>
                                        <tr key={user.id}>
                                            <td>{user.username}</td>
                                            <td><button className="btn btn-danger" onClick={() => this.deleteUserClicked(user.id)} >Delete</button></td>
                                        </tr>
                                )
                            }

                        </tbody>
                    </table>

                </div>
            </div>
        )
    }
}

export default UserListComponent