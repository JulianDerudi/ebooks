import { useParams } from "react-router";
import { getEbookById } from "../../services/ebookService";


export default function EbookDetailScreen() {
    const ebook_id = useParams().ebook_id
    const ebook = getEbookById(ebook_id);

    return (
        <div>
            <h1>Ebook Detail Screen</h1>
            <p>Showing details for ebook with id: {ebook_id}</p>
            { //mostrar informacion del ebook con id ebook_id obtenida con getEbookById(ebook_id)
                ebook
                ?
                    <div>
                        <h2>{ebook.title}</h2>
                        <p>Author: {ebook.author}</p>
                        <p>Description: {ebook.description}</p>
                        <img src={ebook.cover_image} alt={ebook.title} />
                    </div>
                :
                    <p>Ebook not found</p>

            }
        </div>
    )
}