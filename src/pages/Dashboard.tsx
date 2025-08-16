// Dashboard.tsx
import { useState } from 'react'
import { Sidebar } from '../component/ui/Sidebar'
import { useContent } from '../hooks/useContent'
import { Card } from '../component/ui/Card'
import { Button } from '../component/ui/Button'
import { CreateContentModel } from '../component/ui/CreateContentModel'
import { PlusIcon } from "../icons/PlusIcon"
import { ShareIcon } from '../icons/ShareIcon'
import axios from 'axios'
import { BACKEND_URL } from '../component/ui/config'

function Dashboard() {
  const [openModel, setOpenModel] = useState(false)
  const { contents, setContents, setType } = useContent()   // make sure useContent returns setContents

  // delete logic
  async function DeleteCard(id: string) {
    try {
      await axios.delete(`${BACKEND_URL}/api/v1/content`, {
        headers: {
          token: localStorage.getItem("token") || ""
        },
        data: { id }   // 👈 sending content id in body
      })

      // update frontend state after deletion
      setContents(prev => prev.filter(item => item._id !== id))
    } catch (err) {
      console.error("Error deleting content", err)
    }
  }

  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar onSelectType={(type) => setType(type)} />

      <div className="p-4 md:ml-72 min-h-screen bg-gray-200 border-2 w-full">
        <CreateContentModel
          open={openModel}
          closeModel={() => setOpenModel(e => !e)}
        />

        <div className="flex flex-col sm:flex-row justify-end gap-2 mb-4">
          <Button
            variants="primary"
            text="Add Content"
            size="sm"
            startIcon={<PlusIcon size="lg" />}
            onClick={() => setOpenModel(e => !e)}
          />
          <Button
            variants="secondary"
            text="Share Brain"
            size="md"
            startIcon={<ShareIcon size="md" />}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contents.map(({ _id, type, link, title }) => (
            <Card
              key={_id || link}
              title={title}
              link={link}
              type={type}
              onClick={() => DeleteCard(_id)}  
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
