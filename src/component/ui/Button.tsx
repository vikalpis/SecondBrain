import type { ReactElement } from "react";

type Varients = "primary" | "secondary" | "primary2"

interface ButtonProps {
    variants: Varients
    size: "sm"|"md"|"lg"|"xl"|"xl2";
    text: string;
    startIcon?: ReactElement;
    endIcon?:ReactElement;
    onClick?: (e:any)=>void;
    fullwidth?: boolean;
    loading?: boolean;
}
const variantsStyles = {
    "primary" : "bg-[#062A55] text-[#e4229d] hover:text-[#062A55] transition-transform duration-500 hover:scale-105",
    "primary2" : "bg-[#062A55] text-[#e4229d] hover:text-[#062A55] transition-transform duration-500 hover:scale-105 ",
    "secondary" : "bg-[#D0E3F3] text-[#062A55] hover:text-[#062A55] transition-transform duration-500 hover:scale-105"
}
const sizeStyles = {
    "sm" : "py-1 px-2",
    "md" : "py-2 px-4",
    "lg" : "py-2 px-6",
    "xl" :  "py-2 px-6 w-full",
    "xl2" : "py-4 px-6 "
}
const defaultStuyles = "rounded-xl flex font-semibold tracking:tighter font-serif justify-center items-center cursor-pointer hover:bg-[#E4229D] text-nowrap "

export const Button = (props :  ButtonProps) => {
    return   <button onClick={props.onClick} disabled={props.loading} className={`${variantsStyles[props.variants]} ${defaultStuyles} ${sizeStyles[props.size]}  ${props.fullwidth? "w-full flex justify-center" : ""} ${props.loading? 'loading..': ""}  ${props.loading ? "opacity-45" : ""}`  } >
    {props.startIcon && <div className="pr-2">{props.startIcon}</div>}
    {props.text}
    {props.endIcon}
  </button>
}