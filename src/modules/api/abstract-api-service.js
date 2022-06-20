import axios from "axios";

const _instance = axios.create({
  baseURL: "http://localhost:8080",
});

_instance.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.authorization = `IFC ${token}`;
  }

  return req;
});

const _convertUrl = (urlPattern, pathParams = {}) => {
  Object.entries(pathParams).forEach(
    ([key, value]) => (urlPattern = urlPattern.replace(`{${key}}`, value))
  );
  return urlPattern;
};

const _get = async (urlPattern, pathParams) => {
  try {
    const url = _convertUrl(urlPattern, pathParams);
    const response = await _instance.get(url);
    return response.data;
  } catch (e) {
    throw e.response.data;
  }
};

const _del = async (urlPattern, pathParams) => {
  try {
    const url = _convertUrl(urlPattern, pathParams);
    const response = await _instance.delete(url);
    return response.data;
  } catch (e) {
    throw e.response.data;
  }
};

const _post = async (urlPattern, pathParams, data) => {
  try {
    const url = _convertUrl(urlPattern, pathParams);
    const response = await _instance.post(url, data);
    return response.data;
  } catch (e) {
    throw e.response.data;
  }
};

const _put = async (urlPattern, pathParams, data) => {
  try {
    const url = _convertUrl(urlPattern, pathParams);
    const response = await _instance.put(url, data);
    return response.data;
  } catch (e) {
    throw e.response.data;
  }
};

const _patch = async (urlPattern, pathParams, data) => {
  try {
    const url = _convertUrl(urlPattern, pathParams);
    const response = await _instance.patch(url, data);
    return response.data;
  } catch (e) {
    throw e.response.data;
  }
};

export { _get, _del, _post, _put, _patch };
