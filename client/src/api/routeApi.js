import axiosInstance from "./axiosInstance";

export const simulateRoute = async (payload) => {
  const response = await axiosInstance.post(
    "/routes/simulate",
    payload
  );
  return response.data;
};
