import { useNavigate } from "react-router-dom";
import { CrossIcon } from "../../icons/CrossIcon";
import { Button } from "./Button";

export function Logout({openLogout, closeLogout}: any){

    const navigate = useNavigate();

    function LogoutHandler(){
        localStorage.clear();
        navigate("/login")
    }
    if(!openLogout) return null;
    return (

         <div className="w-screen h-screen backdrop-blur-sm fixed top-0 left-0 flex justify-center">
      <div className="flex items-center justify-center">
        <div className="bg-[#D0E3F3]/70 rounded-2xl p-4">
          <div className="flex justify-end cursor-pointer" onClick={closeLogout}>
            <CrossIcon size="lg" />
          </div>

          <div className="text-2xl tracking-tighter font-mono">
          Do You Really Want To Logout?
          </div>

          <div className="p-2 flex  gap-8">
            <Button
              variants="primary"
              size="sm"
              text="Logout"
              fullwidth={true}
              onClick={() => LogoutHandler()}
            />
            <Button
              variants="primary"
              size="sm"
              text="Cancel"
              fullwidth={true}
              onClick={closeLogout}
            />
          </div>
        </div>
      </div>
    </div>
        
    )
}