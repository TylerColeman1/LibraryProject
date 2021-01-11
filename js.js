function Book(title, author, numpages, read){
    this.title = title;
    this.author = author;
    this.numpages = numpages;
    this.read = read;
}

function addBookToLibrary() {
    
    titleBook = myLibrary[0].title // get the title author numpages and read status from arrary
    authorBook = myLibrary[0].author
    numpagesBook = myLibrary[0].numpages
    readBook = myLibrary[0].read

    const bookPage = document.createElement('div'); //create a page within the library
    bookPage.classList.add('bookPage');
    //bookPage.classList.add(titleBook);

    const bookTitle = document.createElement('div'); // create a title, author, numpages, and read status for the book
    bookTitle.classList.add('bookTitle');
    bookTitle.textContent = titleBook;

    const bookAuthor = document.createElement('div');
    bookAuthor.classList.add('bookAuthor');
    bookAuthor.textContent = authorBook;

    const bookNumpages = document.createElement('div');
    bookNumpages.classList.add('bookNumpages');
    bookNumpages.textContent = numpagesBook;

    const bookRead = document.createElement('button');
    bookRead.classList.add('bookRead');
    bookRead.textContent = readBook;

    const removeBookPage = document.createElement('button'); // create remove page button
    removeBookPage.classList.add('removeBookPage');
    //removeBookPage.classList.add(titleBook); // this can be empy sometimes so change that
    removeBookPage.textContent = 'Remove';

    // append each item to the page

    bookPage.appendChild(bookTitle);
    bookPage.appendChild(bookAuthor);
    bookPage.appendChild(bookNumpages);
    bookPage.appendChild(bookRead);
    bookPage.appendChild(removeBookPage);

    // append the page to the library

    completeLibrary.appendChild(bookPage);

    // Add an event listener to the page so can remove it
    removeBookPage.addEventListener('click', removePageFromLibrary);

    //Add an event listener to the read, so can toggle it
    bookRead.addEventListener('click', toggleReadStatus);
}

function toggleReadStatus(event){
    readStatus = event.target.textContent;
    if(readStatus == 'Not Yet Read'){
        event.target.textContent = 'Read!';
    } else {
        event.target.textContent = 'Not Yet Read';
    }
}

function removePageFromLibrary(event){
    //console.log(event.target.parentElement); // getting the parent of the button which is the whole book page
    event.target.parentElement.remove();
}

function createNewBook(event){
    // create the form
    let form = document.createElement("form");
    form.classList.add('form-container');

    //
    let description = document.createElement("h2");
    description.textContent = 'Add a Book';

     // Create an input element for Title
     let title = document.createElement("input"); 
     title.setAttribute("type", "text"); 
     title.setAttribute("placeholder", "Title"); 
     title.classList.add('formTitle');

    // Create an input element for author
    let author = document.createElement("input"); 
    author.setAttribute("type", "text"); 
    author.setAttribute("placeholder", "Author"); 
    author.classList.add('formAuthor');

     // Create an input element for numpages
    let numpages = document.createElement("input"); 
    numpages.setAttribute("type", "number");  
    numpages.setAttribute("placeholder", "Number of Pages"); 
    numpages.classList.add('formNumpages');

    // Create an input element for Read or not (checkbox)
    // Create a label to go with that and appending it
    let totalCheckbox = document.createElement('div');
    totalCheckbox.classList.add('totalCheckbox');
    let readLabel = document.createElement('label');
    readLabel.textContent = 'Have you read it?'
    let readOrNot = document.createElement("input"); 
    readOrNot.setAttribute("type", "checkbox"); 
    //readOrNot.setAttribute("label", "Read?");
    readOrNot.classList.add('checkbox');
    totalCheckbox.appendChild(readLabel);
    totalCheckbox.appendChild(readOrNot);

    // create a submit button 
    let submit = document.createElement("input"); 
    submit.classList.add('formSubmit');
    submit.setAttribute("type", "submit"); 
    submit.setAttribute("value", "Submit"); 

    form.append(description);
    form.appendChild(title);
    form.appendChild(author);
    form.appendChild(numpages);
    form.appendChild(totalCheckbox);
    form.appendChild(submit);

    TotalLibraryPage.append(form);

    formSubmission = document.getElementsByClassName('form-container'); // getting the whole form not just formSubmit
    formSubmission[0].addEventListener('submit', getDescription)
}


function getDescription(event){
    let newBookForLibrary = '';
    event.preventDefault(); // stops the form from being sent to server side // but keeps the form up
    newTitle = document.getElementsByClassName('formTitle')[0].value;
    newAuthor = document.getElementsByClassName('formAuthor')[0].value;
    newNumpages = document.getElementsByClassName('formNumpages')[0].value;
    newRead = document.getElementsByClassName('checkbox')[0].checked;
    if(newRead == false){
        newBookForLibrary = new Book(newTitle, newAuthor, newNumpages, 'Not Yet Read')
    } else{
        newBookForLibrary = new Book(newTitle, newAuthor, newNumpages, 'Read!')
    }
    myLibrary.push(newBookForLibrary);
    addBookToLibrary();
    myLibrary.pop();

    // Remove the form from the screen 
    let form = document.getElementsByClassName("form-container")[0];
    form.remove();
}

newTitle = '';
newAuthor = '';
newNumpages = '';
newRead = '';

let myLibrary = [];
const completeLibrary = document.querySelector('.completeLibrary');
const newBook = document.querySelector('.New-Book');
newBook.addEventListener('click', createNewBook);
//addBookToLibrary(myLibrary);
const TotalLibraryPage = document.querySelector('.TotalLibraryPage');
//{title: 'Dog', author: 'cat', numpages: 15, read: 'no' }, {title: 'black', author: 'chicken', numpages: 100, read: 'yes' }
