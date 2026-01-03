import { updateLifecycle } from "../api/customerApi";

const transitions = {
  LEAD: ["REGISTERED", "DROPPED"],
  REGISTERED: ["SUBSCRIBED", "DROPPED"],
  SUBSCRIBED: ["BOOKED", "DROPPED"],
  BOOKED: ["ACTIVE_RIDE", "DROPPED"],
  ACTIVE_RIDE: ["COMPLETED", "DROPPED"],
  COMPLETED: ["DROPPED"],
  DROPPED: []
};

export default function LifecycleActions({ customer, onUpdate }) {
  return (
    <>
      {transitions[customer.state].map((next) => (
        <button
          key={next}
          onClick={async () => {
            await updateLifecycle({
              customerId: customer._id,
              nextState: next
            });
            onUpdate();
          }}
        >
          {next}
        </button>
      ))}
    </>
  );
}
