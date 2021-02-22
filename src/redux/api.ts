import {IPost} from '../types';
import axios from 'axios';

export interface IPostTransform {
  id: number;
  title: string;
}

const _transformPosts = ({id, title}: IPost): IPostTransform => {
  return {
    id: id,
    // img: _embedded['wp:featuredmedia'] ? _embedded['wp:featuredmedia'][0]['source_url'] : this._pushImageUrl,
    title: title['rendered']
    // date: this._formatDate(date),
    // excerpt: excerpt['rendered']
  };
};

export const getPostsRequest = async () => {
  try {
    // const {data} = await axios.get<IPost[]>('https://timra.ru/timra/wp-json/wp/v2/posts?_embed&per_page=20&page=1');
    const {data} = await axios.get('https://timra.ru/timra/wp-json/wp/v2/posts?_embed&per_page=20&page=1');
    // console.log('data[0] = ', data[0]);
    return data.map(_transformPosts);
  } catch (err) {
    console.error('ERROR IN API = ', err);
  }
};

getPostsRequest();
