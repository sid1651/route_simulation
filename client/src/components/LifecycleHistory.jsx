export default function LifecycleHistory({ history }) {
  if (!history.length) return <p>No lifecycle changes yet</p>;

  return (
    <ul>
      {history.map((h, i) => (
        <li key={i}>
          {h.from} → {h.to} ({new Date(h.changedAt).toLocaleString()})
        </li>
      ))}
    </ul>
  );
}
