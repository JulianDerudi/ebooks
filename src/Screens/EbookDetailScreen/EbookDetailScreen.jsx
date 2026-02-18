import { useContext, useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router";
import { getEbookById } from "../../services/ebookService";
import { EbookContext } from "../../Context/EbookContext";
import { Button, FormInput, FormTextarea } from "../../Components/shared/FormComponents";

export default function EbookDetailScreen() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { deleteEbook, updateUserEbook, setError } = useContext(EbookContext);
    const [ebook, setEbook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showAddChapter, setShowAddChapter] = useState(false);
    const [chapterTitle, setChapterTitle] = useState("");
    const [chapterContent, setChapterContent] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const fetchEbook = async () => {
            try {
                setLoading(true);
                const ebookData = await getEbookById(id);
                if (ebookData) {
                    setEbook(ebookData);
                } else {
                    setError("Ebook not found");
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        
        fetchEbook();
    }, [id, setError]);

    if (loading) {
        return (
            <div className="chapters-container">
                <p style={{ textAlign: 'center', padding: 'var(--spacing-xl)' }}>Loading ebook...</p>
            </div>
        );
    }

    if (!ebook) {
        return (
            <div className="chapters-container">
                <p>Ebook not found (ID: {id})</p>
                <p style={{ fontSize: 'small', color: '#999' }}>The ebook you're looking for doesn't exist or was deleted.</p>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Button>← Back Home</Button>
                </Link>
            </div>
        );
    }

    const handleDelete = async () => {
        if (window.confirm(`Are you sure you want to delete "${ebook.title}"?`)) {
            try {
                const success = await deleteEbook(ebook._id || id);
                if (success) {
                    navigate("/");
                } else {
                    alert("Failed to delete ebook");
                }
            } catch (err) {
                alert(`Error deleting ebook: ${err.message}`);
            }
        }
    };

    const handleAddChapter = async (e) => {
        e.preventDefault();
        
        if (!chapterTitle.trim() || !chapterContent.trim()) {
            alert("Please fill in all fields");
            return;
        }

        setIsSubmitting(true);

        try {
            const nextChapterId = ebook.chapters && ebook.chapters.length > 0 
                ? Math.max(...ebook.chapters.map(c => c.id)) + 1 
                : 1;

            const newChapter = {
                id: nextChapterId,
                title: chapterTitle.trim(),
                content: chapterContent.trim()
            };

            const updatedEbook = {
                ...ebook,
                chapters: [...(ebook.chapters || []), newChapter]
            };

            const success = await updateUserEbook(ebook._id || id, updatedEbook);
            
            if (success) {
                setEbook(updatedEbook);
                setChapterTitle("");
                setChapterContent("");
                setShowAddChapter(false);
                alert("Chapter added successfully!");
            } else {
                alert("Failed to add chapter");
            }
        } catch (err) {
            alert(`Error adding chapter: ${err.message}`);
        } finally {
            setIsSubmitting(false);
        }
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
<<<<<<< HEAD
                <div className="ebook-detail-cover">
                    {ebook.image && (
                        <div className="ebook-detail-cover-image">
                            <img 
                                src={ebook.image} 
                                alt={ebook.title}
                            />
                        </div>
=======
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
>>>>>>> parent of 207b333 (Estilos)
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

                <div style={{ marginTop: 'var(--spacing-2xl)' }}>
                    <Button 
                        onClick={() => setShowAddChapter(!showAddChapter)}
                        className={showAddChapter ? '' : ''}
                        disabled={isSubmitting}
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
                                disabled={isSubmitting}
                            />
                            <FormTextarea 
                                label="Chapter Content"
                                value={chapterContent}
                                onChange={(e) => setChapterContent(e.target.value)}
                                required
                                disabled={isSubmitting}
                            />
                            <div className="form-actions">
                                <Button 
                                    type="submit"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Saving..." : "Save Chapter"}
                                </Button>
                                <Button 
                                    type="button"
                                    variant="secondary"
                                    onClick={() => setShowAddChapter(false)}
                                    disabled={isSubmitting}
                                >
                                    Cancel
                                </Button>
                            </div>
                        </form>
                    )}
                </div>

                <Button 
                    onClick={handleDelete} 
                    variant="danger"
                    style={{ marginTop: 'var(--spacing-2xl)', width: '100%', maxWidth: '300px' }}
                    disabled={isSubmitting}
                >
                    Delete / Unpublish
                </Button>
            </div>
        </div>
    );
}