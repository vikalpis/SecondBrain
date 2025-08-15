export interface inputprops {
    onChange ?: (e:any)=>void;
    placeholder: string;
    ref ?: any ;
}
export function Input ({onChange, placeholder, ref}: inputprops){
    return <div>
        <input ref={ref} placeholder={placeholder} type="text" className="w-full block px-4 py-2 border border-gray-300 rounded m-2 focus:border-indigo-500 focus:ring-indigo-500" onChange={onChange} />
    </div>
}