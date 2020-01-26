export const state = () => ({
  foodFeeds: [
    { 
      _id: '1',
      creator: {
        profileImage: 'https://randomuser.me/api/portraits/men/32.jpg',
        fullName: 'Kobe Forrosuelo',
      },
      postImage: 'https://www.sample-videos.com/img/Sample-png-image-500kb.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      likes: [
        {
          user: {
            _id: '4',
            profileImage: 'https://randomuser.me/api/portraits/men/32.jpg',
            fullName: 'Drake Onsen'
          }
        },
        {
          user: {
            _id: '3',
            profileImage: 'https://randomuser.me/api/portraits/men/32.jpg',
            fullName: 'Kobe Tsen'
          }
        },
        {
          user: {
            _id: '2',
            profileImage: 'https://randomuser.me/api/portraits/men/32.jpg',
            fullName: 'Charlotte Forr'
          }
        },
        {
          user: {
            _id: '1',
            profileImage: 'https://randomuser.me/api/portraits/men/32.jpg',
            fullName: 'Kobe Forrosuelo'
          }
        }
      ],
      comments: [],
      createdAt: '2019-12-12T08:50:57.655+00:00',
      showComments: false
    },
    { 
      _id: '2',
      creator: {
        profileImage: 'https://randomuser.me/api/portraits/men/32.jpg',
        fullName: 'Kobe Forrosuelo',
      },
      postImage: 'https://www.sample-videos.com/img/Sample-png-image-500kb.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      likes: [
        {
          user: {
            _id: '2',
            profileImage: 'https://randomuser.me/api/portraits/men/32.jpg',
            fullName: 'Charlotte Forr'
          }
        }
      ],
      comments: [
        {
          user: {
            profileImage: 'https://randomuser.me/api/portraits/men/32.jpg',
            fullName: 'Drake Onsen'
          },
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          createdAt: '2019-12-12T08:50:57.655+00:00'
        },
        {
          user: {
            profileImage: 'https://randomuser.me/api/portraits/men/32.jpg',
            fullName: 'Charlotte Forr'
          },
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          createdAt: '2019-12-12T08:50:57.655+00:00'
        }
      ],
      createdAt: '2019-12-12T08:50:57.655+00:00',
      showComments: false
    }
  ]
})

const getters = {
  feeds (state) {
    return state.foodFeeds
  }
}

const mutations = {
  ADD_FOOD_FEED (state, payload) {
    state.foodFeeds.unshift(payload)
  },
  ADD_COMMENT (state, payload) {
    for (let i = 0; i < state.foodFeeds.length; i++) {
      if (state.foodFeeds[i]._id == payload.feedId) {
        state.foodFeeds[i].comments.unshift(payload.comment)
      }
    }
  },
  ADD_LIKE (state, payload) {
    for (let i = 0; i < state.foodFeeds.length; i++) {
      if (state.foodFeeds[i]._id == payload) {
        state.foodFeeds[i].likes.push({ user: { _id: '1', fullName: 'Xinetsu Osaka' } })
      }
    }
  },
  REMOVE_LIKE (state, payload) {
    for (let i = 0; i < state.foodFeeds.length; i++) {
      if (state.foodFeeds[i]._id == payload.feedId) {
        for(let x = 0; x < state.foodFeeds[i].likes.length; x++ ) {
          if (state.foodFeeds[i].likes[x].user._id == payload.userId) {
            state.foodFeeds[i].likes.splice(x, 1)
          }
        }
      }
    }
  },
  UPDATE_SHOWCOMMENTS (state, payload) {
    for (let i = 0; i < state.foodFeeds.length; i++) {
      if (state.foodFeeds[i]._id == payload) {
        state.foodFeeds[i].showComments = !state.foodFeeds[i].showComments
      }
    }
  }
}

const actions = {
  addFoodFeed ({ commit }, payload) {
    commit('ADD_FOOD_FEED', payload)
  },
  addFoodFeedComment ({ commit }, payload) {
    commit('ADD_COMMENT', payload)
  },
  showFeedComments ({ commit }, payload) {
    commit('UPDATE_SHOWCOMMENTS', payload)
  },
  addLike({ commit }, payload) {
    commit('ADD_LIKE', payload)
  },
  removeLike({ commit }, payload) {
    commit('REMOVE_LIKE', payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

