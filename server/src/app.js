import express from "express";
import cors from "cors";
import routeRoutes from "./routes/route.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/routes", routeRoutes);

export default app;
