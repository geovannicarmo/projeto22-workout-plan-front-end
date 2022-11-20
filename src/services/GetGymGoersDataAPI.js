import returnError from '../utils/errorUtils';
import api from './api';


export default async function getGymGoersDataAPI(gymGoersId) {
  const token = localStorage.getItem('token')

  const config = {headers: 
    {
      Authorization: `Bearer ${token}`,
    }
  }
  try{
    const response = await api.get(`/eachGymGoer/${gymGoersId}`, config);
    return response.data;
  }catch(err){
    returnError(err)
  }
}