import { createContext, useEffect, useState } from "react";
import { getEbooks, deleteEbookById, updateEbook } from "../services/ebookService";
import { Outlet } from "react-router";

export const EbookContext = createContext()

export default function EbookContextProvider() {
    const [ebooks, setEbooks] = useState([])
    const [loadingEbooks, setLoadingEbooks] = useState(true)
    const [error, setError] = useState(null)

    async function loadEbooks() {
        setLoadingEbooks(true)
        setError(null)
        try {
            const ebooks_list_response = await getEbooks()
            setEbooks(ebooks_list_response)
        } catch (err) {
            setError(err.message)
            console.error('Error loading ebooks:', err)
        } finally {
            setLoadingEbooks(false)
        }
    }

    function getEbooksById(id) {
        if (loadingEbooks || !ebooks) return null
        // Compare with string since MongoDB returns string IDs
        return ebooks.find(ebook => ebook._id === id || ebook.id === parseInt(id))
    }

    function searchEbooksByTitle(title) {
        if (loadingEbooks || !ebooks) return []
        return ebooks.filter(ebook => ebook.title.toLowerCase().includes(title.toLowerCase()))
    }

    async function deleteEbook(id) {
        try {
            await deleteEbookById(id)
            const updatedEbooks = ebooks.filter(ebook => ebook._id !== id && ebook.id !== id)
            setEbooks(updatedEbooks)
            return true
        } catch (err) {
            setError(err.message)
            console.error('Error deleting ebook:', err)
            return false
        }
    }

    async function updateUserEbook(id, updatedEbookData) {
        try {
            const updated = await updateEbook(id, updatedEbookData)
            const updatedEbooks = ebooks.map(ebook => 
                ebook._id === id || ebook.id === id ? updated : ebook
            )
            setEbooks(updatedEbooks)
            return true
        } catch (err) {
            setError(err.message)
            console.error('Error updating ebook:', err)
            return false
        }
    }

    useEffect(() => {
        loadEbooks()
    }, [])

    const providerValue = {
        ebooks,
        setEbooks,
        loadingEbooks,
        setLoadingEbooks,
        error,
        setError,
        getEbooksById,
        searchEbooksByTitle,
        loadEbooks,
        deleteEbook,
        updateUserEbook
    }

    return (
        <EbookContext.Provider value={providerValue}>
            <Outlet />
        </EbookContext.Provider>
    )
}
