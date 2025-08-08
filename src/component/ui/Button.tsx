import type { ReactElement } from "react";

type Varients = "primary" | "secondary"

interface ButtonProps {
    variants: Varients
    size: "sm"|"md"|"lg";
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
    "lg" : "py-4 px-6"
}
const defaultStuyles = "rounded-lg flex font-light justify-center items-center cursor-pointer"

export const Button = (props :  ButtonProps) => {
    return   <button onClick={props.onClick} className={`${variantsStyles[props.variants]} ${defaultStuyles} ${sizeStyles[props.size]}  ${props.fullwidth? "w-full flex justify-center" : ""} ${props.loading? 'loading..': ""}`}>
    {props.startIcon && <div className="pr-2">{props.startIcon}</div>}
    {props.text}
    {props.endIcon}
  </button>
}