import { Router } from "express"
import { seriesService } from "../services/seriesService"

const router = Router()

router.get("/popular", async (_req, res) => {
    try {
        const data = await seriesService.getPopularSeries()
        res.json(data)
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch popular series" })
    }
})

export default router
