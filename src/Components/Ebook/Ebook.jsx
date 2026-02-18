import { useContext } from "react";
import { Link } from "react-router";
import { isUserAddedEbook } from "../../services/ebookService";
import { EbookContext } from "../../Context/EbookContext";
import { Button } from "../shared/FormComponents";


export default function Ebook({ ebook }) {
    const { deleteEbook } = useContext(EbookContext);
    const isUserBook = isUserAddedEbook(ebook._id || ebook.id);
    const ebookId = ebook._id || ebook.id;

    const handleDelete = (e) => {
        e.preventDefault();
        if (window.confirm(`Are you sure you want to delete "${ebook.title}"?`)) {
            deleteEbook(ebookId);
        }
    };

    return (
<<<<<<< HEAD
        <div className="ebook-card">
            <div className="ebook-cover-wrapper">
                {ebook.image || ebook.cover_image ? (
                    <img src={ebook.image || ebook.cover_image} alt={ebook.title} />
                ) : (
                    <div className="ebook-cover-placeholder">
                        {ebook.title.substring(0, 1)}
                    </div>
                )}
            </div>
            
            <div className="ebook-info">
                <h3 className="ebook-title">{ebook.title}</h3>
                <p className="ebook-author">by {ebook.author}</p>
                
                {ebook.description && (
                    <p className="ebook-description">{ebook.description}</p>
                )}
                
                <div className="ebook-meta">
                    <div className="ebook-meta-item">
                        <span className="ebook-meta-icon">📖</span>
                        <span>{ebook.chapters?.length || 0} chapters</span>
                    </div>
                </div>
                
                <div className="ebook-actions">
                    <Link to={`/ebook/${ebookId}`} style={{ flex: 1, textDecoration: "none" }}>
                        <Button className="full-width">Read</Button>
                    </Link>
                    {isUserBook && (
                        <Button 
                            onClick={handleDelete}
                            variant="danger"
                            className="btn-small"
                        >
                            Delete
                        </Button>
                    )}
                </div>
            </div>
        </div>
=======
        <Link to={`/ebook/${ebook.id}`} style={{ textDecoration: "none", color: "inherit" }}>
            <div className="chapter-item" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ flex: 1 }}>
                    <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>{ebook.title}</h3>
                    <p style={{ color: 'var(--text-light)', fontSize: 'var(--font-size-sm)' }}>
                        {ebook.author}
                    </p>
                    <p style={{ color: 'var(--text-light)', fontSize: 'var(--font-size-sm)', marginTop: 'var(--spacing-sm)' }}>
                        {ebook.chapters?.length || 0} chapters
                    </p>
                </div>
                {isUserBook && (
                    <Button 
                        onClick={handleDelete}
                        size="small"
                        variant="danger"
                        style={{ marginLeft: 'var(--spacing-md)', whiteSpace: 'nowrap' }}
                    >
                        Delete
                    </Button>
                )}
            </div>
        </Link>
>>>>>>> parent of 207b333 (Estilos)
    );
}