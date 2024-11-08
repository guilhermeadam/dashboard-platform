import { useState } from 'react';

const SUPESP_OPTIONS = [
  {
    title: 'Crimes Sexuais',
    dashboard:
      'https://app.powerbi.com/view?r=eyJrIjoiMGEzMTg4YWQtNjI1MS00N2RiLWFhMDItYjYxNTY5NDk3YzhkIiwidCI6IjhkMzhjMWYzLTUwM2QtNDVhNi05MDJlLWJiMThiNmZkNzcwZiJ9',
  },
  {
    title: 'CVLI',
    dashboard:
      'https://app.powerbi.com/view?r=eyJrIjoiZmFiMGNjYmQtZGIzMy00NTkxLTljYzMtYTUxMjI0NzNiNjc4IiwidCI6IjhkMzhjMWYzLTUwM2QtNDVhNi05MDJlLWJiMThiNmZkNzcwZiJ9',
  },
  {
    title: 'Apreensão de Armas de Fogo',
    dashboard:
      'https://app.powerbi.com/view?r=eyJrIjoiOGFhZDMxNWItZThkYS00NjdjLWFjOGQtMTJkYTQ0NjhkNGY4IiwidCI6IjhkMzhjMWYzLTUwM2QtNDVhNi05MDJlLWJiMThiNmZkNzcwZiJ9',
  },
  {
    title: 'Furto',
    dashboard:
      'https://app.powerbi.com/view?r=eyJrIjoiODIzN2NhOTktMGRlNi00ZDhjLWFhNDEtNmJlZmRmOTIwN2Q2IiwidCI6IjhkMzhjMWYzLTUwM2QtNDVhNi05MDJlLWJiMThiNmZkNzcwZiJ9',
  },
  {
    title: 'Apreensão de Entorpecentes',
    dashboard:
      'https://app.powerbi.com/view?r=eyJrIjoiNzU2Yjk0NmItYzM3Mi00YWNlLTlhYzktNjZjMjc1NThkYTM1IiwidCI6IjhkMzhjMWYzLTUwM2QtNDVhNi05MDJlLWJiMThiNmZkNzcwZiJ9',
  },
  {
    title: 'CVP',
    dashboard:
      'https://app.powerbi.com/view?r=eyJrIjoiYmFmMTI2OWYtMzg4Zi00NjE0LTg1YTktYzg5NTE3MTRjMmIzIiwidCI6IjhkMzhjMWYzLTUwM2QtNDVhNi05MDJlLWJiMThiNmZkNzcwZiJ9',
  },
  {
    title: 'Lei 11.340/2006 – Mª da Penha',
    dashboard:
      'https://app.powerbi.com/view?r=eyJrIjoiYThkMmE3NmQtNjA5ZC00ZGQ3LThhMWQtODc1MWNhMDUzNDhkIiwidCI6IjhkMzhjMWYzLTUwM2QtNDVhNi05MDJlLWJiMThiNmZkNzcwZiJ9',
  },
  {
    title: 'Feminicídio',
    dashboard:
      'https://app.powerbi.com/view?r=eyJrIjoiMjQ4MDcwMjQtZGRmZi00NjUwLThhMWQtOTI4YmQwYTM4MmRjIiwidCI6IjhkMzhjMWYzLTUwM2QtNDVhNi05MDJlLWJiMThiNmZkNzcwZiJ9',
  },
  {
    title: 'Homofobia e Transfobia',
    dashboard:
      'https://lookerstudio.google.com/reporting/d8575fed-846e-42ac-959e-107aeb894ff8/page/p_wqfsgqtecd',
  },
  {
    title: 'Busca e Salvamento',
    dashboard:
      'https://app.powerbi.com/view?r=eyJrIjoiNDQ2OTk3ZWYtMzg4ZS00MWE0LWJiY2EtNTZmMzI5NWYzOGMxIiwidCI6IjhkMzhjMWYzLTUwM2QtNDVhNi05MDJlLWJiMThiNmZkNzcwZiJ9',
  },
  {
    title: 'Incêndios',
    dashboard:
      'https://app.powerbi.com/view?r=eyJrIjoiYjU1ZGU4ZDAtMTAzOS00ZTA3LWI0MGMtYmZhMWUxZGE3MmUyIiwidCI6IjhkMzhjMWYzLTUwM2QtNDVhNi05MDJlLWJiMThiNmZkNzcwZiJ9',
  },
  {
    title: 'Indígenas Vítimas de Crimes',
    dashboard:
      'https://app.powerbi.com/view?r=eyJrIjoiMWZkNTg1NTYtN2U1NC00MjQxLWI3MmQtODcxNzRlMjgyYjBjIiwidCI6IjhkMzhjMWYzLTUwM2QtNDVhNi05MDJlLWJiMThiNmZkNzcwZiJ9',
  },
];

export function Supesp() {
  const [supespDashboardSelected, setSupespDashboardSelected] =
    useState('Crimes Sexuais');

  const dash = SUPESP_OPTIONS.filter(
    (supesp) => supesp.title === supespDashboardSelected
  );

  return (
    <main className="flex bg-gray gap-2 h-full w-full p-4 m-2 rounded-md bg-slate-100">
      <section className="h-full w-full">
        <iframe src={dash[0].dashboard} className="w-full h-full"></iframe>
      </section>
      <section className="flex flex-col w-52 h-full justify-between items-center">
        <h1 className="font-bold text-2xl text-[#204d37]">Menu SUPESP</h1>
        <div className="h-[2px] w-full bg-[#204d37] rounded-md" />
        {SUPESP_OPTIONS.map((supesp) => {
          const isSelected = supesp.title === supespDashboardSelected;

          return (
            <button
              className={`
              ${isSelected && 'bg-[#00853b] border-c-l-orange'}
              ${isSelected && 'text-white'}
              rounded-sm
              ${isSelected && 'font-b-600'}
              w-full
              ${isSelected ? 'text-white' : 'text-gray-400'}
              p-3 mg-t-8 fonte-s-15 bg-white rounded-sm text-dark-gray border-l-4 border-c-green border-gray- shadow hover:shadow hover:border-orange hover:bg-[#204d37] hover:text-white hover:font-b-600 transition-all`}
              onClick={() => setSupespDashboardSelected(supesp.title)}
            >
              {supesp.title}
            </button>
          );
        })}
      </section>
    </main>
  );
}
