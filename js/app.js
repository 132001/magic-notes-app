// console.log("Welcome to magic notes");
showNotes();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click",function(e){
    let addTxt = document.getElementById('addTxt');
    let addTitle = document.getElementById('addTitle');
    let notes = localStorage.getItem("notes");
    if(notes==null){
        notesObj = [];
       
    }
    else{
        notesObj = JSON.parse(notes);
      
    }

    let myObj = {
        title: addTitle.value,
        note: addTxt.value
    };
    notesObj.push(myObj);
  
   localStorage.setItem("notes",JSON.stringify(notesObj));
   addTitle.value = "";
   addTxt.value = "";
//    console.log(notesObj);
   showNotes();
});
function showNotes(){
    let notes = localStorage.getItem("notes");
    if(notes==null){
        notesObj = [];
        
    }
    else{
        notesObj = JSON.parse(notes);
       
    }
    let html="";
    
    
    notesObj.forEach(function(element,index){
        html += ` <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title"> ${index+1}. ${element.title}</h5>
          
          <p class="card-text">${element.note}</p>
          <button id = "${index}" onclick="deleteNode(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
      </div>`;
    });
    let htmlElem = document.getElementById('notes');
    if(notesObj.length != 0){
    htmlElem.innerHTML = html;
    }
    else{
        htmlElem.innerHTML = `<b class="text-center my-2" ><h3>Nothing to show! Please add a note.</h3></b>`;
    }
}
function deleteNode(index){
    // console.log("I am deleting this node", index);
    let notes = localStorage.getItem("notes");
    if(notes==null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    
    notesObj.splice(index,1);
    
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();
}
let search = document.getElementById('searchTxt');
search.addEventListener("input",function(element){
    let inputval = search.value;
    // console.log(inputval);
    let notecard = document.getElementsByClassName('noteCard');
    Array.from(notecard).forEach(function(element){
        
        let cardTxt = element.getElementsByTagName('p')[0].innerText;
        if(cardTxt.includes(inputval)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    });
});