import { SearchIcon } from "../../icons/SearchIcon"
import type { inputprops } from "./Input"

export const SearchInput = ({placeholder,ref,onChange}: inputprops)=>{
    return <div>
        <div className="flex ">
            <div className="w-full p-4 rounded-4xl bg-blue-200 flex justify-between items-center">
                <div className="px-2 cursor-pointer">
                    <SearchIcon size="lg"/>
                </div>

                <input type="text" placeholder={placeholder} ref={ref} onChange={onChange} className="w-full   rounded focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"/>
                     
            </div>

        </div>
    </div>
}