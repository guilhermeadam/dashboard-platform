import { supabase } from '@/app/services/supabase';
import { useAuth } from '../../../../app/providers/AuthProvider';
import { BellDot, ChevronsUpDown, Lock, LogOut, User } from 'lucide-react';

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@/components/ui/popover';

import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

export function Header() {
  const { session } = useAuth();

  return (
    <>
      <div>
        <h1 className="font-bold capitalize">
          Olá {session?.user.email?.split('@')[0]}
        </h1>
        <span className="text-gray-400">Let's make a new future</span>
      </div>

      <div className="flex h-full gap-2 items-center justify-center">
        <Separator orientation="vertical" />
        <Popover>
          <PopoverTrigger className="flex gap-2 items-center">
            <div className="w-11 h-11">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbiUyMGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
                alt="Avatar"
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col justify-center items-start">
              <strong>{session?.user.email}</strong>
              <p className="text-sm text-zinc-400">Governador</p>
            </div>
            <ChevronsUpDown />
            <PopoverContent className="mt-6 flex flex-col">
              <section className="flex items-center gap-2 p-4 cursor-not-allowed hover:bg-gray-50">
                <User />
                <h4 className="font-medium leading-none">
                  Perfil
                  <Badge variant="secondary" className="ml-2">
                    <Lock size={14} />
                  </Badge>
                </h4>
              </section>
              <section className="flex items-center gap-2 p-4 cursor-not-allowed hover:bg-gray-50">
                <BellDot />
                <h4 className="font-medium leading-none">
                  Notificações
                  <Badge variant="secondary" className="ml-2">
                    <Lock size={14} />
                  </Badge>
                </h4>
              </section>
              <Separator />

              <section
                className="flex items-center gap-2 p-4 cursor-pointer hover:bg-gray-50"
                onClick={() => supabase.auth.signOut()}
              >
                <LogOut />
                <h4 className="font-medium leading-none">Sair</h4>
              </section>
            </PopoverContent>
          </PopoverTrigger>
        </Popover>
      </div>
    </>
  );
}
