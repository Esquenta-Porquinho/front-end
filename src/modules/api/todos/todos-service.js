import {_get, _post} from "@/modules/api/abstract-api-service";


const getById = async (id) => {
  return await _get('/todos/{id}', {id})
}

const create = async (data) => {
  return await _post('/todos', {}, data)
}


export {
  getById, create
}
