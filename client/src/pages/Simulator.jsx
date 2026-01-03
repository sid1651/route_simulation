import { useState } from "react";
import { simulateRoute } from "../api/routeApi";
import Timeline from "../components/Timeline";
// import Timeline from "../components/Timeline";

export default function Simulator() {
  const [timeline, setTimeline] = useState([]);

  const runSimulation = async () => {
    const data = await simulateRoute({
      routeId: "PUT_ROUTE_ID_HERE",
      delayAtIndex: 1,
      delayMinutes: 5
    });
    setTimeline(data);
  };

  return (
    <>
      <button onClick={runSimulation}>Run Simulation</button>
      <Timeline timeline={timeline} />
    </>
  );
}
