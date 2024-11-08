import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../app/providers/AuthProvider';

interface AuthGuardProps {
  isPrivate: boolean;
}

export function AuthGuard({ isPrivate }: AuthGuardProps) {
  const { session } = useAuth();

  if (!session && isPrivate) {
    return <Navigate to="/login" replace />;
  }

  if (session && !isPrivate) {
    return <Navigate to="/gov" replace />;
  }

  return <Outlet />;
}
