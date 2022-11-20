import api from './api';
import returnError from '../utils/errorUtils';

export async function GetExerciseCategory() {
  const token = localStorage.getItem('token')

  const config = {headers: 
    {
      Authorization: `Bearer ${token}`,
    }
  }
  try{
    const response = await api.get(`/exerciseCategory`, config);
    return response.data;
  }catch(err){
    returnError(err)
  }
}