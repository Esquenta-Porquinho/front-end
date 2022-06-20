import { _post } from "@/modules/api/abstract-api-service";

const create = async (data) => {
  return await _post("/users", {}, data);
};

const login = async (data) => {
  const response = await _post("/users/login", {}, data);
  localStorage.setItem("token", response.token);
  return response;
};

export { create, login };
