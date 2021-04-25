import {NewsItemType, ActionType} from '../types/types';

export const ActionTypes = {
  SET_NEWS: `news/setNews`,
  SET_LOADING: `news/setLoading`,
  SET_USER_NEWS: `news/setUserNews`,
  REMOVE_USER_NEWS: `news/removeUserNews`,
};

export const setNews = (payload: any[]): ActionType => ({ 
  type: ActionTypes.SET_NEWS,
  payload
});
export const setLoading = (payload: boolean): ActionType => ({
  type: ActionTypes.SET_LOADING,
  payload
});
export const setUserNews = (payload: NewsItemType): ActionType => ({
  type: ActionTypes.SET_USER_NEWS,
  payload
});
export const removeNewsItem = (payload: number | string): ActionType => ({
  type: ActionTypes.REMOVE_USER_NEWS,
  payload
});
