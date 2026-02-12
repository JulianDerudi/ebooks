import { useContext, useState } from "react";
import { useParams, useNavigate, Link } from "react-router";
import { getEbookById } from "../../services/ebookService";
import { isUserAddedEbook } from "../../services/ebookService";
import { EbookContext } from "../../Context/EbookContext";
import { Button, FormInput, FormTextarea } from "../../Components/shared/FormComponents";

export default function EbookDetailScreen() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { deleteEbook, updateUserEbook } = useContext(EbookContext);
    const [ebook, setEbook] = useState(getEbookById(id));
    const [showAddChapter, setShowAddChapter] = useState(false);
    const [chapterTitle, setChapterTitle] = useState("");
    const [chapterContent, setChapterContent] = useState("");
    const isUserBook = isUserAddedEbook(parseInt(id));

    if (!ebook) {
        return (
            <div className="chapters-container">
                <p>Ebook not found</p>
            </div>
        );
    }

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
        
        setChapterTitle("");
        setChapterContent("");
        setShowAddChapter(false);
        alert("Chapter added successfully!");
    };

    return (
        <div className="ebook-detail">
            <div className="reader-header">
                <div className="reader-header-info">
                    <h2>{ebook.title}</h2>
                    <p>{ebook.author}</p>
                </div>
                <div className="reader-header-actions">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Button>← Back</Button>
                    </Link>
                </div>
            </div>

            <div className="chapters-container">
                <div style={{ marginBottom: 'var(--spacing-2xl)' }}>
                    <p style={{ color: 'var(--text-light)', marginBottom: 'var(--spacing-md)' }}>
                        {ebook.description}
                    </p>
                    {ebook.cover_image && (
                        <img 
                            src={ebook.cover_image} 
                            alt={ebook.title} 
                            style={{ 
                                maxWidth: '300px', 
                                width: '100%',
                                height: 'auto',
                                borderRadius: 'var(--radius-md)',
                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                            }} 
                        />
                    )}
                </div>

                <h3 style={{ marginBottom: 'var(--spacing-lg)', fontSize: 'var(--font-size-2xl)' }}>
                    Chapters ({ebook.chapters?.length || 0})
                </h3>

                {ebook.chapters && ebook.chapters.length > 0 ? (
                    <div className="grid">
                        {ebook.chapters.map((chapter) => (
                            <Link 
                                key={chapter.id}
                                to={`/ebook/${id}/chapter/${chapter.id}`}
                                style={{ textDecoration: 'none' }}
                            >
                                <div className="chapter-item">
                                    <h3>{chapter.title}</h3>
                                    <p className="chapter-preview">{chapter.content}</p>
                                    <span className="chapter-link">Read Chapter →</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <p>No chapters available</p>
                )}

                {isUserBook && (
                    <div style={{ marginTop: 'var(--spacing-2xl)' }}>
                        <Button 
                            onClick={() => setShowAddChapter(!showAddChapter)}
                            className={showAddChapter ? '' : ''}
                        >
                            {showAddChapter ? "Cancel" : "Add Chapter"}
                        </Button>

                        {showAddChapter && (
                            <form onSubmit={handleAddChapter} className="add-chapter-form">
                                <h4>Add New Chapter</h4>
                                <FormInput 
                                    label="Chapter Title"
                                    value={chapterTitle}
                                    onChange={(e) => setChapterTitle(e.target.value)}
                                    required
                                />
                                <FormTextarea 
                                    label="Chapter Content"
                                    value={chapterContent}
                                    onChange={(e) => setChapterContent(e.target.value)}
                                    required
                                />
                                <div className="form-actions">
                                    <Button type="submit">Save Chapter</Button>
                                    <Button 
                                        type="button"
                                        variant="secondary"
                                        onClick={() => setShowAddChapter(false)}
                                    >
                                        Cancel
                                    </Button>
                                </div>
                            </form>
                        )}
                    </div>
                )}

                {isUserBook && (
                    <Button 
                        onClick={handleDelete} 
                        variant="danger"
                        style={{ marginTop: 'var(--spacing-2xl)', width: '100%', maxWidth: '300px' }}
                    >
                        Delete / Unpublish
                    </Button>
                )}
            </div>
        </div>
    );
}