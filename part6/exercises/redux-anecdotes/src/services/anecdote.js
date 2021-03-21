import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

const createNew = async (content) => {
  const obj = {content, votes: 0}
  const res = await axios.post(baseUrl, obj)
  return res.data
}
// service
// async await const a = promise.then(newPromise.then())
const voting = async (id, votingAnectode) => {
  const res = await axios.put(`${baseUrl}/${id}`, votingAnectode)
  return res.data
}

const anecdoteService = {
  getAll,
  createNew,
  voting
}

export default anecdoteService