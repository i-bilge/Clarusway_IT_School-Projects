import './App.css';
import AppRouter from './router/Router';
import AuthContextProvider from './context/AuthContext';
import { useState } from 'react';

function App() {
  const [userInfo, setUserInfo] = useState({
    title: "",
    url: "",
    explanation: "",
  });
  const [isEdit, setIsEdit] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  return (
    <AuthContextProvider>
      <AppRouter userInfo={userInfo} setUserInfo={setUserInfo} isEdit={isEdit} setIsEdit={setIsEdit} isLoading={isLoading} setIsLoading={setIsLoading}/>
    </AuthContextProvider>
  );
}

export default App;