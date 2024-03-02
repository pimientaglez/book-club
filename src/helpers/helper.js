export const convertBook = (googleBook) => {
    return {
        id: googleBook.id,
        title: googleBook.volumeInfo.title,
        author: googleBook.volumeInfo.authors? googleBook.volumeInfo.authors[0]: '',
        cover: googleBook.volumeInfo.imageLinks?  googleBook.volumeInfo.imageLinks.thumbnail : '',
        intro: googleBook.volumeInfo.description ? googleBook.volumeInfo.description : 'No description available',
        completed: false,
        review: '',
    } 
}
export const truncateText = (text, maxLength) => {
    if (!text) return '';
    if (text.length > maxLength) {
        return `${text.substring(0, maxLength - 1)}...`
    } else {
        return text
    }
}
