
import Customer from "../model/Customer.js";
import { validateTransition } from "../services/lifecycle.service.js";




export const createCustomer = async (req, res) => {
  const { name, email } = req.body;

  const customer = await Customer.create({
    name,
    email
  });

  res.status(201).json(customer);
};


export const getCustomers = async (req, res) => {
  const customers = await Customer.find().sort({ createdAt: -1 });
  res.json(customers);
};


export const updateLifecycle = async (req, res) => {
  const { customerId, nextState } = req.body;

  const customer = await Customer.findById(customerId);
  if (!customer) {
    return res.status(404).json({ message: "Customer not found" });
  }

  if (!validateTransition(customer.state, nextState)) {
    return res.status(400).json({
      message: `Invalid transition from ${customer.state} to ${nextState}`
    });
  }

  customer.lifecycleHistory.push({
    from: customer.state,
    to: nextState
  });

  customer.state = nextState;
  await customer.save();

  res.json(customer);
};
