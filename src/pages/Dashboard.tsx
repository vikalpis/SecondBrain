// Dashboard.tsx
import { useEffect, useState } from 'react'
import { Sidebar } from '../component/ui/Sidebar'
import { useContent } from '../hooks/useContent'
import { Card } from '../component/ui/Card'
import { Button } from '../component/ui/Button'
import { CreateContentModel } from '../component/ui/CreateContentModel'
import { PlusIcon } from "../icons/PlusIcon"
// import { ShareIcon } from '../icons/ShareIcon'
import { SearchInput } from '../component/ui/SearchInput'
import { useNavigate } from 'react-router-dom'
import Toaster from '../component/ui/DocumnetToaster'
import WelcomeToaster from '../component/ui/Welcome'
import { Logout } from '../component/ui/Logout.tsx'

function Dashboard() {
  const [openModel, setOpenModel] = useState(false)
  const { contents, setType } = useContent()   // make sure useContent returns setContents
  const navigate = useNavigate()
  const [showToaster, setShowToaster] = useState(false)
  const [dashToaster, setDashToaster] = useState(false)
  const [openLogout, setOpenLogout] = useState(false)
  // function LogOut (){
  //   alert("Do You Really Want To Logout ?")
  //   localStorage.clear()
  //   navigate("/Login")
  // }

  function checkLogin(){
    try{
    const token =  localStorage.getItem("token");
    if(!token){
      alert("Please SignUp/Login first")
      navigate("/Signup")
    }else{
      
     setDashToaster(true)
    }
    
    }catch(err){
      console.error(err)
    }
  }
 useEffect(()=>{
  checkLogin()
  
 },[Dashboard])
  return (
    <div className="flex flex-col bg-gradient-to-b from-[#D0E3F3] from-0%  to-[#DA82C8] to-100% md:flex-row" >
          {openLogout && (
            <Logout openLogout={openLogout} closeLogout={()=> setOpenLogout(false)}/>
          )}

      {dashToaster && (<WelcomeToaster onClose={()=>setDashToaster(false)}/>)}
      <Sidebar
        onSelectType={(selectedType) => {
          if (selectedType === "Document") {
            setShowToaster(true); // ✅ trigger toaster
          }
          setType(selectedType);
        }}
      />

      {/* Render toaster if triggered */}
      {showToaster && (
        <Toaster
        onClose={() => setShowToaster(false)}
        />
      )}

      <div className="p-4  h-screen bg-gradient-to-b from-[#D0E3F3] from-0%  to-[#DA82C8] to-100%  w-full overflow-hidden">
        <CreateContentModel
          open={openModel}
          closeModel={() => setOpenModel(e => !e)}
        />

        <div className="flex flex-col sm:flex-row justify-end gap-2 mb-4">
          <SearchInput placeholder='Search your Brain'/>
          <Button
            variants="primary2"
            text="Add Content"
            size="sm"
            startIcon={<PlusIcon size="lg" />}
            onClick={() => setOpenModel(e => !e)}
          />
          {/* <LogOut/> */}
          <Button
            variants="primary2"
            text="LogOut"
            size="sm"
            // startIcon={<LogOutIcon size="sm" />}
            onClick= {()=>{setOpenLogout(e=>!e)}}  
          />
        </div>

        <div className="sm:flex gap-8 flex-col-1 ">
          {contents.map(({ _id, type, link, title }) => (
            <Card
              key={_id || link}
              _id= {_id}
              title={title}
              link={link}
              type={type}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
