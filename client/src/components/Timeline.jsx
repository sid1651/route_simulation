export default function Timeline({ timeline }) {
  // 1. Only log if the array actually has data to avoid console clutter
  if (timeline && timeline.length > 0) {
    console.log("Timeline updated with data:", timeline);
  }

  if (!timeline || !Array.isArray(timeline) || timeline.length === 0) {
    return <p>No simulation data. Please select a route and run simulation.</p>;
  }

  return (
    <ul>
      {timeline.map((stop, i) => (
        <li key={i}>
          {stop.stopType}: {stop.location} (ETA: {stop.eta} mins)
        </li>
      ))}
    </ul>
  );
}