import { useContext } from "react";
import { useNavigate } from "react-router";
import { EbookContext } from "../../Context/EbookContext";

export default function NewEbookForm() {
  const navigate = useNavigate();
  const { ebooks, setEbooks } = useContext(EbookContext);

  const sendNewEbookData = (e) => {
    e.preventDefault();
    
    // obtener los datos del formulario
    const title = e.target[0].value;
    const author = e.target[1].value;
    const description = e.target[2].value;
    const cover_image = e.target[3].value ; 
    const chapterContent = e.target[4].value;
    
    // crear un nuevo ebook con los datos del formulario
    const newEbook = {
      id: Date.now(),
      title,
      author,
      description,
      cover_image,
      chapters: [
        {
          id: 1,
          title: "Chapter 1",
          content: chapterContent
        }
      ]
    };
    
    // agregar el nuevo ebook a la lista de ebooks en memoria
    const updatedEbooks = [...ebooks, newEbook];
    setEbooks(updatedEbooks);
    
    // guardar en localStorage
    localStorage.setItem("ebooks", JSON.stringify(updatedEbooks));
    
    // limpiar el formulario
    e.target.reset();
    
    // redirigir al usuario a la pantalla de inicio
    navigate("/");
  };

  return (
    <div>
      <h2>Add a New Ebook</h2>
      <form onSubmit={sendNewEbookData}>
        <input type="text" placeholder="Title" required />
        <input type="text" placeholder="Author" required />
        <textarea placeholder="Description" required></textarea>
        <input type="text" placeholder="Cover Image URL"  />
        <textarea placeholder="Chapter 1 Content" required></textarea>
        <button type="submit">Add Ebook</button>
      </form>
    </div>
  );
}
