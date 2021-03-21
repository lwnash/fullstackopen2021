// const getId = () => (100000 * Math.random()).toFixed(0);

import anecdoteService from "../services/anecdote";
// const initialState = [...]
// [12,3,4] const count = a.reducer(a,cur => a+ cur )
const anecdoteReducer = (state = [], action) => {
  //console.log("action", action);
  switch (action.type) {
    case 'init_anecdotes':
      return action.data
    case "increment_vote":
      const id = action.data.id;
      const voteForAnecdote = state.find((anecdote) => id === anecdote.id);
      const votedAnecdote = {
        ...voteForAnecdote,
        votes: voteForAnecdote.votes + 1,
      };

      return state.map((anecdote) =>
        anecdote.id !== id ? anecdote : votedAnecdote
      );

    case "add_anecdote":
      return [...state, action.data];

    default:
      return state;
  }
};
/**
 * const userData = await axios.get(url)
 * dispatch(userData) => store => useSelector(state)
 * dispatch({
 *  type: 'updateUser',
 *  payload: userData.data
 * })
 */
//action creator reducer
// do something and dispatch
export const initializeAnecdotes = () => {
  return async dispatch => {
  const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'init_anecdotes',
      data: anecdotes
    })
  }
}

export const incrementVote = (id, anecdote) => {
  return async dispatch => {
    const votingAnecdote = await anecdoteService.voting(id, anecdote)
    dispatch({
      type: 'increment_vote',
      data: votingAnecdote
    })
  }
};
// 中间件 thunk 检测 dispatch 是一个 action 或者 function
export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'add_anecdote',
      data: newAnecdote
    })
  }
};

export default anecdoteReducer;
