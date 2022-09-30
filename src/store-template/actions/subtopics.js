import axios from "axios";

import * as types from '@/store/constants/types';
/* 
import * as API from '../shared/http';
import { createError } from './error';
import { getCommentsForPost } from './comments';
 */

/* 
    Actions
*/

export function updateAvailableSubtopics(subtopics) {
    return {
        type: types.subtopic.GET,
        subtopics
    };
}

/* export function createNewPost(post) {
    return (dispatch, getState) => {
        const { user } = getState();
        post.userId = user.id;
        return API.createPost(post)
            .then(res => res.json())
            .then(newPost => {
                dispatch({
                    type: types.posts.CREATE,
                    post: newPost
                });
            })
            .catch(err => dispatch(createError(err)));
    };
}
export function getPostsForPage(page = 'first') {
    return (dispatch, getState) => {
        const { pagination } = getState();
        const endpoint = pagination[page];
        return API.fetchPosts(endpoint)
            .then(res => {
                const links = parseLinkHeader(res.headers.get('Link'));
                return res.json().then(posts => {
                    dispatch(updatePaginationLinks(links));
                    dispatch(updateAvailablePosts(posts));
                });
            })
            .catch(err => dispatch(createError(err)));
    };
}
export function loadPost(postId) {
    return dispatch => {
        return API.fetchPost(postId)
            .then(res => res.json())
            .then(post => {
                dispatch(updateAvailablePosts([post]));
                dispatch(getCommentsForPost(postId));
            })
            .catch(err => dispatch(createError(err)));
    };
}
 */
export function getSubtopics() {
    return dispatch => {
        //return API.fetchCommentsForPost(postId)
        return axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(res => {
                console.log('getSubtopics:', res.data)
                return  dispatch(updateAvailableSubtopics(res.data))
            })
            .catch(err => {
                console.log('err getSubtopics:', err)
                return // dispatch(createError(err))
            });
    };
}


