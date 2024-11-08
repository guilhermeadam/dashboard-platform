import { HashRouter, Route, Routes } from 'react-router-dom';
import { Login } from '../view/pages/Login';
import { AuthGuard } from './AuthGuard';
import { Seplag } from '@/view/pages/Seplag';
import { DashoardLayout } from '@/view/layouts/DashboardLayout';
import { Supesp } from '@/view/pages/Supesp';
import { Seas } from '@/view/pages/Seas';
import { Gov } from '@/view/pages/Gov';

export function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<AuthGuard isPrivate />}>
          <Route path="/" element={<DashoardLayout />}>
            <Route path="/gov" element={<Gov />} />
            <Route path="/seplag" element={<Seplag />} />
            <Route path="/supesp" element={<Supesp />} />
            <Route path="/seas" element={<Seas />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}
