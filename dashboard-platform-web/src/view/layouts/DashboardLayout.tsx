import { Separator } from '@/components/ui/separator';
import { Header } from '../pages/Dashboard/Header';
import { Sidebar } from '../pages/Dashboard/Sidebar';
import { Footer } from '../pages/Dashboard/Footer';
import { Outlet } from 'react-router-dom';

export function DashoardLayout() {
  return (
    <main className="flex w-full h-full">
      <Sidebar />
      <div className="flex flex-col h-full w-full">
        <header className="min-h-20 w-full flex justify-between items-center px-6">
          <Header />
        </header>
        <Separator />
        <main className="h-full w-full flex flex-col justify-center items-center overflow-x-none px-6">
          <Outlet />
        </main>
        <Separator />
        <footer className="min-h-10 w-full flex justify-center items-center">
          <Footer />
        </footer>
      </div>
    </main>
  );
}
