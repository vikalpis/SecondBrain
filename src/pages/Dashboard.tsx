import { useEffect, useState } from 'react'
import '../App.css'
import { Button } from '../component/ui/Button'
import { Card } from '../component/ui/Card'
import { CreateContentModel } from '../component/ui/CreateContentModel'
import { PlusIcon } from "../icons/PlusIcon"
import { ShareIcon } from '../icons/ShareIcon'
import { Sidebar } from '../component/ui/Sidebar'
import { useContent } from '../hooks/useContent'

function Dashboard() {
  const [openModel, setOpenModel] = useState(false)
  const {contents, refresh} = useContent()
  useEffect(()=>{
    refresh();
  },[openModel])
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />

      {/* Main content */}
      <div className="p-4 md:ml-72 min-h-screen bg-gray-200 border-2 w-full">
        <CreateContentModel
          open={openModel}
          closeModel={() => {
            setOpenModel(e => !e)
          }}
        />

        {/* Top buttons */}
        <div className="flex flex-col sm:flex-row justify-end gap-2 mb-4">
          <Button
            variants="primary"
            text="Add Content"
            size="sm"
            startIcon={<PlusIcon size="lg" />}
            onClick={() => {
              setOpenModel(e => !e)
            }}
          />
          <Button
            variants="secondary"
            text="Share Brain"
            size="md"
            startIcon={<ShareIcon size="md" />}
          />
        </div>

        {/* Cards grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contents.map(({ type, link, title }) => (
            <Card key={link} title={title} link={link} type={type} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard