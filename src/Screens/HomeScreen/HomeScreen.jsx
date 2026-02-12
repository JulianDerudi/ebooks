import SearchEbookForm from "../../Components/SearchEbookForm/SearchEbookForm";
import EbookList from "../../Components/EbookList/EbookList";
import { Link } from "react-router";
import { Button } from "../../components/shared/FormComponents";

export default function HomeScreen() {
  return (
    <div className="home-container">
        <header> 
            <h1>Welcome to Ebooks</h1>
            <SearchEbookForm />
        </header>
        
        <div style={{ marginBottom: 'var(--spacing-2xl)' }}>
          <h2 style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--spacing-lg)' }}>
            Discover Your Favorite Ebooks
          </h2>
          <EbookList />
        </div>

        <div style={{ marginTop: 'var(--spacing-2xl)', textAlign: 'center' }}>
          <Link to="/add-ebook" style={{ textDecoration: 'none' }}>
            <Button>+ Add New Ebook</Button>
          </Link>
        </div>
    </div>
  )
}