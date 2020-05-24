import Axios from "axios"
import {JPA_API_URL} from '../../Constants.js'


class RecipeDataService {
    //passing name as a parameter makes it customizable for users

    


    //retrieves all the recipes the current user has saved.
    retrieveAllRecipes(name) {
        // console.log('executed service')
        //tell promise to get desired url we created in java and eclipse
        return Axios.get(`${JPA_API_URL}/users/${name}/recipes`)   
    }

    //retireves a specific recipe using the username and id of recipe
    retrieveRecipe(name, id) {
        
        return Axios.get(`${JPA_API_URL}/users/${name}/recipes/${id}`)   
    }

    //deletes recipe
    deleteRecipe(name, id) {
        
        return Axios.delete(`${JPA_API_URL}/users/${name}/recipes/${id}`)   
    }

    //updates recipe
    updateRecipe(name, id, recipe) {
        // console.log('executed service')
        //tell promise to get desired url created in java/eclipse
        return Axios.put(`${JPA_API_URL}/users/${name}/recipes/${id}`, recipe)   
    }

        //creates new recipe
    createRecipe(name, recipe) {
        // console.log('executed service')
        //tell promise to get desired url created in java/eclipses
        return Axios.post(`${JPA_API_URL}/users/${name}/recipes`, recipe)   
    }


}

export default new RecipeDataService()