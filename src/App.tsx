
import './App.css'
import { Button } from './component/ui/Button'
import {PlusIcon} from "./icons/PlusIcon"
import { ShareIcon } from './icons/ShareIcon'

function App() {

  return (
    <>
      <Button variants='primary' text='hii' size='sm' startIcon={<PlusIcon size='lg'/>}/>
      <Button variants='secondary' text='share' size='sm' startIcon={<ShareIcon size='lg'/>}/>
    </>
  )
}

export default App
