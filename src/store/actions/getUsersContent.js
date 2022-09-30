import axios from "axios";
import {ActionTypes} from '@/store/actions/action-types';
/* 
import * as types from '../constants/types';
import * as API from '../shared/http';
import { createError } from './error';
 */

/* export function showContent(postId) {
    return {
        type: types.comments.SHOW,
        postId
    };
}

export function toggleContent(postId) {
    return {
        type: types.comments.TOGGLE,
        postId
    };
} */

export function updateAvailableContent(content) {
    return {
        type: types.contents.GET,
        content
    };
}
export const getUsers = (users) => {
    return {
        // type: ActionTypes.GET_USERS,
        // payload: users
    }
}
/* export function createComment(payload) {
    return dispatch => {
        return API.createComment(payload)
            .then(res => res.json())
            .then(comment => {
                dispatch({
                    type: types.comments.CREATE,
                    comment
                });
            })
            .catch(err => dispatch(createError(err)));
    };
} */

export function getUsersContent() {
    return dispatch => {
        //return API.fetchCommentsForPost(postId)
        return axios.get("https://randomuser.me/api/?results=10")
            .then(res => {
                console.log('getUsersContent:', res.data.results)
                return dispatch(getUsers(res.data.results))
            })
            .catch(err => {
                console.log('err getUsersContent:', err)
                return // dispatch(createError(err))
            });
    };
}

/* 

export function getCommentsForPost(postId) {
    return dispatch => {
        return API.fetchCommentsForPost(postId)
            .then(res => res.json())
            .then(comments => dispatch(updateAvailableComments(comments)))
            .catch(err => dispatch(createError(err)));
    };
}
*/