// const getId = () => (100000 * Math.random()).toFixed(0);

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

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'init_anecdotes',
    data: anecdotes
  }
}

export const incrementVote = (id) => {
  return {
    type: "increment_vote",
    data: { id },
  };
};

export const createAnecdote = (data) => {
  return {
    type: "add_anecdote",
    data,
  };
};

export default anecdoteReducer;
