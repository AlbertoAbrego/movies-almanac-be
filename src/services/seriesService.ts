import axios from "axios"
import { config } from "../config/env"

const BASE_URL = "https://api.themoviedb.org/3"

export const seriesService = {
    async getPopularSeries() {
        const response = await axios.get(`${BASE_URL}/tv/popular`, {
            params: {
                api_key: config.movieApiKey,
                language: "en-US",
                page: 1,
            },
        })
        return response.data
    },
}
