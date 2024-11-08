import { useState } from 'react';
import { supabase } from '../../../app/services/supabase';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function Login() {
  const [loading, setLoading] = useState(false);

  async function handleLoginWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: 'governador@casacivil.com.br',
      password: '12345678Ab',
    });

    if (error) {
      alert('Erro ao logar...');
    }
    setLoading(false);
  }

  return (
    <main className="flex justify-end w-full h-full bg-[url('/src/assets/illustration.png')]">
      <div className="flex justify-center w-96 h-96 rounded-b-3xl mr-48 bg-[#f9f9f9] p-4">
        <section className="flex flex-col items-center">
          <h4 className="font-bold text-2xl text-[#414141] mb-8">
            Dashboard Platform
          </h4>
          <span className="mr-auto">Usuário</span>
          <Input
            placeholder="governador@casacivil.com.br"
            type="email"
            className="mb-4"
            disabled
          />
          <span className="mr-auto">Senha</span>
          <Input placeholder="*********" disabled type="password" />
          <Button
            onClick={handleLoginWithEmail}
            className="mt-8 w-full bg-[#148122] hover:bg-[#083d0e]"
            size="lg"
          >
            <strong className="text-lg">
              {loading ? 'Carregando...' : 'Entrar'}
            </strong>
          </Button>
        </section>
      </div>
    </main>
  );
}
