import Axios from "axios"
import {JPA_API_URL} from '../../Constants.js'


class UserDataService {
    
    //retireves a specific user using the username 
    retrieveUser(id) {
        
        return Axios.get(`${JPA_API_URL}/users/${id}`)   
    }


    //creates new user
    createUser(user) {
        // console.log('executed service')
        //tell promise to get desired url created in java/eclipses
        return Axios.post(`${JPA_API_URL}/users`, user)   
    }


    //retrieves all users.
    retrieveAllUsers() {
        return Axios.get(`${JPA_API_URL}/users`)   
    }

    deleteUser(id) {
        
        return Axios.delete(`${JPA_API_URL}/users/${id}`)   
    }

}

export default new UserDataService()