function Book(bookName,author,image)
{
    this.bookName = bookName;
    this.author = author;
    this.image = image;

}

function UI(){

}
class Storage{
    static getBooks(){

        let books;

        if(localStorage.getItem('books') === null){
            courses = [];


        }

        else{
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;

    }

    static displayBooks(){
         const books = Storage.getBooks();

         books.forEach(book => {
             const ui = new UI();

             ui.addBookToList(book);
             
         });
    }

    static addBooks(book){
        const books = Storage.getBooks();
        books.push(book);
        localStorage.setItem('books',JSON.stringify(books));

    }

    static deleteBooks(book){

    }
}

document.addEventListener('DOMContentLoaded',Storage.displayBooks);
UI.prototype.addBookToList = function(book){
 const list = document.getElementById('card');

 var  html = `
 <div class="card">
  <img src="${book.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${book.bookName}</h5>
    <p class="card-text">${book.author}</p>
  </div>
</div>
 `;

 list.innerHTML += html;
}

UI.prototype.clearControls = function(){

    const bookName = document.getElementById('book-name').value="";
    const author = document.getElementById('author').value="";
    const image = document.getElementById('image').value="";

}

UI.prototype.showAlert = function(message,className){
   var alert = `
   <div class ="alert alert-${className}">
   ${message}
   </div>`;

   const row = document.querySelector('.row');
   row.insertAdjacentHTML('beforeBegin',alert);

   setTimeout(()=>{
       document.querySelector('.alert').remove();
   },3000);
}
document.getElementById('new-book').addEventListener('submit',function(e){

    const bookName = document.getElementById('book-name').value;
    const author = document.getElementById('author').value;
    const image = document.getElementById('image').value;
    
    const book = new Book(bookName,author,image);
    
    const ui = new UI();

    if(bookName === "" || author === "" || image === ""){
        ui.showAlert('Please complete the form','warning');

        ui.addBookToList(book);

        Storage.addBooks(book);

        ui.clearControls();

        ui.showAlert('the book has been added','success');

    } 

    if(bookName.length > 25){
        ui.showAlert('book name cannot be more than 25 characters','warning');
    }

    if(author.length > 25){
        ui.showAlert('author cannot be more than 25 characters','warning');
    }


    ui.addBookToList(book);

    ui.clearControls();

    
    e.preventDefault();
});