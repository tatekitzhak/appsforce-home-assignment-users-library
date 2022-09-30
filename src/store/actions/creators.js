

import { addUser, getUser, getUsers, deleteUser, updateUser } from './actions';

import axios from 'axios';


/// add a new user
export const addUserAction = (user) => {
    return (dispatch) => {
        /// axios is a library used to make request to an API, 
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
const data = [
    {
        "id": 274,
        "name": "xwwcwxcx11111",
        "occupation": "xcxwcxwc",
        "email": "marwen5@gmail.com",
        "bio": "xwcxwcxwcxwfgfgfgfg",
        "created_at": "2022-09-21T15:44:13.196Z",
        "updated_at": "2022-09-30T10:27:50.840Z",
        "image": "aaaaaaaa"
    },
    {
        "id": 276,
        "name": "Ran Itzhak",
        "occupation": "Software developer",
        "email": "tatek@walla.com",
        "bio": "m",
        "created_at": "2022-09-30T10:38:46.415Z",
        "updated_at": "2022-09-30T10:38:46.415Z",
        "image": "BBBBBBB"
    },
    {
        "id": 277,
        "name": "Jack Adis",
        "occupation": "Pailot",
        "email": "Adis@Adis.com",
        "bio": "M",
        "created_at": "2022-09-30T10:59:18.306Z",
        "updated_at": "2022-09-30T10:59:18.306Z",
        "image": "CCCCCCCC"
    },
    {
        "id": 278,
        "title": "Miss",
        "firstName": "Jack",
        "lastName": "Chow",
        "occupation": "Pailot",
        "email": "Adis@Adis.com",
        "bio": "M",
        "created_at": "2022-09-30T10:59:18.306Z",
        "updated_at": "2022-09-30T10:59:18.306Z",
        "image": "DDDDDD",
        "location": ['country', 'city', 'street']
    }
];
/// fetch all users 
export const getUsersAction = () => {
    return (dispatch) => {
        axios.get('https://randomuser.me/api/?results=10')
            .then(response => {
                console.log('getUsersAction:', response.data.results);
                
                const allUsers = []
                for (let i = 0; i < response.data.results.length; i++) {
                    const personDetails = {}
                    personDetails['name'] = response.data.results[i].name
                    personDetails['email'] = response.data.results[i].email
                    personDetails['picture'] = response.data.results[i].picture
                    personDetails['location'] = response.data.results[i].location
                    personDetails['id'] = response.data.results[i].id
                    allUsers.push(personDetails)
                }
                console.log('getUsersAction2:', allUsers);
                /// dispatch function dispatches an action which triggers state changes in the store
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