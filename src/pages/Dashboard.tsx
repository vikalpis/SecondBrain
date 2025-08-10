
import { useState } from 'react'
import '../App.css'
import { Button } from '../component/ui/Button'
import { Card } from '../component/ui/Card'
import { CreateContentModel } from '../component/ui/CreateContentModel'
import {PlusIcon} from "../icons/PlusIcon"
import { ShareIcon } from '../icons/ShareIcon'
import { Sidebar } from '../component/ui/Sidebar'
import { useContent } from '../hooks/useContent'

function Dashboard() {
  const [openModel, setOpenModel] = useState(false)
  const contents = useContent()
  return <div>

    <Sidebar/>
  
  <div className='p-4 ml-72 min-h-screen bg-gray-200 border-2'> 
        
        <CreateContentModel open={openModel} closeModel={()=>{
           setOpenModel(e => !e)
        }
         } />
      <div className='flex justify-end gap-2' >
      <Button variants='primary' text='Add Content' size='sm' startIcon={<PlusIcon size='lg'/>} onClick={()=>{
        setOpenModel(e=>!e)
      }}/>
      <Button variants='secondary' text='Share Brain' size='md' startIcon={<ShareIcon size='md'/>}/>
      
     </div>

    <div className='flex gap-4'>
      
      {contents.map(({type, link, title})=>
      <Card
      title= {title}
      link = {link}
      type={type}/>
      )}
      

      
    </div>
   

     
    </div>
    </div>
}

export default Dashboard
