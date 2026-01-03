const colors = {
  LEAD: "gray",
  REGISTERED: "blue",
  SUBSCRIBED: "purple",
  BOOKED: "orange",
  ACTIVE_RIDE: "green",
  COMPLETED: "darkgreen",
  DROPPED: "red"
};

export default function LifecycleBadge({ state }) {
  return (
    <span
      style={{
        padding: "4px 8px",
        borderRadius: "6px",
        background: colors[state],
        color: "white"
      }}
    >
      {state}
    </span>
  );
}
