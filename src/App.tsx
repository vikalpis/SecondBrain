
import './App.css'
import { Button } from './component/ui/Button'
import { Card } from './component/ui/Card'
import {PlusIcon} from "./icons/PlusIcon"
import { ShareIcon } from './icons/ShareIcon'

function App() {

  return (
    <>
    <div className='p-2'>
      <div className='flex justify-end gap-2'>
      <Button variants='primary' text='Add Content' size='sm' startIcon={<PlusIcon size='lg'/>}/>
      <Button variants='secondary' text='Share Brain' size='md' startIcon={<ShareIcon size='md'/>}/>
      
     </div>

    <div className='flex gap-4'>
      <Card title='new' link='https://x.com/benawad/status/1952436349677551758' type='twitter'/>

      <Card title='second' link='https://www.youtube.com/watch?v=p6ca7gq5H70&list=RDp6ca7gq5H70&start_radio=1' type='youtube'/>

    </div>
    </div>
    
      
    </>
  )
}

export default App
