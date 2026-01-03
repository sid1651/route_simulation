import axiosInstance from "./axiosInstance";

export const getCustomers = async () => {
  const res = await axiosInstance.get("/customers");
  return res.data;
};

export const updateLifecycle = async ({ customerId, nextState }) => {
  const res = await axiosInstance.post("/customers/lifecycle", {
    customerId,
    nextState
  });
  return res.data;
};
