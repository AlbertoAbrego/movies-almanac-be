import axios from "axios"
import { config } from "../config/env"

const BASE_URL = "https://api.themoviedb.org/3"

export const searchService = {
    async getKeyword(querySearch: string) {
        const response = await axios.get(`${BASE_URL}/search/keyword`, {
            params: {
                api_key: config.movieApiKey,
                query: querySearch,
                language: "en_US",
                page: 1,
            },
        })
        return response.data
    },
    async getSearchMulti(querySearch: string) {
        const response = await axios.get(`${BASE_URL}/search/multi`, {
            params: {
                api_key: config.movieApiKey,
                query: querySearch,
                language: "en-US",
                page: 1,
            },
        })
        return response.data
    },
}
