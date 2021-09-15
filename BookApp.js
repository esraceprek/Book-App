function Book(title,author,image){
    this.title = title;
    this.auther= author;
    this.image= image;
}

function UI(){

}

UI.prototype.addBookToList = function(book){
  const list = document.getElementById('book-list');

  var html = `
  <td>
  <tr><img src="img/${book.image}"/></tr>
  <tr>${book.title}</tr>
  <tr>${book.author}</tr>
  </td> `;

  list.innerHTML += html;
}

UI.prototype.editBook = function(element){
    if(element.classList.contains('edit')){
        element.parentElement.parentElement.remove();
    }
}

UI.prototype.clearControls = function(){
    const title = document.getElementById('title').value="";
   const author = document.getElementById('author').value="";
   const image = document.getElementById('image').value="";
  

}

UI.prototype.showAlert = function(message,className){
    var alert = `
    <div class = "alert alert-${className}">
    ${message}
    </div>`;s

    const row = document.querySelector('.row');
    row.insertAdjacentHTML('beforeBegin',alert);

    setTimeout(()=>{
        document.querySelector('.alert').remove();
    },3000);
}

function addBookToList(){
    var index =10;
    var bookList = [index];
    bookList.push(book);
}

document.querySelector('.fa-arrow-left').addEventListener('click',function()
{    index--;
});

document.querySelector('.fa-arrow-right').addEventListener('click',function(){
    index++;
});
document.getElementById('new-book').addEventListener('submit',function(e){
   const title = document.getElementById('title').value;
   const author = document.getElementById('author').value;
   const image = document.getElementById('image').value;
  

   const book = new Book(title,author,image);

   const ui = new UI();

   if(title ==='' || title.length>25){
       ui.showAlert('You cannot enter more than 25 characters','warning');
   }

   else if(author ==='' || author.length > 25){
       ui.showAlert('You cannot enter more than 25 characters','warning');
   }
   else{
       ui.addBookToList(book);

       ui.showAlert('the book has been added','success');
   }


   ui.addBookToList (book);

   ui.clearControls();

    e.preventDefault();
});