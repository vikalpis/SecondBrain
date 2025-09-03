export interface IconProps {
    size : "sm" | "md" | "lg" |"xl" | "2xl";
    onClick ?: ()=> void
    
}

export const iconSizeVariants = {
    "sm" : "size-2",
    "md" : "size-4",
    "lg" : "size-5",
    "xl" : "size-8",
    "2xl" : "size-10"
}