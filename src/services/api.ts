import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;

export const tmdbApiSearch = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${apiKey}`
  }
});

export const tmdbApiMovies = axios.create({
  baseURL: "https://api.themoviedb.org/3/discover/movie",
  headers: {
    Authorization: `Bearer ${apiKey}`
  }
})

export const imageUrl = "https://image.tmdb.org/t/p/w500"