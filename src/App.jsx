import { Route, Routes } from "react-router"
import HomeScreen from "./Screens/HomeScreen/HomeScreen"
import EbookDetailScreen from "./Screens/EbookDetailScreen/EbookDetailScreen"


function App() {

  return (
      <Routes>
        <Route path="/" element={ <HomeScreen /> } />
        <Route path="/ebook/:ebook_id" element={ <EbookDetailScreen /> } />
      </Routes>
  )
}

export default App
