import { useContext } from "react";
import { Link } from "react-router";
import { isUserAddedEbook } from "../../services/ebookService";
import { EbookContext } from "../../Context/EbookContext";



export default function Ebook({ ebook }) {
    const { deleteEbook } = useContext(EbookContext);
    const isUserBook = isUserAddedEbook(ebook.id);

    const handleDelete = (e) => {
        e.preventDefault();
        if (window.confirm(`Are you sure you want to delete "${ebook.title}"?`)) {
            deleteEbook(ebook.id);
        }
    };

    return (
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px"}}>
            <Link to={`/ebook/${ebook.id}`} style={{flex: 1, textDecoration: "none", color: "inherit"}}>
                <div>
                    <h3>{ebook.title}</h3>
                    <p>{ebook.author}</p>
                    <hr />
                </div>
            </Link>
            {isUserBook && (
                <button 
                    onClick={handleDelete}
                    style={{padding: "5px 10px", backgroundColor: "#ff4444", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", marginLeft: "10px", whiteSpace: "nowrap"}}
                >
                    Delete
                </button>
            )}
        </div>
    )
}