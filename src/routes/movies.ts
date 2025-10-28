import { Router } from "express"
import { movieService } from "../services/movieService"

const router = Router()

router.get("/popular", async (_req, res) => {
    try {
        const data = await movieService.getPopularMovies()
        res.json(data)
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch popular movies" })
    }
})

router.get("/search", async (req, res) => {
    const query = req.query.q as string
    if (!query) return res.status(400).json({ error: "Missing search query" })
    try {
        const data = await movieService.searchMovies(query)
        res.json(data)
    } catch (error) {
        res.status(500).json({ error: "Failed to search movies" })
    }
})

export default router
