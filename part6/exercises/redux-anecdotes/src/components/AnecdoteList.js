import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementVote } from "../reducers/anecdoteReducer";
import { setMessage, clearMessage } from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector(({anecdote, notification, filterField}) => {
    const filterAnecdote = anecdote.filter((anecdote) =>
      anecdote.content.toLowerCase().includes(filterField.toLowerCase())
    );
    return filterAnecdote.sort((a, b) => (a.votes < b.votes ? 1 : -1));
  });
  
  const dispatch = useDispatch();

  const vote = (id) => {
    dispatch(incrementVote(id));

    const anecdote = anecdotes.find((anecdote) => anecdote.id === id);

    // 消息队列？
    setTimeout(() => {
      dispatch(clearMessage(null));
    }, 5000);
    dispatch(setMessage(`you voted '${anecdote.content}'`));
  };

  return (
    <div>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;
