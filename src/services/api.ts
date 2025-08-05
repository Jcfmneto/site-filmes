import axios from 'axios'

const tmdbApiSearch = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  },
})

export default tmdbApiSearch
