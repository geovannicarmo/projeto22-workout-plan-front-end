import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function returnError(err){
    console.log(err)
    
    if(!err.response || err.response.status===500){
        return toast('Tente novamente mais tarde')
    }
    if(err.response.status===401 || err.response.status===409){
        return toast(err.response.data)
    }
    if(err.response.status===422){
        return err.response.data.map(value=>toast(value))
    }
}