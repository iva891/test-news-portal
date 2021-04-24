import {ActionTypes} from './action';
import {StateType} from '../types/types'


type ActionType = {
  type: string,
  payload?: any,
};

const initialState: StateType = {
  news: [],
  loading: true,
};

const reducer = (state: StateType = initialState, action: ActionType): StateType => {
  switch (action.type) {
    case ActionTypes.SET_NEWS:
      return {
        ...state,
        news: action.payload
      };
    case ActionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case ActionTypes.SET_USER_NEWS:
      return {
        ...state,
        news: [
          ...state.news,
          action.payload,
        ],
      };
    default:
      return {...state};
  }
};

export {reducer};