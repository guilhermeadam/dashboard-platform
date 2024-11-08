export function Seas() {
  return (
    <main className="flex bg-gray gap-2 h-full w-full p-4 m-2 rounded-md bg-slate-100">
      <section className="h-full w-full p-4 m-2 rounded-md bg-slate-100">
        <iframe
          src="https://app.powerbi.com/view?r=eyJrIjoiMGFiMzRlMmUtZTJkZC00YjczLThmMDMtZDBlZjY1M2Y4ZTI3IiwidCI6ImI2ODgzOWUzLTI1MjgtNDIxOC04ZTYxLTNhZDE5Mjc1YTU2ZCJ9"
          className="w-full h-full"
          allowFullScreen={true}
        ></iframe>
      </section>
    </main>
  );
}
