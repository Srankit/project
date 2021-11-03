//if user add a note, Add to the note local storage

showNotes();
let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function (event) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";

  // console.log(notesObj);

  showNotes();
});

// Function to show element from localStorage

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
    
    <div class="my-2 mx-2" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Note ${index + 1}</h5>
        <p class="card-text"> ${element}</p>
        <button id= "${index}"onclick="deleteNote(this.id)" class="btn btn
        -danger">Delete Note</button>
      </div>
    </div>`;
  });

  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show Use"Add a Note" section above to add notes`;
  }
}

// function to delete a notes
function deleteNote(index) {
  console.log("I am deleting ", index);
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

searchTxt = document.getElementById("searchTxt");
searchTxt.addEventListener("input", function () {
  let inputVal = searchTxt.value;
  console.log("input event fired!", inputVal);
  let noteCards = document.getElementsByClassName("card-text");
  Array.from(noteCards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
    // console.log(cardTxt)
  });
});
