import { forwardRef, InputHTMLAttributes, Ref } from 'react';
import { FieldError } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errors?: FieldError;
}

export const Input = forwardRef(
  ({ label, errors, ...props }: InputProps, ref: Ref<HTMLInputElement>) => {
    return (
      <div className="flex flex-col w-full">
        <label className="mb-2 text-emerald-400" htmlFor={props.id}>
          {label}
        </label>
        <input
          ref={ref}
          className="bg-slate-900  rounded-lg focus:border-text-secondary placeholder:text-emerald-400/[.33] text-emerald-400 file:bg-slate-900 file:broder file:border-emerald-400 file:rounded-lg file:text-emerald-400"
          id={props.id}
          {...props}
        />
        {errors && (
          <span className="w-fit text-red-500 font-light text-sm mt-1">
            {errors?.message}
          </span>
        )}
      </div>
    );
  },
);
