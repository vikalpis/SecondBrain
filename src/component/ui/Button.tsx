import type { ReactElement } from "react";

type Varients = "primary" | "secondary"

interface ButtonProps {
    variants: Varients
    size: "sm"|"md"|"lg"|"xl"|"xl2";
    text: string;
    startIcon?: ReactElement;
    endIcon?:ReactElement;
    onClick?: ()=>void;
    fullwidth?: boolean;
    loading?: boolean;
}
const variantsStyles = {
    "primary" : "bg-blue-600 text-white ",
    "secondary" : "bg-blue-200 text-blue-600"
}
const sizeStyles = {
    "sm" : "py-1 px-2",
    "md" : "py-2 px-4",
    "lg" : "py-2 px-6",
    "xl" :  "py-2 px-6 w-full",
    "xl2" : "py-4 px-6 "
}
const defaultStuyles = "rounded-xl flex font-light justify-center items-center cursor-pointer hover:bg-indigo-600"

export const Button = (props :  ButtonProps) => {
    return   <button onClick={props.onClick} disabled={props.loading} className={`${variantsStyles[props.variants]} ${defaultStuyles} ${sizeStyles[props.size]}  ${props.fullwidth? "w-full flex justify-center" : ""} ${props.loading? 'loading..': ""}  ${props.loading ? "opacity-45" : ""}`  } >
    {props.startIcon && <div className="pr-2">{props.startIcon}</div>}
    {props.text}
    {props.endIcon}
  </button>
}