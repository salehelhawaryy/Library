let books = [];
let count = 0;
function book(title, author, read, pages) {
    this.title = title
    this.author = author
    this.read = read
    this.pages = pages
    this.id = count++
    this.toggle = function () {
        if (this.read === "Read")
            this.read = "Not Read"
        else
            this.read = "Read"
        loadBooks();
    }
    this.delete = function () {
                books.splice(books.indexOf(this), 1)
                loadBooks();
    }
    this.add = function () {
        books.push(this)
        loadBooks();
    }
};


// let addButton = document.querySelector('.add')
// addButton.addEventListener('click', function (){
//     let center = document.querySelector('.center');
//     let newDiv = document.createElement('div');
//     let newBody = document.createElement('div')
//     newDiv.classList.add("card", "col-5" ,"m-3" ,"shadow" ,"col-lg-2" ,"col-md-4");
//     newBody.classList.add("card-body" ,"text-center")
//     let newTitle = document.createElement('h5')
//     newTitle.textContent = "a7a nek"
//     newTitle.classList.add("card-title", "fw-bolder")
//     newBody.appendChild(newTitle)
//     newDiv.appendChild(newBody)
//     center.appendChild(newDiv)
// }
// )

let submit = document.querySelector('.submit')
submit.addEventListener('click', function (event) {
    event.preventDefault();
    let form = document.getElementById('addBookForm')
    let title = document.getElementById('title').value
    let name = document.getElementById('Author').value
    let pages = document.getElementById('pages').value
    let read;
    if (title === "" || name === "" || pages === "")
        {
            alert("Please fill in all the fields")
            return;
        }
    if (document.getElementById('read').checked)
        read = "Read"
    else
        read = "Not Read"
    const currBook = new book(title, name , read, pages)
    console.log(currBook)
    form.reset();
    currBook.add();
})


function loadBooks() {
    let center = document.querySelector('.center');
    center.innerHTML= "";
    for(let i = 0 ; i < books.length; i++)
    {
        let newBookDiv = document.createElement('div');
        let newBody = document.createElement('div');
        let newTitle = document.createElement('h5')
        let newSubTitle = document.createElement('h6')
        let newAuthor = document.createElement('p')
        let newPages = document.createElement('p')
        let picsHolder = document.createElement('div')
        let deleteBtn = document.createElement('button')
        let modBtn = document.createElement('button')
        let trash = document.createElement('i')
        let pen = document.createElement('i')
        newBookDiv.classList.add("card", "col-5" ,"m-3" ,"shadow" ,"col-lg-2" ,"col-md-4");
        newBody.classList.add("card-body" ,"text-center")
        newTitle.classList.add("card-title", "fw-bolder")
        newSubTitle.classList.add("card-subtitle" ,"mb-2" ,"text-primary")
        newAuthor.classList.add("card-text", "mt-4")
        newPages.classList.add("card-text")
        picsHolder.classList.add("row","justify-content-center" ,"p-2")
        deleteBtn.classList.add("text-danger","border-0" ,"btn-lg" ,"col-6" ,"bg-white" ,books[i].id, "delete")
        modBtn.classList.add("text-success", "border-0", "bg-white", "col-6" ,books[i].id, "modify")
        trash.classList.add("bi" ,"bi-trash-fill")
        trash.setAttribute("style", "font-size: 1.5em;")
        pen.classList.add("bi" ,"bi-bookmark-check-fill")
        pen.setAttribute("style", "font-size: 1.5em;")
        newTitle.textContent = books[i].title
        newSubTitle.textContent = books[i].read
        newAuthor.textContent ="Author: "+books[i].author
        newPages.textContent = "Pages: "+books[i].pages
        
        deleteBtn.appendChild(trash)
        modBtn.appendChild(pen)
        picsHolder.appendChild(deleteBtn)
        picsHolder.append(modBtn)

        newBody.appendChild(newTitle)
        newBody.appendChild(newSubTitle)
        newBody.appendChild(newAuthor)
        newBody.appendChild(newPages)
        newBody.appendChild(picsHolder)

        newBookDiv.appendChild(newBody)
        center.appendChild(newBookDiv)
        
        deleteBtn.addEventListener('click', function (){
            for(let j = 0 ; j < books.length; j++){
                if (deleteBtn.classList.contains(books[j].id)){
                    books[j].delete()
                    console.log("a7a one")
                    break
                }
            }
        })

        modBtn.addEventListener('click', function (){
            for(let j = 0 ; j < books.length; j++){
                if (modBtn.classList.contains(books[j].id)){
                    books[j].toggle()
                    break
                }
            }
        })
    }
}

