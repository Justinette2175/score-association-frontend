import { InputHTMLAttributes, PropsWithChildren } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ children, ...props }: PropsWithChildren<InputProps>) {
  return (
    <input
      {...props}
      className={`py-2 px-4  rounded-sm bg-black border-white border-2 text-white ${
        props.disabled ? "opacity-30" : "hover:bg-gray-800 active:bg-grey-800"
      } ${props.className}`}
    />
  );
}
