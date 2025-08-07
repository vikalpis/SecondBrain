
import { useState } from 'react'
import './App.css'
import { Button } from './component/ui/Button'
import { Card } from './component/ui/Card'
import { CreateContentModel } from './component/ui/CreateContentModel'
import {PlusIcon} from "./icons/PlusIcon"
import { ShareIcon } from './icons/ShareIcon'
import { Sidebar } from './component/ui/Sidebar'

function App() {
  const [openModel, setOpenModel] = useState(false)
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
      <Card title='new' link='https://x.com/benawad/status/1952436349677551758' type='twitter'/>

      <Card title='second' link='https://www.youtube.com/watch?v=p6ca7gq5H70&list=RDp6ca7gq5H70&start_radio=1' type='youtube'/>

    </div>
   

     
    </div>
    </div>
}

export default App
