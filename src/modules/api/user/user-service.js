import { _get, _put, _patch, _del } from "@/modules/api/abstract-api-service";
import { getCurrentUserId } from "@/modules/common/token-service";

const update = async (data) => {
  const userId = await getCurrentUserId();
  return await _put(`/users/${userId}`, {}, data);
};

const updateRole = async (userId, data) => {
  return await _patch(`/users/${userId}/role`, {}, data);
};

const updateStatus = async (userId, data) => {
  return await _patch(`/users/${userId}/status`, {}, data);
};

const deleteUser = async (userId) => {
  return await _del(`/users/${userId}`, {});
};

const getAllUsers = async (params) => {
  return await _get("/users?page={page}&size={size}", params);
};

const getUserRequests = async (params) => {
  return await _get("/users/requests?page={page}&size={size}", params);
};

const getCurrentUser = async () => {
  const userId = await getCurrentUserId();
  return await _get(`/users/${userId}`, {});
};

const getUserById = async (userId) => {
  return await _get(`/users/${userId}`, {});
};

const getUserLogs = async (userId) => {
  return await _get(`/users/${userId}/logs`, {});
};

export {
  update,
  updateRole,
  updateStatus,
  deleteUser,
  getCurrentUser,
  getUserById,
  getUserLogs,
  getAllUsers,
  getUserRequests,
};
