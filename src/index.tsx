import ReactDOM from 'react-dom/client';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import MainPage from './pages/MainPage/MainPage';
import Ration from './pages/Ration/Ration';
import Workout from './pages/Workout/Workout';
import './main.scss'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Workout />
);
