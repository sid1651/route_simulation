import axiosInstance from "./axiosInstance";

export const simulateRoute = async (payload) => {
  const response = await axiosInstance.post(
    "/routes/simulate",
    payload
  );
  return response.data;
};

export const getRoutes = async () => {
  const response = await axiosInstance.get("/routes");
  return response.data.timeline || response.data;
}   
