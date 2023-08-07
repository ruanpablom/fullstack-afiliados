import * as z from 'zod';

const ACCEPTED_FILE_TYPES = ['text/plain'];

export const uploadFormSchema = z.object({
  file: z.custom<FileList>().superRefine((files, ctx) => {
    if (files.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'File must be provided',
      });
      return false;
    }

    if (!ACCEPTED_FILE_TYPES.includes(files[0].type)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'File must be a .txt',
      });
      return false;
    }

    if (files[0].size > 1024 * 1024 * 5) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'File must be less than 5MB',
      });
      return false;
    }

    return true;
  }),
});

export type UploadFormValues = z.infer<typeof uploadFormSchema>;
