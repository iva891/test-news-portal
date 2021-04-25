import {NewsItemPropsType} from '../types/types';

export const ActionTypes = {
  SET_NEWS: `news/setNews`,
  SET_LOADING: `news/setLoading`,
  SET_USER_NEWS: `news/setUserNews`
};

export const setNews = (payload: any[]) => ({ 
  type: ActionTypes.SET_NEWS,
  payload
});
export const setLoading = (payload: boolean) => ({
  type: ActionTypes.SET_LOADING,
  payload
});
export const setUserNews = (payload: NewsItemPropsType) => ({
  type: ActionTypes.SET_USER_NEWS,
  payload
});
