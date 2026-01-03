import express from "express";
import { createRoute, getAllRoutes, simulate } from "../controllers/route.controller.js";

const router = express.Router();

router.post("/", createRoute);
router.post("/simulate", simulate);
router.get("/", getAllRoutes);

export default router;
