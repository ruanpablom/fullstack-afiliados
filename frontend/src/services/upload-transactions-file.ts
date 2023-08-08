import { useCallback, useState } from 'react';
import { AxiosError } from 'axios';
import { UploadTransactionFileResponse } from '@/models/upload-transacions-file';
import { baseService } from './base-service';
import { UseUploadTransactionsFileReturn } from './types';

export function useUploadTransactionsFile(): UseUploadTransactionsFileReturn {
  const [loading, setLoading] = useState<boolean>(false);
  const [erro, setErro] = useState<string | undefined>(undefined);

  const uploadTransactionsFile = useCallback(async (file: File) => {
    try {
      setLoading(true);
      const { data: result } =
        await baseService.post<UploadTransactionFileResponse>(
          'transactions/upload',
          {
            file,
          },
          { headers: { 'Content-Type': 'multipart/form-data' } },
        );

      return result;
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      setErro(error.response?.data.message);
      throw error.response?.data.message;
    } finally {
      setLoading(false);
    }
  }, []);

  return [uploadTransactionsFile, { loading, erro }];
}
