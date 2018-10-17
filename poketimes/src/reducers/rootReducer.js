const initState = {
  posts: [
    { id: '1', title: 'I don\'t', body: 'obladi' },
    { id: '2', title: 'even like', body: 'oblada' },
    { id: '3', title: 'the Beatles', body: 'life goes on' },
    { id: '4', title: 'that much', body: ' la la lala life goes on' }
  ]
}

const rootReducer = ((state = initState, action) => {
  if (action.type === 'DELETE_POST') {
    let newPosts = state.posts.filter(post => {
      return post.id !== action.id 
    })

    return {
      ...state,
      posts: newPosts
    }
  }
  return state
})

export default rootReducer