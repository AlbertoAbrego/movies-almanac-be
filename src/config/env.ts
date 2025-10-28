import dotenv from "dotenv"

dotenv.config()

export const config = {
    port: process.env.PORT || 5000,
    movieApiKey: process.env.MOVIE_API_KEY || "",
    movieApiToken: process.env.MOVIE_API_TOKEN || "",
}
