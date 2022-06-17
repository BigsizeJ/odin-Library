class Book{
    constructor(){
        this.title = 'Unknown'
        this.author = 'Unknown'
        this.page = '0'
        this.read = false
    }


    setInfo(title, author, page, read){
        this.title = title
        this.author = author
        this.page = page
        this.read = read
    }

    getInfo(){
        let book = {
            "title": this.title,
            "author": this.author,
            "page": this.page,
            "read": this.read
        }
        return book;
    }
    
}

class Library{
    constructor(){
        this.bookArray = []
    }

    addBook(object){
        for(let i = 0; i < this.bookArray.length; i++){
            if(this.bookArray[i].title === object.title){
                return
            }
        }
        this.bookArray.push(object)
    }

    createCard(object){
        const content = document.querySelector('.content')

        let div = document.createElement('div')
        
    }
}

lib = new Library()
book = new Book()


const form = document.querySelector('.modal-content')
const submit = document.querySelector('#submit')
const title = document.querySelector('#title')
const author = document.querySelector('#author')
const page = document.querySelector('#page')
const read = document.querySelector('#isRead')


submit.addEventListener('click', (e) => {
    e.preventDefault()
    if(form.checkValidity() == false){
        form.reportValidity()
        return
    }

  
    let titleValue = title.value
    let authorValue = author.value
    let pageValue = page.value
    let readValue = read.checked

    book.setInfo(titleValue, authorValue, pageValue, readValue)
    lib.addBook(book.getInfo())
    console.table(lib.bookArray)
})
