
import './App.css'
import { Button } from './component/ui/Button'
import {PlusIcon} from "./icons/PlusIcon"
import { ShareIcon } from './icons/ShareIcon'

function App() {

  return (
    <>
      <Button variants='primary' text='Add Content' size='sm' startIcon={<PlusIcon size='lg'/>}/>
      <Button variants='secondary' text='Share Brain' size='md' startIcon={<ShareIcon size='md'/>}/>
    </>
  )
}

export default App
