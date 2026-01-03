import express from "express";
import { createCustomer, getCustomers, updateLifecycle } from "../controllers/customer.controller.js";

const router = express.Router();

router.post("/lifecycle", updateLifecycle);
router.post("/", createCustomer);          
router.get("/", getCustomers);  

export default router;
