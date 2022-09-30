import {createStore, combineReducers } from "redux";

import counter from '@/store-template/reducers/counter';
import { topics } from '@/store-template/reducers/topics';
import { subtopics } from '@/store-template/reducers/subtopics'; 
import { articles } from '@/store-template/reducers/articles';
import { content } from '@/store-template/reducers/content';
console.log('combineReducers:',combineReducers)
const rootReducer = combineReducers({
    topics,
    subtopics,
    articles,
    content
});
export default rootReducer;