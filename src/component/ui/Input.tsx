export interface inputprops {
    onChange ?: ()=>void;
    placeholder: string
}
export function Input ({onChange, placeholder}: inputprops){
    return <div>
        <input placeholder={placeholder} type="text" className="px-4 py-2 border rounded m-2" onChange={onChange} />
    </div>
}