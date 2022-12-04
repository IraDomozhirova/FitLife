import { Route, Routes } from "react-router-dom"
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import MainPage from './pages/MainPage/MainPage';
import Ration from './pages/Ration/Ration';
import Workout from './pages/Workout/Workout';
import Profile from "./pages/Profile/Profile";
import { useDispatch, useSelector } from "react-redux";
import { userFetched } from "./store/UserSlice";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebaseApp from "./utils/firabase";
import { useEffect } from "react";

export function App() {
    const dispatch = useDispatch();
    // @ts-ignore
    const {user} = useSelector(state => state.user)

    const authStateChanged = (user:any) => {
        dispatch(userFetched(user))
      }

      useEffect(() => {
        onAuthStateChanged(getAuth(firebaseApp), authStateChanged)
      }, [])
      
  return (
    <Routes>
      <Route path="/" element={<MainPage currentUser={user}/>} />
      <Route path="/registration" element={<Registration currentUser={user}/>} />
      <Route path="/signIn" element={<Login currentUser={user}/>} />
      <Route path="/ration" element={<Ration currentUser={user}/>} />
      <Route path="/workout" element={<Workout currentUser={user}/>} />
      <Route path="/profile" element={<Profile currentUser={user}/>} />
    </Routes>
  )
}