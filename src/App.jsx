import { Route, Routes } from "react-router"
import HomeScreen from "./Screens/HomeScreen/HomeScreen"
import EbookDetailScreen from "./Screens/EbookDetailScreen/EbookDetailScreen"
import EbookDetailContextProvider, { EbookDetailContext } from "./Context/EbookDetailContext"
import EbookContextProvider from "./Context/EbookContext"


function App() {

  return (
      <Routes>
        <Route element={ <EbookContextProvider/> } >
          <Route path="/" element={ <HomeScreen /> } />
          <Route path="/ebook/:id" element={ <EbookDetailContextProvider/>} >
            <Route path="/ebook/:id" element={ <EbookDetailScreen /> } />
          </Route>
        </Route>
      </Routes>
  )
}

export default App
