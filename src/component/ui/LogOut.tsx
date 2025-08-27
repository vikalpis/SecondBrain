import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

export function LogOut (){
    const navigate = useNavigate()

    function LogoutHandler(){
        localStorage.clear()
        navigate("/Login")
    }

    return <div>
        <Button variants="secondary" size="md" text="Logout" onClick={LogoutHandler}/>
    </div>
}