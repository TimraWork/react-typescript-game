import {ThunkAction} from 'redux-thunk';
import {RootState} from '../rootReducer';
import {Action} from 'redux';
import {actionPostsSuccess, actionPostsRequest} from './actions';
import {getPostsRequest} from '../api';

export const getPostsThunk = (): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch) => {
  dispatch(actionPostsRequest());
  const postsList = await getPostsRequest();
  dispatch(actionPostsSuccess(postsList));
};
