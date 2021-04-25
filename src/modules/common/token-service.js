import jwt_decode from "jwt-decode";

const decodeJWT = () => {
  const token = localStorage.getItem("token");
  return jwt_decode(token);
};

const logout = () => {
  localStorage.clear();
};

const getCurrentUserRole = () => {
  return decodeJWT().role[0];
};

const getCurrentUserId = () => {
  return decodeJWT().id;
};

export { getCurrentUserRole, getCurrentUserId, logout };
