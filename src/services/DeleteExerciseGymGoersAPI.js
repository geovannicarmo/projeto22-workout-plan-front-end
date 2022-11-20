import api from './api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import returnError from '../utils/errorUtils';

export async function deleteExerciseGymGoersAPI(data) {
  const token = localStorage.getItem('token')
  const config = {headers: 
    {
      Authorization: `Bearer ${token}`,
    }
  }
  try{
    const response = await api.delete(`/deleteExercises/${data}`, config);
    toast ('Atividade apagada.');
    return response.data;
  }catch(err){
    toast(returnError(err))
  }
}