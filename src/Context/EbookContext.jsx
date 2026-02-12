import { createContext, useEffect, useState } from "react";
import { getEbooks, deleteEbookById, isUserAddedEbook } from "../services/ebookService";
import { Outlet } from "react-router";


export const EbookContext = createContext()

export default function EbookContextProvider() {
    const [ebooks, setEbooks] = useState([])
    const [loadingEbooks, setLoadingEbooks] = useState(false)

    function loadEbooks() {
        setLoadingEbooks(true)
        //aqui se haria la llamada a la API para obtener los ebooks
        setTimeout(
            function () {
                // Solo guardar en localStorage si está vacío (primera vez)
                if (!localStorage.getItem("ebooks")) {
                    localStorage.setItem("ebooks", JSON.stringify([]));
                }
                const ebooks_list_response = getEbooks()
                setEbooks(ebooks_list_response)
                setLoadingEbooks(false)
            },
            2000 //simulamos un delay de 2 segundos para la llamada a la API
        )
    }

    function getEbooksById(id) {
        if (loadingEbooks || !ebooks) return null
        return ebooks.find(ebook => ebook.id === id)
    }

    function searchEbooksByTitle(title) {
        if (loadingEbooks || !ebooks) return []
        return ebooks.filter(ebook => ebook.title.toLowerCase().includes(title.toLowerCase()))
    }

    function updateEbookById(ebook_id_update, updatedEbook) {
        if (loadingEbooks || !ebooks) return null
        const ebookIndex = ebooks.findIndex(ebook => ebook.id === ebook_id_update)
        if (ebookIndex === -1) return null
        ebooks[ebookIndex] = updatedEbook
        return updatedEbook
    }

    function deleteEbook(id) {
        const deleted = deleteEbookById(id)
        if (deleted) {
            const updatedEbooks = ebooks.filter(ebook => ebook.id !== id)
            setEbooks(updatedEbooks)
        }
        return deleted
    }

    useEffect(() => {
        loadEbooks()
    }, [])

    const providerValue = {
        ebooks,
        setEbooks,
        loadingEbooks,
        setLoadingEbooks,
        getEbooksById,
        searchEbooksByTitle,
        updateEbookById,
        loadEbooks,
        deleteEbook
    }

    return (
        <EbookContext.Provider value={providerValue}>
            <Outlet />
        </EbookContext.Provider>
    )
}