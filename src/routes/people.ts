import { Router } from "express"
import { peopleService } from "../services/peopleService"

const router = Router()

router.get("/popular", async (_req, res) => {
    try {
        const data = await peopleService.getPopularPeople()
        res.json(data)
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch popular people" })
    }
})

export default router
