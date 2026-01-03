import mongoose from "mongoose";

const stopSchema = new mongoose.Schema({
  type: { type: String, enum: ["PICKUP", "DROP"], required: true },
  location: String,
  eta: Number 
});

const routeSchema = new mongoose.Schema({
  name: String,
  stops: [stopSchema],
  startTime: Number, 
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Route", routeSchema);
