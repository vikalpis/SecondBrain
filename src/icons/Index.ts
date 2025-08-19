export interface IconProps {
    size : "sm" | "md" | "lg" |"xl";
    onClick ?: ()=> void
}

export const iconSizeVariants = {
    "sm" : "size-2",
    "md" : "size-4",
    "lg" : "size-5",
    "xl" : "size-8"
}