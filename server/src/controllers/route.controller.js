import Route from "../models/Route.js";
import { simulateRoute } from "../services/simulation.service.js";

export const createRoute = async (req, res) => {
  try {
    const { name, stops, startTime } = req.body;
    if (!name || !stops || stops.length === 0) {
      return res.status(400).json({ message: "Route name and at least one stop are required." });
    }
    const route = await Route.create({ name, stops, startTime });
    res.status(201).json(route);
  } catch (error) {
    console.error("Error creating route:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

export const simulate = async (req, res) => {
  try {
    const { routeId, delayAtIndex, delayMinutes } = req.body;
    if (!routeId) return res.status(400).json({ message: "routeId is required." });

    const route = await Route.findById(routeId);
    if (!route) return res.status(404).json({ message: "Route not found." });

    const safeDelayIndex = (delayAtIndex >= 0 && delayAtIndex < route.stops.length) ? delayAtIndex : null;
    const timeline = simulateRoute(route, safeDelayIndex, delayMinutes || 0);

    res.status(200).json({
      routeName: route.name,
      originalStartTime: route.startTime,
      timeline
    });
  } catch (error) {
    if (error.name === 'CastError') return res.status(400).json({ message: "Invalid Route ID format." });
    console.error("Simulation Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};