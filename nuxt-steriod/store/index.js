import Vuex from 'vuex';
import { PostModule } from '~/store/posts';

const createStore = () => {
  return new Vuex.Store({
    modules: {
      posts: PostModule,
    },
  });
};

export default createStore;
