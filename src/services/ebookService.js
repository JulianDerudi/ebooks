import ebooks_data from "../data/ebooksData";

function getEbooks() {
    return ebooks_data
}

function getEbookById(id) {
    return ebooks_data.find(ebook => ebook.id === id)
}

export { getEbooks, getEbookById }