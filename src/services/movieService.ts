import axios from "axios"
import { config } from "../config/env"

const BASE_URL = "https://api.themoviedb.org/3"

export const movieService = {
    async getPopularMovies() {
        const response = await axios.get(`${BASE_URL}/movie/popular`, {
            params: {
                api_key: config.movieApiKey,
                language: "en-US",
                page: 1,
            },
        })
        return response.data
    },
    async searchMovies(query: string) {
        const response = await axios.get(`${BASE_URL}/search/movie`, {
            params: {
                api_key: config.movieApiKey,
                query,
                language: "en-US",
                page: 1,
            },
        })
        return response.data
    },
}
