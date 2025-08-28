// Dashboard.tsx
import { useState } from 'react'
import { Sidebar } from '../component/ui/Sidebar'
import { useContent } from '../hooks/useContent'
import { Card } from '../component/ui/Card'
import { Button } from '../component/ui/Button'
import { CreateContentModel } from '../component/ui/CreateContentModel'
import { PlusIcon } from "../icons/PlusIcon"
// import { ShareIcon } from '../icons/ShareIcon'
import { SearchInput } from '../component/ui/SearchInput'
import { useNavigate } from 'react-router-dom'
// import { LogOut } from '../component/ui/LogOut'

function Dashboard() {
  const [openModel, setOpenModel] = useState(false)
  const { contents, setType } = useContent()   // make sure useContent returns setContents
  const navigate = useNavigate()

  function LogOut (){
    localStorage.clear()
    navigate("/Login")
  }
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar onSelectType={(type) => setType(type)} />

      <div className="p-4  h-screen bg-gray-200 border-2 w-full overflow-hidden">
        <CreateContentModel
          open={openModel}
          closeModel={() => setOpenModel(e => !e)}
        />

        <div className="flex flex-col sm:flex-row justify-end gap-2 mb-4">
          <SearchInput placeholder='Search your Brain'/>
          <Button
            variants="primary"
            text="Add Content"
            size="sm"
            startIcon={<PlusIcon size="lg" />}
            onClick={() => setOpenModel(e => !e)}
          />
          {/* <LogOut/> */}
          <Button
            variants="secondary"
            text="LogOut"
            size="md"
            // startIcon={<LogOutIcon size="sm" />}
            onClick={LogOut}
          />
        </div>

        <div className="sm:flex gap-3 flex-col-1 ">
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
