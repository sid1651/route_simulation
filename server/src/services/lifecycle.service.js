const allowedTransitions = {
  LEAD: ["REGISTERED", "DROPPED"],
  REGISTERED: ["SUBSCRIBED", "DROPPED"],
  SUBSCRIBED: ["BOOKED", "DROPPED"],
  BOOKED: ["ACTIVE_RIDE", "DROPPED"],
  ACTIVE_RIDE: ["COMPLETED", "DROPPED"],
  COMPLETED: ["DROPPED"],
  DROPPED: []
};

export const validateTransition = (from, to) => {
  return allowedTransitions[from]?.includes(to);
};
