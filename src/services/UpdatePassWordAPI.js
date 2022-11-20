import api from './api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import returnError from '../utils/errorUtils';

export async function updatePassAPI(data) {
  const token = localStorage.getItem('token')
  const config = {headers: 
    {
      Authorization: `Bearer ${token}`,
    }
  }
  try{
    const response = await api.put('/updatePass', data, config);
    toast ('Senha alterada com sucesso, faça o logIn novamente');
    return response.data;
  }catch(err){
    console.log(err)
    toast(returnError(err))
    return(false)
  }
}