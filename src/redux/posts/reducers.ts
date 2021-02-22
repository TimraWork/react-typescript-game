import {ActionTypes} from '../../types';

const initialState = {
  data: [] as Array<Object> | [],
  isLoading: false as boolean,
  error: null as string | null
};

type InitialStateType = typeof initialState;

const posts = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
  switch (action.type) {
    case 'timra/posts/REQUEST': {
      return {
        ...state,
        isLoading: true
      };
    }
    case 'timra/posts/SUCCESS': {
      return {
        ...state,
        data: action.payload.data,
        isLoading: false
      };
    }
    case 'timra/posts/SET_FAILURE': {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    }
    default:
      return state;
  }
};

export default posts;
