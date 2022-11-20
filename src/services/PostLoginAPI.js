import api from './api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import returnError from '../utils/errorUtils';

export async function postLoginAPI(data){
    try{
        const response = await api.post(`./singIn`, data);
        toast ('LogIn realizado.');
        return response.data;
    }catch(err){
        
        returnError(err)
    }
}