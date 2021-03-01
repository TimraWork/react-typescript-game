import * as PostsActions from './redux/posts/actions';

type refElement = React.ReactNode<HTMLDivElement> | null;
export interface IPost {
  id: number;
  title: {rendered: string};
}

export type InferValueTypes<T> = T extends {[key: string]: infer U} ? U : never;
export type ActionTypes = ReturnType<InferValueTypes<typeof PostsActions>>;
