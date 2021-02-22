export const actionPostsRequest = () => ({type: 'timra/posts/REQUEST'} as const);
export const actionPostsSuccess = (data: Array<Object>) => ({type: 'timra/posts/SUCCESS', payload: {data}} as const);
export const actionPostsFailure = (error: string) => ({type: 'timra/posts/SET_FAILURE', payload: {error}} as const);
