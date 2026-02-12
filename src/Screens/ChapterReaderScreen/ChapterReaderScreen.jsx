import { useParams, useNavigate, Link } from "react-router";
import { getEbookById } from "../../services/ebookService";
import { Button } from "../../components/shared/FormComponents";

export default function ChapterReaderScreen() {
  const { id, chapterId } = useParams();
  const navigate = useNavigate();
  const ebook = getEbookById(id);
  
  if (!ebook) {
    return <div className="chapters-container"><p>Ebook not found</p></div>;
  }

  const chapterIndex = parseInt(chapterId) - 1;
  const chapter = ebook.chapters?.[chapterIndex];
  
  if (!chapter) {
    return <div className="chapters-container"><p>Chapter not found</p></div>;
  }

  const prevChapter = chapterIndex > 0 ? ebook.chapters[chapterIndex - 1] : null;
  const nextChapter = chapterIndex < ebook.chapters.length - 1 ? ebook.chapters[chapterIndex + 1] : null;

  return (
    <div className="chapter-reader">
      <div className="chapter-reader-header">
        <Link to={`/ebook/${id}`} style={{ textDecoration: 'none', color: 'var(--primary-color)' }}>
          ← Back to Ebook
        </Link>
        <h1>{chapter.title}</h1>
        <p style={{ color: 'var(--text-light)', fontSize: 'var(--font-size-sm)' }}>
          Chapter {chapterId} of {ebook.chapters.length}
        </p>
      </div>

      <div className="chapter-content">
        {chapter.content}
      </div>

      <div className="chapter-reader-nav">
        {prevChapter ? (
          <Link to={`/ebook/${id}/chapter/${chapterIndex}`}>
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
