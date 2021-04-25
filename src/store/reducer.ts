import {ActionTypes} from './action';
import {StateType, ActionType} from '../types/types'

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
          action.payload,
          ...state.news,
        ],
      };
    case ActionTypes.REMOVE_USER_NEWS:
      return {
        ...state,
        news: state.news.splice(0, state.news.findIndex(elem => elem.id === action.payload))
              .concat(state.news.splice(state.news.findIndex((elem) => (elem.id === action.payload)) + 1, state.news.length - 1)),
      };
    default:
      return {...state};
  }
};

export {reducer};