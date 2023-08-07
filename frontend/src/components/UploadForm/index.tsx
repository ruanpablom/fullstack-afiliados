import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  UploadFormValues,
  uploadFormSchema,
} from '@/schemas/upload-form-schema';
import { Input } from '@/components/Input';

export function UploadForm(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UploadFormValues>({
    resolver: zodResolver(uploadFormSchema),
  });

  const onSubmit = (data: UploadFormValues) => {
    console.info(data.file[0]);
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
