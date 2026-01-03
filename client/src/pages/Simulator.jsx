import { useEffect, useState } from "react";
import { getRoutes, simulateRoute } from "../api/routeApi";
import Timeline from "../components/Timeline";

export default function Simulator() {
  const [routes, setRoutes] = useState([]);
  const [routeId, setRouteId] = useState("");
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    getRoutes().then(setRoutes);
  }, []);

  const runSimulation = async () => {
  if (!routeId) return alert("Select a route first");

  try {
    const response = await simulateRoute({
      routeId,
      delayAtIndex: 1,
      delayMinutes: 5
    });

    
    const result = response.timeline ? response.timeline : response;
    setTimeline(result); 

  } catch (err) {
    console.error(err);
    alert("Simulation failed");
  }
};

  return (
    <>
      <select onChange={(e) => setRouteId(e.target.value)}>
        <option value="">Select Route</option>
        {routes.map((r) => (
          <option key={r._id} value={r._id}>
            {r.name}
          </option>
        ))}
      </select>

      <button onClick={runSimulation}>Run Simulation</button>

      <Timeline timeline={timeline} />
    </>
  );
}
