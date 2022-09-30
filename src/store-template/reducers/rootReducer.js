import {createStore, combineReducers } from "redux";

import counter from '@/store/reducers/counter';
import { topics } from '@/store/reducers/topics';
import { subtopics } from '@/store/reducers/subtopics'; 
import { articles } from '@/store/reducers/articles';
import { content } from '@/store/reducers/content';
console.log('combineReducers:',combineReducers)
const rootReducer = combineReducers({
    topics,
    subtopics,
    articles,
    content
});
export default rootReducer;