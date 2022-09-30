import axios from 'axios';
import { addUser, getUser, getUsers, deleteUser, updateUser } from './actions';

/// add a new user
export const addUserAction = (user) => {
    return (dispatch) => {
        /// return data and manipulate the data .
        axios.post('https://ti-react-test.herokuapp.com/users', user)
            .then(response => {
                console.log('addUserAction:', response);
                dispatch(addUser(response.data))
            })
            .catch(error => {
                console.log("eror", error);
            });
    }
}

/// fetch data of a single user  basedin id
export const getUserAction = (id) => {
    return (dispatch) => {
        axios.get(`https://ti-react-test.herokuapp.com/users/274`)
            .then(response => {
                console.log('getUserAction:', response);
                dispatch(getUser(response.data)
                );
            })
            .catch(error => {
                console.log('error in getUserAction:',error);
            });
    }
}

/// fetch all users 
export const getUsersAction = () => {
    return (dispatch) => {
        axios.get('https://randomuser.me/api/?results=10')
            .then(response => {                
                const allUsers = []
                for (let i = 0; i < response.data.results.length; i++) {
                    const personDetails = {}
                    if(response.data.results[i].id.value){
                        personDetails['name'] = response.data.results[i].name
                        personDetails['email'] = response.data.results[i].email
                        personDetails['picture'] = response.data.results[i].picture
                        personDetails['location'] = response.data.results[i].location
                        personDetails['id'] = response.data.results[i].id
                        allUsers.push(personDetails)
                    }
                    
                }
                dispatch(getUsers(allUsers)
                );

            })
            .catch(error => {
                console.log(error);
            });
    }
}
/**
 
export const getUsersAction = () => {
    return (dispatch) => {
        axios.get('https://randomuser.me/api/?results=10')
            .then(response => {
                console.log('getUsersAction:',response.data.results);
                /// dispatch function dispatches an action which triggers state changes in the store
                dispatch(getUsers(response.data.results)
                );

            })
            .catch(error => {
                console.log('error in getUsersAction:',error);
            });
    }
}
 */

/// delete a user
export const deleteUserAction = (id) => {
    return (dispatch) => {
        axios.delete(`https://ti-react-test.herokuapp.com/users/${id}`)
            .then(response => {
                console.log('deleteUserAction:', response);
                dispatch(deleteUser());
                dispatch(getUsersAction());
            })
            .catch(error => {
                console.log(error);
            });
    }
}

/// update the existing data of a user
export const updateUserAction = (user, id) => {
    return (dispatch) => {
        axios.put(`https://ti-react-test.herokuapp.com/users/${id}`, user)
            .then(response => {
                console.log('updateUserAction:', response);
                dispatch(updateUser());
                dispatch(getUsersAction());
            })
            .catch(error => {
                console.log(error);
            });
    }
}