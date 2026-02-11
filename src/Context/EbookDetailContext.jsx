import { createContext } from "react";
import { useParams } from "react-router";



export const EbookDetailContext = createContext(
    {
        ebook_selected: null
    }
)

export default function EbookDetailContextProvider({ children }) {
    const { ebook_id } = useParams()
    const ebook_selected = getEbookById(ebook_id)

    const providerValue = {
        ebook_selected: ebook_selected
    }

    return (
        <EbookDetailContext.Provider value={providerValue}>
            {children}
        </EbookDetailContext.Provider>
    )
}