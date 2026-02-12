// pantalla para agregar un nuevo ebook a la lista de ebooks disponibles
// el formulario debe tener los siguientes campos: title, author, description, cover_image
// al enviar el formulario, se debe agregar el nuevo ebook a la lista de ebooks
// y redirigir al usuario a la pantalla de inicio

import NewEbookForm from "../../Components/NewEbookForm/NewEbookForm";

export default function AddEbookScreen() {
    return (
        <div>
            <NewEbookForm />
        </div>
    )
}
