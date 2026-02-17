import API_URL from '../config/apiConfig'

const API_EBOOKS_URL = `${API_URL}/ebooks`

// Fetch all ebooks from the backend
async function getEbooks() {
  try {
    const response = await fetch(API_EBOOKS_URL)
    if (!response.ok) {
      throw new Error(`Failed to fetch ebooks: ${response.statusText}`)
    }
    const ebooks = await response.json()
    return ebooks
  } catch (error) {
    console.error('Error fetching ebooks:', error)
    return []
  }
}

// Fetch a single ebook by ID
async function getEbookById(id) {
  try {
    const response = await fetch(`${API_EBOOKS_URL}/${id}`)
    if (!response.ok) {
      if (response.status === 404) {
        return null
      }
      throw new Error(`Failed to fetch ebook: ${response.statusText}`)
    }
    const ebook = await response.json()
    return ebook
  } catch (error) {
    console.error('Error fetching ebook:', error)
    return null
  }
}

// Create a new ebook
async function createEbook(ebookData) {
  try {
    const response = await fetch(API_EBOOKS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ebookData)
    })
    
    if (!response.ok) {
      throw new Error(`Failed to create ebook: ${response.statusText}`)
    }
    
    const newEbook = await response.json()
    return newEbook
  } catch (error) {
    console.error('Error creating ebook:', error)
    throw error
  }
}

// Update an ebook
async function updateEbook(id, ebookData) {
  try {
    const response = await fetch(`${API_EBOOKS_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ebookData)
    })
    
    if (!response.ok) {
      throw new Error(`Failed to update ebook: ${response.statusText}`)
    }
    
    const updatedEbook = await response.json()
    return updatedEbook
  } catch (error) {
    console.error('Error updating ebook:', error)
    throw error
  }
}

// Delete an ebook
async function deleteEbookById(id) {
  try {
    const response = await fetch(`${API_EBOOKS_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    
    if (!response.ok) {
      throw new Error(`Failed to delete ebook: ${response.statusText}`)
    }
    
    return true
  } catch (error) {
    console.error('Error deleting ebook:', error)
    throw error
  }
}

// Check if an ebook is user-added (does not apply with backend, all are tracked)
function isUserAddedEbook(id) {
  // With backend, all ebooks are stored in MongoDB
  // Return true for all ebooks from the backend
  return true
}

export { getEbooks, getEbookById, createEbook, updateEbook, deleteEbookById, isUserAddedEbook }