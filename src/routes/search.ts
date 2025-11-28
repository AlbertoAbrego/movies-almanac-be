import { Router } from "express"
import { searchService } from "../services/searchService"

const router = Router()

router.get("/:keyword", async (req, res) => {
    try {
        const { keyword } = req.params
        const data = await searchService.getKeyword(keyword)
        res.json(data)
    } catch (error) {
        res.status(500).json({ error: "Failed searching keyword" })
    }
})

router.get("/multi/:query", async (req, res) => {
    try {
        const { query } = req.params
        const data = await searchService.getSearchMulti(query)
        res.json(data)
    } catch (error) {
        res.status(500).json({ error: "Failed fetching search" })
    }
})

export default router
