import * as C from './appStyle'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { MainRoutes } from "./routes/MainRoutes"

const App = () => {


  return (
    <C.Template> 
      
      <MainRoutes/>
      
    </C.Template>
  )
}

export default App
