import { UploadTransactionFileResponse } from '@/models/upload-transacions-file';

export type UseUploadTransactionsFileReturn = [
  (file: File) => Promise<UploadTransactionFileResponse | null>,
  { loading: boolean; erro: string | undefined },
];
