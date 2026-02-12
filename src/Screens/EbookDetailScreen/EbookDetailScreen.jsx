import { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { getEbookById } from "../../services/ebookService";
import { isUserAddedEbook } from "../../services/ebookService";
import { EbookContext } from "../../Context/EbookContext";


export default function EbookDetailScreen() {
    const { id } = useParams()
    const navigate = useNavigate();
    const { deleteEbook, updateUserEbook, ebooks } = useContext(EbookContext);
    const [ebook, setEbook] = useState(getEbookById(id));
    const [showAddChapter, setShowAddChapter] = useState(false);
    const [chapterTitle, setChapterTitle] = useState("");
    const [chapterContent, setChapterContent] = useState("");
    const isUserBook = isUserAddedEbook(parseInt(id));

    const handleDelete = () => {
        if (window.confirm(`Are you sure you want to delete "${ebook.title}"?`)) {
            deleteEbook(parseInt(id));
            navigate("/");
        }
    };

    const handleAddChapter = (e) => {
        e.preventDefault();
        
        if (!chapterTitle.trim() || !chapterContent.trim()) {
            alert("Please fill in all fields");
            return;
        }

        const newChapter = {
            id: ebook.chapters.length > 0 ? Math.max(...ebook.chapters.map(c => c.id)) + 1 : 1,
            title: chapterTitle,
            content: chapterContent
        };

        const updatedEbook = {
            ...ebook,
            chapters: [...ebook.chapters, newChapter]
        };

        updateUserEbook(parseInt(id), updatedEbook);
        setEbook(updatedEbook);
        
        // Limpiar formulario
        setChapterTitle("");
        setChapterContent("");
        setShowAddChapter(false);
        alert("Chapter added successfully!");
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
                        <div style={{marginTop: "20px"}}>
                            <h3>Chapters:</h3>
                            {ebook.chapters && ebook.chapters.length > 0 ? (
                                <ul>
                                    {ebook.chapters.map((chapter) => (
                                        <li key={chapter.id} style={{marginBottom: "15px", padding: "10px", border: "1px solid #ddd", borderRadius: "4px"}}>
                                            <strong>{chapter.title}</strong>
                                            <p>{chapter.content}</p>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No chapters available</p>
                            )}
                        </div>
                        
                        {isUserBook && (
                            <div style={{marginTop: "20px"}}>
                                <button 
                                    onClick={() => setShowAddChapter(!showAddChapter)}
                                    style={{padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", marginRight: "10px"}}
                                >
                                    {showAddChapter ? "Cancel" : "Add Chapter"}
                                </button>

                                {showAddChapter && (
                                    <div style={{marginTop: "20px", padding: "20px", border: "2px solid #4CAF50", borderRadius: "4px"}}>
                                        <h4>Add New Chapter</h4>
                                        <form onSubmit={handleAddChapter}>
                                            <div style={{marginBottom: "10px"}}>
                                                <input 
                                                    type="text" 
                                                    placeholder="Chapter Title" 
                                                    value={chapterTitle}
                                                    onChange={(e) => setChapterTitle(e.target.value)}
                                                    required
                                                    style={{width: "100%", padding: "8px", marginBottom: "10px", borderRadius: "4px", border: "1px solid #ddd"}}
                                                />
                                            </div>
                                            <div style={{marginBottom: "10px"}}>
                                                <textarea 
                                                    placeholder="Chapter Content" 
                                                    value={chapterContent}
                                                    onChange={(e) => setChapterContent(e.target.value)}
                                                    required
                                                    style={{width: "100%", padding: "8px", minHeight: "150px", borderRadius: "4px", border: "1px solid #ddd"}}
                                                />
                                            </div>
                                            <button 
                                                type="submit"
                                                style={{padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "4px", cursor: "pointer"}}
                                            >
                                                Save Chapter
                                            </button>
                                        </form>
                                    </div>
                                )}
                            </div>
                        )}

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