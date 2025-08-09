export interface inputprops {
    onChange ?: ()=>void;
    placeholder: string;
    ref ?: any ;
}
export function Input ({onChange, placeholder, ref}: inputprops){
    return <div>
        <input ref={ref} placeholder={placeholder} type="text" className="px-4 py-2 border rounded m-2" onChange={onChange} />
    </div>
}