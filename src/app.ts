import express from "express"
import cors from "cors"
import movieRoutes from "./routes/movies"
import seriesRoutes from "./routes/series"
import peopleRoutes from "./routes/people"

export const app = express()

const allowedOrigins = ["http://localhost:5173, *"]

app.use(
    cors({
        origin: (origin, callback) => {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true)
            } else {
                callback(new Error("CORS policy: This origin is not allowed"))
            }
        },
    })
)
app.use(express.json())
app.use("/api/movies", movieRoutes)
app.use("/api/series", seriesRoutes)
app.use("/api/people", peopleRoutes)
