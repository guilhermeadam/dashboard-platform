import AuthProvider from './app/providers/AuthProvider';
import { Router } from './Router';

export function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}
