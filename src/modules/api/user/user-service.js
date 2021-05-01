import { _get, _put, _patch } from "@/modules/api/abstract-api-service";
import { getCurrentUserId } from "@/modules/common/token-service";

const update = async (data) => {
  const userId = await getCurrentUserId();
  return await _put(`/users/${userId}`, {}, data);
};

const updateRole = async (userId, data) => {
  return await _patch(`/users/${userId}/role/`, {}, data);
};

const getAllUsers = async () => {
  return await _get("/users/admin", {});
};

const getAllUsersNotAdmin = async () => {
  return await _get("/users", {});
};

const getCurrentUser = async () => {
  const userId = await getCurrentUserId();
  return await _get(`/users/${userId}`, {});
};

const getUserLogs = async (userId) => {
  return await _get(`/users/${userId}/logs`, {});
};

export {
  update,
  updateRole,
  getCurrentUser,
  getUserLogs,
  getAllUsers,
  getAllUsersNotAdmin,
};
