export type StateType = {
  news: Array<any>,
  loading: boolean,
};

export interface NewsItemPropsType {
  item: {
    id: number,
    title: string,
    description: string,
    created_at: Date,
    author: {
      name: string,
      lastname: string,
    }
  }
}