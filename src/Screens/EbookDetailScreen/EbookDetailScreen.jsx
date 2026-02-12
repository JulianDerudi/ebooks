import { useContext } from "react";
import { useParams, useNavigate } from "react-router";
import { getEbookById } from "../../services/ebookService";
import { isUserAddedEbook } from "../../services/ebookService";
import { EbookContext } from "../../Context/EbookContext";


export default function EbookDetailScreen() {
    const { id } = useParams()
    const navigate = useNavigate();
    const { deleteEbook } = useContext(EbookContext);
    const ebook = getEbookById(id);
    const isUserBook = isUserAddedEbook(parseInt(id));

    const handleDelete = () => {
        if (window.confirm(`Are you sure you want to delete "${ebook.title}"?`)) {
            deleteEbook(parseInt(id));
            navigate("/");
        }
    };

    return (
        <div>
            <h1>Ebook Detail Screen</h1>
            <p>Showing details for ebook with id: {id}</p>
            { //mostrar informacion del ebook con id ebook_id obtenida con getEbookById(ebook_id)
                ebook
                ?
                    <div>
                        <h2>{ebook.title}</h2>
                        <p>Author: {ebook.author}</p>
                        <p>Description: {ebook.description}</p>
                        {
                            // Si el ebook tiene una imagen de portada, mostrarla
                            ebook.cover_image && <img src={ebook.cover_image} alt={ebook.title} style={{maxWidth: "200px", marginBottom: "20px"}} />
                        }
                        <p>Content: {ebook.content}</p>
                        {isUserBook && (
                            <button onClick={handleDelete} style={{marginTop: "20px", padding: "10px 20px", backgroundColor: "#ff4444", color: "white", border: "none", borderRadius: "4px", cursor: "pointer"}}>
                                Delete / Unpublish
                            </button>
                        )}
                    </div>
                :
                    <p>Ebook not found</p>

            }
        </div>
    )
}