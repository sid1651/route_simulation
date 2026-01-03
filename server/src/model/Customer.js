import mongoose from "mongoose";

const lifecycleHistorySchema = new mongoose.Schema({
  from: String,
  to: String,
  changedAt: { type: Date, default: Date.now }
});

const customerSchema = new mongoose.Schema({
  name: String,
  email: String,

  state: {
    type: String,
    enum: [
      "LEAD",
      "REGISTERED",
      "SUBSCRIBED",
      "BOOKED",
      "ACTIVE_RIDE",
      "COMPLETED",
      "DROPPED"
    ],
    default: "LEAD"
  },

  lifecycleHistory: [lifecycleHistorySchema]
});

export default mongoose.model("Customer", customerSchema);
