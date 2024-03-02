export const convertBook = (googleBook) => {
    return {
        id: googleBook.id,
        title: googleBook.volumeInfo.title,
        author: googleBook.volumeInfo.authors? googleBook.volumeInfo.authors[0]: '',
        cover: googleBook.volumeInfo.imageLinks?  googleBook.volumeInfo.imageLinks.thumbnail : '',
        intro: googleBook.volumeInfo.description,
        completed: false,
        review: '',
    } 
}