import * as PostsActions from './redux/posts/actions';

type refElement = React.ReactNode<HTMLDivElement> | null;
// type refElement = React.RefObject<HTMLInputElement> | null;
// type refElement = HTMLDivElement | null;
export interface IPost {
  id: number;
  title: {rendered: string};
}

export enum ResultCodesEnum {
  Success = 0,
  Error = 1
}

export type InferValueTypes<T> = T extends {[key: string]: infer U} ? U : never;
export type ActionTypes = ReturnType<InferValueTypes<typeof PostsActions>>;
