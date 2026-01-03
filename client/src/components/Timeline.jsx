export default function Timeline({ timeline }) {
  return (
    <ul>
      {timeline.map((stop, i) => (
        <li key={i}>
          {stop.stopType} - {stop.location} - ETA {stop.eta}
        </li>
      ))}
    </ul>
  );
}
