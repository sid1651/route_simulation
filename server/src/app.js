import express from "express";
import cors from "cors";
 import routeRoutes from "./routes/route.routes.js";
  import customerRoutes from "./routes/customer.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

 app.use("/api/routes", routeRoutes);
 app.use("/api/customers", customerRoutes);

export default app;
