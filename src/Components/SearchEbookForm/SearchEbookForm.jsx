import { useState } from "react";
import { useNavigate } from "react-router";
import { getEbooks } from "../../services/ebookService";

export default function SearchEbookForm() {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    
    const ebooks = getEbooks();
    
    // Buscar por ID (si es un número)
    const ebookById = ebooks.find(ebook => ebook.id === parseInt(searchValue));
    if (ebookById) {
      navigate(`/ebook/${ebookById.id}`);
      setSearchValue("");
      return;
    }
    
    // Buscar por nombre (case-insensitive)
    const ebookByName = ebooks.find(ebook => 
      ebook.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    if (ebookByName) {
      navigate(`/ebook/${ebookByName.id}`);
      setSearchValue("");
      return;
    }
    
    // Si no encuentra nada
    alert("Ebook not found");
    setSearchValue("");
  };

  return (
    <div>
        <form onSubmit={handleSearch}>
            <input 
              type="text" 
              placeholder="Search for an ebook" 
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    </div>
  )
}