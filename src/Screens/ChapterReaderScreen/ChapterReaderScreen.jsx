import { useParams, useNavigate, Link, useContext } from "react-router";
import { useState, useEffect } from "react";
import { getEbookById } from "../../services/ebookService";
import { EbookContext } from "../../Context/EbookContext";
import { Button } from "../../Components/shared/FormComponents";

export default function ChapterReaderScreen() {
  const { id, chapterId } = useParams();
  const navigate = useNavigate();
  const { setError } = useContext(EbookContext);
  const [ebook, setEbook] = useState(null);
  const [loading, setLoading] = useState(true);

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
    return <div className="chapters-container"><p>Ebook not found (ID: {id})</p></div>;
  }

  const chapterIndex = parseInt(chapterId) - 1;
  const chapter = ebook.chapters?.[chapterIndex];
  
  if (!chapter) {
    return <div className="chapters-container"><p>Chapter not found (Chapter: {chapterId})</p></div>;
  }

  const prevChapter = chapterIndex > 0 ? ebook.chapters[chapterIndex - 1] : null;
  const nextChapter = chapterIndex < ebook.chapters.length - 1 ? ebook.chapters[chapterIndex + 1] : null;

  return (
    <div className="chapter-reader">
      <div className="reader-header">
        <div className="reader-header-info">
          <p style={{ fontSize: 'var(--font-size-sm)', marginBottom: 'var(--spacing-sm)' }}>{ebook.title}</p>
          <h2>{chapter.title}</h2>
          <p style={{ fontSize: 'var(--font-size-sm)', marginTop: 'var(--spacing-sm)' }}>
            Chapter {chapterId} of {ebook.chapters.length}
          </p>
        </div>
        <div className="reader-header-actions">
          <Link to={`/ebook/${id}`} style={{ textDecoration: 'none' }}>
            <Button>← Back</Button>
          </Link>
        </div>
      </div>

      <div className="chapter-content">
        {chapter.content}
      </div>

      <div className="chapter-reader-nav">
        {prevChapter ? (
          <Link to={`/ebook/${id}/chapter/${chapterIndex}`} style={{ textDecoration: 'none' }}>
            <Button>← Previous Chapter</Button>
          </Link>
        ) : (
          <div />
        )}
        
        {nextChapter ? (
          <Link to={`/ebook/${id}/chapter/${chapterIndex + 2}`} style={{ textDecoration: 'none' }}>
            <Button>Next Chapter →</Button>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
