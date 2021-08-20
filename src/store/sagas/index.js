import { all, fork } from 'redux-saga/effects';

import todo from './todoSaga';

/**
 * rootSaga
 */
export default function* root() {
  yield all([fork(todo)]);
}