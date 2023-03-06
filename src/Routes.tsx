import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { TesteDash } from './pages/TesteDash';

export const AppRoutes = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/test-dashboard' element={<TesteDash />} />
      </Routes>
    </BrowserRouter>
  )
}