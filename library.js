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

class Library extends Book{
    constructor(){
        super()
        this.bookArray = []
    }

    addBook(object){
        for(let i = 0; i < this.bookArray.length; i++){
            if(this.bookArray[i].title === object.title){
                return
            }
        }
        this.bookArray.push(object)
        this.createCard(object)
    }

    createCard(object){
        const content = document.querySelector('.content')

        let div = document.createElement('div')
        let textTitle = document.createElement('p')
        let textAuthor = document.createElement('p')
        let textPage = document.createElement('p')
        let btn_read = document.createElement('button')
        let btn_remove = document.createElement('button')

        textTitle.className = "title"
  
        btn_remove.className = 'btn-remove'
        btn_remove.innerText = "REMOVE"

        textTitle.innerText = object.title
        textAuthor.innerText = `By ${object.author}`
        textPage.innerText = `${object.page} pages`
        switch(object.read){
            case true:
                btn_read.innerText = 'READ'
                btn_read.className = "btn-read"
                break
            case false:
                btn_read.innerText = 'NOT READ'
                btn_read.className = "btn-notRead"
                break
                
        }
        div.appendChild(textTitle)
        div.appendChild(textAuthor)
        div.appendChild(textPage)
        div.appendChild(btn_read)
        div.appendChild(btn_remove)
        content.appendChild(div)
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

    const modal = document.querySelector('.modal')
    const add_img = document.querySelector('.add-img')

    let titleValue = title.value
    let authorValue = author.value
    let pageValue = page.value
    let readValue = read.checked

    book.setInfo(titleValue, authorValue, pageValue, readValue)
    lib.addBook(book.getInfo())

    modal.classList.remove('pop')
    add_img.classList.remove('close-img')
})
