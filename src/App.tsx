
import './App.css'
import { Button } from './component/ui/Button'
import {PlusIcon} from "./icons/PlusIcon"

function App() {

  return (
    <>
      <Button variants='primary' text='hii' size='sm' startIcon={<PlusIcon/>}/>
      <Button variants='secondary' text='share' size='md'/>
    </>
  )
}

export default App
