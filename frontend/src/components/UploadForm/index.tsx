import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  UploadFormValues,
  uploadFormSchema,
} from '@/schemas/upload-form-schema';
import { Input } from '@/components/Input';
import { useUploadTransactionsFile } from '@/services/upload-transactions-file';

export function UploadForm(): JSX.Element {
  const [uploadTransactionsFile, { loading, erro }] =
    useUploadTransactionsFile();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UploadFormValues>({
    resolver: zodResolver(uploadFormSchema),
  });

  const onSubmit = (data: UploadFormValues) => {
    uploadTransactionsFile(data.file[0]).then(result => console.info(result));
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <Input
        id="file"
        label="Arquivo:"
        type="file"
        multiple={false}
        {...register('file')}
        errors={errors.file}
      />
      <input
        className="mr-auto bg-emerald-400 text-slate-900 font-semibold px-2 py-1 rounded-sm cursor-pointer hover:bg-emerald-300"
        type="submit"
        value="Enviar"
      />
    </form>
  );
}
