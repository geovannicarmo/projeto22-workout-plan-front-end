import api from './api';
import returnError from '../utils/errorUtils';
import { toast } from 'react-toastify';


export async function PostNewExeciseTypeAPI(data) {
  const token = localStorage.getItem('token')
  const config = {headers: 
    {
      Authorization: `Bearer ${token}`,
    }
  }
  try{
    const response = await api.post('/newExercisesType', data, config);
    toast('Exercício cadastrado com sucesso.');
    return response.data;
  }catch(err){
    returnError(err)
    return(false)
  }
}