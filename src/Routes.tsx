import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { PlayerRegistration } from './pages/PlayerRegistration';
import { SignUp } from './pages/SignUp';

export const AppRoutes = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/add-player' element={<PlayerRegistration />} />
      </Routes>
    </BrowserRouter>
  )
}