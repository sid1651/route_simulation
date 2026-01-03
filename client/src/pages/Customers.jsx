import { useEffect, useState } from "react";
import { getCustomers } from "../api/customerApi";
import LifecycleBadge from "../components/LifecycleBadge";
import LifecycleActions from "../components/LifecycleActions";
import LifecycleHistory from "../components/LifecycleHistory";

export default function Customers() {
  const [customers, setCustomers] = useState([]);

  const load = async () => {
    const data = await getCustomers();
    setCustomers(data);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <>
      <h2>Customers</h2>
      {customers.map((c) => (
        <div key={c._id} style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
          <p>{c.name} ({c.email})</p>
          <LifecycleBadge state={c.state} />
          <LifecycleActions customer={c} onUpdate={load} />
          <LifecycleHistory history={c.lifecycleHistory} />
        </div>
      ))}
    </>
  );
}
