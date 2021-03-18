// const getId = () => (100000 * Math.random()).toFixed(0);

import anecdoteService from "../services/anecdote";

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
