import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementVote } from "../reducers/anecdoteReducer";
import {  setNotification } from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector(({anecdote, notification, filterField}) => {
    const filterAnecdote = anecdote.filter((anecdote) =>
      anecdote.content.toLowerCase().includes(filterField.toLowerCase())
    );
    return filterAnecdote.sort((a, b) => (a.votes < b.votes ? 1 : -1));
  });
  
  const dispatch = useDispatch();

  const vote = (id) => {

    const votingAnecdote = anecdotes.find((anecdote) => anecdote.id === id);
    dispatch(incrementVote(id, votingAnecdote));

    // 消息队列？
    dispatch(setNotification(`you voted '${votingAnecdote.content}'`, 5))
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
