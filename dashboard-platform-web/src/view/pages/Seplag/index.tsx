import { useState } from 'react';

const SEPLAG =
  'https://app.powerbi.com/view?r=eyJrIjoiNTBmYjIxYWQtMjkxNy00MWU1LWFjYTEtODVkMWIwYWFhZmI4IiwidCI6IjY5YmViNjk4LWEyNTgtNGVjNi04NDJiLTAzNjBlNDVmNGM1NiJ9&pageName=';

const SEPLAG_OPTIONS = [
  {
    title: 'Visão Geral',
    dashboard: `${SEPLAG}89dece76204857ea06e8`,
  },
  {
    title: 'Composição de Orçamento',
    dashboard: `${SEPLAG}c8f8c447a389bcc8ee80`,
  },
  {
    title: 'Despesas de Pessoal',
    dashboard: `${SEPLAG}247d0a2594b43f7383bd`,
  },
  {
    title: 'Outras Despesas Correntes',
    dashboard: `${SEPLAG}31bb3bb5c4370f64122b`,
  },
  {
    title: 'Investimentos de Estado',
    dashboard: `${SEPLAG}eefdc58abbff5e7b7f71`,
  },
  {
    title: 'Dívida Pública Estadual',
    dashboard: `${SEPLAG}58f92cc889e0919d5382`,
  },
  {
    title: 'Despesas por Função Governamental',
    dashboard: `${SEPLAG}721ac607190077990dfb`,
  },
  {
    title: 'Execução Orçamentária',
    dashboard: `${SEPLAG}a2b35307c3da4b053034`,
  },
];

console.log({ SEPLAG_OPTIONS });

export function Seplag() {
  const [seplagDashboardSelected, setSeplagDashboardSelected] =
    useState('Visão Geral');

  const dash = SEPLAG_OPTIONS.filter(
    (seplag) => seplag.title === seplagDashboardSelected
  );

  return (
    <main className="flex bg-gray gap-2 h-full w-full p-4 m-2 rounded-md bg-slate-100">
      <section className="h-full w-full">
        <iframe src={dash[0].dashboard} className="w-full h-full"></iframe>
      </section>
      <section className="flex flex-col w-52 h-full justify-between items-center">
        <h1 className="font-bold text-2xl text-[#204d37]">Menu SEPLAG</h1>
        <div className="d-none h-[2px] w-full bg-[#204d37] rounded-md" />
        {SEPLAG_OPTIONS.map((seplag) => {
          const isSelected = seplag.title === seplagDashboardSelected;

          return (
            <button
              className={`
              ${isSelected && 'bg-[#00853b] border-c-l-orange'}
              ${isSelected && 'text-white'}
              rounded-sm
              ${isSelected && 'font-b-600'}
              w-full
              ${isSelected ? 'text-white' : 'text-gray-400'}
              p-3  bg-white rounded-sm text-dark-gray border-l-4 border-c-green border-gray- shadow hover:shadow hover:border-orange hover:bg-[#204d37] hover:text-white hover:font-b-600 transition-all`}
              onClick={() => setSeplagDashboardSelected(seplag.title)}
            >
              {seplag.title}
            </button>
          );
        })}
      </section>
    </main>
  );
}
