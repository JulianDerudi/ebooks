import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { EbookContext } from "../../Context/EbookContext";
import { createEbook } from "../../services/ebookService";
import { Button, FormInput, FormTextarea } from "../shared/FormComponents";

export default function NewEbookForm() {
  const navigate = useNavigate();
  const { loadEbooks, setError } = useContext(EbookContext);
  const [formValues, setFormValues] = useState({
    title: "",
    author: "",
    description: "",
    image: "",
    chapterContent: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field) => (e) => {
    setFormValues(prev => ({ ...prev, [field]: e.target.value }));
  };

  const sendNewEbookData = async (e) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    const { title, author, description, image, chapterContent } = formValues;
    
    if (!title.trim() || !author.trim() || !chapterContent.trim()) {
      alert("Please fill in all required fields");
      return;
    }
    
    setIsSubmitting(true);
    
    const newEbook = {
      title: title.trim(),
      author: author.trim(),
      description: description.trim(),
      image: image.trim() || "https://picsum.photos/seed/ebook/600/800",
      chapters: [
        {
          id: 1,
          title: "Chapter 1",
          content: chapterContent.trim()
        }
      ]
    };
    
    try {
      await createEbook(newEbook);
      // Reload the ebooks list from the backend
      await loadEbooks();
      navigate("/");
    } catch (error) {
      setError(error.message);
      alert(`Error creating ebook: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h2 style={{ marginBottom: 'var(--spacing-xl)', fontSize: 'var(--font-size-2xl)' }}>
        Publish a New Ebook
      </h2>
      <form onSubmit={sendNewEbookData} style={{ maxWidth: '600px' }}>
        <FormInput 
          label="Title"
          placeholder="Enter ebook title"
          value={formValues.title}
          onChange={handleChange("title")}
          required
          disabled={isSubmitting}
        />
        <FormInput 
          label="Author"
          placeholder="Enter author name"
          value={formValues.author}
          onChange={handleChange("author")}
          required
          disabled={isSubmitting}
        />
        <FormTextarea 
          label="Description"
          placeholder="Enter ebook description"
          value={formValues.description}
          onChange={handleChange("description")}
          required
          rows={4}
          disabled={isSubmitting}
        />
        <FormInput 
          label="Cover Image URL"
          type="text"
          placeholder="https://example.com/cover.jpg"
          value={formValues.image}
          onChange={handleChange("image")}
          disabled={isSubmitting}
        />
        <FormTextarea 
          label="First Chapter Content"
          placeholder="Enter the content of your first chapter"
          value={formValues.chapterContent}
          onChange={handleChange("chapterContent")}
          required
          rows={10}
          disabled={isSubmitting}
        />
        <div style={{ display: 'flex', gap: 'var(--spacing-md)', marginTop: 'var(--spacing-xl)' }}>
          <Button 
            type="submit" 
            style={{ flex: 1 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Publishing..." : "Publish Ebook"}
          </Button>
          <Button 
            type="button"
            variant="secondary"
            onClick={() => navigate("/")}
            disabled={isSubmitting}
            style={{ flex: 1 }}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
}
