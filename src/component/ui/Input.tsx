export interface inputprops {
    variants : variants;
    onChange ?: (e:any)=>void;
    placeholder: string;
    ref ?: any ;
 
}
type variants = "primary" | "secondary"

const variantsStyle = {
    primary : "w-full block px-4 py-2 border border-[#E4229D] rounded-4xl  focus:outline-none transition-transform duration-500 hover:scale-105",
    secondary : ""
}
export function Input ({onChange, placeholder, ref, variants}: inputprops){
    return <div>
        <input required ref={ref} placeholder={placeholder}  type="text" className={`${variantsStyle[variants]}`} onChange={onChange} />
    </div>
}