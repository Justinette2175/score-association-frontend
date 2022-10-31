import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  label,
  ...props
}: PropsWithChildren<ButtonProps> & { label?: string }) {
  return (
    <button
      {...props}
      className={`py-2 px-4 rounded-sm border-white border-2 text-white ${
        props.disabled ? "opacity-30" : "hover:bg-gray-800 active:bg-slate-800"
      }`}
    >
      {label && <span className=" uppercase">{label}</span>}
      {children}
    </button>
  );
}
