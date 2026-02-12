import { useContext } from "react";
import { Link } from "react-router";
import { isUserAddedEbook } from "../../services/ebookService";
import { EbookContext } from "../../Context/EbookContext";
import { Button } from "../shared/FormComponents";


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
    );
}