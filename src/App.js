import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllGymGoers from "./pages/personal/AllGymGoers.js";
import UserPageForPersonal from "./pages/personal/userPageForPersonal.js";
import NewExercise from "./pages/personal/NewExerciseType.js";
import LogIn from "./pages/Auth/LogIn.js";
import MyPlan from "./pages/GymGoer/MyPlan.js";
import AdmInit from "./pages/Adm/Adm.js";
import NewExerciseType from "./pages/Adm/NewExerciseType.js";
import NewUser from "./pages/Adm/NewUser.js";
import UpdatePass from "./pages/Auth/UpdatePass.js";

import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
        <Route path="/Personal" element={<AllGymGoers/>}/>
        <Route path="/userPageForPersonal/:userId" element={<UserPageForPersonal/>}/>
        <Route path="/newExercise/:userId" element={<NewExercise/>}/>
        <Route path="/" element={<LogIn/>}/>
        <Route path="/Aluno" element={<MyPlan/>}/>
        <Route path="/Adm" element={<AdmInit/>}/>
        <Route path="/novoExercicio" element={<NewExerciseType/>}/>
        <Route path="/novoUsuario/:typeUser" element={<NewUser/>}/>
        <Route path="/novaSenha" element={<UpdatePass/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
} 
export default App;

