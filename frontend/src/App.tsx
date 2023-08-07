import { UploadForm } from '@/components/UploadForm';

function App(): JSX.Element {
  return (
    <div
      id="container"
      className="flex flex-col gap-4 p-6 bg-slate-900 w-96 rounded-lg border border-emerald-400"
    >
      <h1 className="text-lg font-bold text-emerald-400">
        Upload arquivo de transações
      </h1>
      <UploadForm />
    </div>
  );
}

export default App;
