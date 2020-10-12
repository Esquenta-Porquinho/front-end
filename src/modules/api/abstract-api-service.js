import axios from "axios";


const _instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  // Your url here
});

_instance.interceptors.request.use(req => {
  const token = localStorage.getItem("token")
  if (token) {
    req.headers.authorization = `Bearer ${token}`;
  }
  return req;
});

// const urlPattern = '/users/{userId}/products/{productId}' ;
// const pathParams = {userId: '111', productId: "222"};
// const url = _convertUrl(urlPattern, pathParams);
// url = 'users/111/products/222
const _convertUrl = (urlPattern, pathParams = {}) => {
  Object
      .entries(pathParams)
      .forEach(([key, value]) => urlPattern = urlPattern.replace(`{${key}}`, value))
  return urlPattern
}


const _get = async (urlPattern, pathParams) => {
  const url = _convertUrl(urlPattern, pathParams)
  return (await _instance.get(url)).data
}

const _del = async (urlPattern, pathParams) => {
  const url = _convertUrl(urlPattern, pathParams)
  return (await _instance.delete(url)).data
}

const _post = async (urlPattern, pathParams, data) => {
  const url = _convertUrl(urlPattern, pathParams)
  return (await _instance.post(url, data)).data
}

const _put = async (urlPattern, pathParams, data) => {
  const url = _convertUrl(urlPattern, pathParams)
  return (await _instance.put(url, data)).data
}

const _patch = async (urlPattern, pathParams, data) => {
  const url = _convertUrl(urlPattern, pathParams)
  return (await _instance.patch(url, data)).data
}

export {
  _get, _del, _post, _put, _patch
}

