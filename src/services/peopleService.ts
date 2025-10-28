import axios from "axios"
import { config } from "../config/env"

const BASE_URL = "https://api.themoviedb.org/3"

export const peopleService = {
    async getPopularPeople() {
        const response = await axios.get(`${BASE_URL}/person/popular`, {
            params: {
                api_key: config.movieApiKey,
                language: "en-US",
                page: 1,
            },
        })
        return response.data
    },
}
