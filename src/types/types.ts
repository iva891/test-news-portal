export type StateType = {
  news: Array<any>,
  loading: boolean,
};

export type ActionType = {
  type: string,
  payload?: any,
};

export interface NewsItemType {
    id: number | string,
    title: string,
    description: string,
    created_at: Date,
    author: {
      name: string,
      lastname: string,
    }
}