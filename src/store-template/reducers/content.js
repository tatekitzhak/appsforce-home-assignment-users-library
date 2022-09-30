import { contentState } from '@/store-template/constants/initialState';
import * as types from '@/store-template/constants/types';

export function content(state = contentState.content, action) {
    console.log('content(state, action):', state, action);
    switch (action.type) {
        case types.topics.GET: {
            const { topics } = action;
            let nextState = Object.assign({}, state);
            for (let comment of topics) {
                if (!nextState[comment.id]) {
                    nextState[comment.id] = comment;
                }
            }
            return nextState;
        }
        case types.topics.CREATE: {
            const { comment } = action;
            let nextState = Object.assign({}, state);
            nextState[comment.id] = comment;
            return nextState;
        }
        default:
            return state;
    }
}

export function commentIds(state = initialState.commentIds, action) {
    switch (action.type) {
        case types.topics.GET: {
            const nextCommentIds = action.topics.map(comment =>
     comment.id);
            let nextState = Array.from(state);
            for (let commentId of nextCommentIds) {
                if (!state.includes(commentId)) {
                    nextState.push(commentId);
                }
            }
            return nextState;
        }
        case types.topics.CREATE: {
            const { comment } = action;
            let nextState = Array.from(state);
            nextState.push(comment.id);
            return nextState;
        }
        default:
            return state;
    }
}



