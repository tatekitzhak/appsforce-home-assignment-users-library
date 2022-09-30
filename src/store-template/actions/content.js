import axios from "axios";
import * as types from '@/store-template/constants/types';
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

export function getContent() {
    return dispatch => {
        //return API.fetchCommentsForPost(postId)
        return axios.get("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
            .then(res => {
                console.log('getContent:', res.data)
                return  dispatch(updateAvailableContent(res.data))
            })
            .catch(err => {
                console.log('err getContent:', err)
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