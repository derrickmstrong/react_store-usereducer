import { combineReducers } from 'redux';

import { counterReducer } from './counterReducer';
import { postsReducer } from './postsReducer';

export const rootReducer = combineReducers({
  counter: counterReducer,
  posts: postsReducer,
});
