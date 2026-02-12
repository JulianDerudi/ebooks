import SearchEbookForm from "../../Components/SearchEbookForm/SearchEbookForm";
import EbookList from "../../Components/EbookList/EbookList";
import { Link } from "react-router";

export default function HomeScreen() {
  return (
    <div>
        <header> 
            <h1>Welcome to the ebooks page</h1>
            <SearchEbookForm />
        </header>
        <h2>Find your favorite ebooks</h2>
        {
          //mostrar lista de ebooks con el componente EbookList
          <EbookList />
        }
        {
          <Link to="/add-ebook">Add a new ebook</Link> 
        }
    </div>
  )
}