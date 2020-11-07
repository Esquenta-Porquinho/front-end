import {_post} from "@/modules/api/abstract-api-service";

const create = async (data) => {
  try{
    await _post('/users', {}, data);
    return true;
  }catch{
    return false;
  }
}

const login = async (data) => {
  try {
    let response = await _post('/users/login', {}, data);
    localStorage.setItem('token', response.token);  
    return true;
  }catch{
    return false;
  }
}


export {
  create, login
}
