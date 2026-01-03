import express from "express";
import { createRoute, simulate } from "../controllers/route.controller.js";

const router = express.Router();

router.post("/", createRoute);
router.post("/simulate", simulate);

export default router;
