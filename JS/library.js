console.log("Hey,there")
//Constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}
//Display Constructor
function Display() {

}
//Add methods to display Prototypes
let i = 0;
Display.prototype.add = function (book) {
    console.log("Adding to UI");
    i++;
    let tablebody = document.getElementById('table-body')
    let uiString = `  <tr>
                <th scope="row">${i}</th>
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td>${book.type}</td>
            </tr>`
    tablebody.innerHTML += uiString;
}
Display.prototype.clear = function () {
    form.reset();
}
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    }
    else {
        return true;
    }
}
Display.prototype.show = function (type, message) {
    let msg = document.getElementById('msg');
    msg.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
<strong>${type}</strong>&nbsp;&nbsp;${message}
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
</div>`
    setTimeout(function () {
        msg.innerHTML = '';
    }, 5000)
}


//Add submit event listner


let form = document.getElementById('library-form');
form.addEventListener('submit', libraryFormSubmit);
function libraryFormSubmit(e) {
    e.preventDefault();
    console.log('You have submitted Library form');
    
  
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let fiction = document.getElementById('Fiction');
    let adventure = document.getElementById('Adventure');
    let funny = document.getElementById('Funny');
    let type;

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (adventure.checked) {
        type = adventure.value;
    }
    else if (funny.checked) {
        type = funny.value;
    }


    let BookObj = new Book(name, author, type);
    console.log(BookObj);

    let display = new Display();
    if (display.validate(BookObj)) {

        display.add(BookObj);
        display.clear();
        display.show('Added!', 'Congratulations! Your Book has Been added succesfully:');
        
    }
    else {
        //show error to the user
        display.show('Oops:(', 'Plz fill the data correctly');
    }

}

