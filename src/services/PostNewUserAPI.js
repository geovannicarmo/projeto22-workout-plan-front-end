import api from './api';
import returnError from '../utils/errorUtils';
import { toast } from 'react-toastify';

export async function PostNewUserAPI(data) {
  const token = localStorage.getItem('token')
  const config = {headers: 
    {
      Authorization: `Bearer ${token}`,
    }
  }
  try{
    const response = await api.post('/newUser', data, config);
    toast('Usuário cadastrado com sucesso.');
    return response.data;
  }catch(err){
    returnError(err)
    return false;
  }
}