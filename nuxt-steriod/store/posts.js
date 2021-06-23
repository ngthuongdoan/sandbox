export const PostModule = {
  state: () => {
    return {
      posts: [],
    };
  },
  getters: {
    posts(state) {
      return state.posts;
    },
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts;
    },
  },
  actions: {
    setPosts(vuexContext, posts) {
      vuexContext.commit('SET_POSTS', posts);
    },
  },
  namespaced: true,
};
