import api from './api';
import returnError from '../utils/errorUtils';

export async function GetMyExercisesAPI() {
  const token = localStorage.getItem('token')

  const config = {headers: 
    {
      Authorization: `Bearer ${token}`,
    }
  }
  try{
    const response = await api.get('/myExercises', config);
    return response.data.Exercises;
  }catch(err){
    returnError(err)
  }
}