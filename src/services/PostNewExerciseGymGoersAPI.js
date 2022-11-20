import returnError from '../utils/errorUtils';
import api from './api';

export async function postNewExerciseGymGoersAPI(data) {
  const token = localStorage.getItem('token')
  const config = {headers: 
    {
      Authorization: `Bearer ${token}`,
    }
  }
  try{
    const response = await api.post('/newExercises', data, config);
    return response.data;
  }catch(err){
    returnError(err)
  }
}