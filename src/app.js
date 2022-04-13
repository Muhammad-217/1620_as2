const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]

const newNoteButton = document.querySelector('.fa-circle-plus') 
const createNote = document.querySelector('.create-note-area')
const writeNote = document.querySelector('.write-note-area')
const readNote = document.querySelector('.read-note-area') 
const noteArea = `<textarea id='add-new-note' rows="30" cols="60"placeholder = "1.) Title \n2.) Body-Text"></textarea>`
const NotesList = document.querySelector('.notes-list')

const cancelNoteButton = document.createElement('button')
cancelNoteButton.innerHTML = 'Cancel'

const saveNoteButton = document.createElement('button')
saveNoteButton.innerHTML = 'Save'

const closeNoteButton = document.createElement('button')
closeNoteButton.innerHTML = 'Close'

//Note taking Area
function NewNoteBox() {
writeNote.insertAdjacentHTML('afterbegin', noteArea)
writeNote.appendChild(saveNoteButton)
writeNote.appendChild(cancelNoteButton)
newNoteButton.remove()
}
newNoteButton.addEventListener('click', NewNoteBox)

//Cancel Note Button
function CancelNote() {
  cancelNoteButton.remove()
  saveNoteButton.remove()
  let node = document.getElementById("add-new-note");
    if (node.parentNode) {
      node.parentNode.removeChild(node)
    }
    createNote.appendChild(newNoteButton)
  }
  cancelNoteButton.addEventListener('click', CancelNote)
  
  //Save Note Button
  function SaveNote() {
    let textarea = document.querySelector('#add-new-note').value
    let title,bodytext;
    if (textarea.indexOf("\n")!=-1) {
      title = textarea.substr(0, textarea.indexOf("\n"));
      bodytext = textarea.substr(textarea.indexOf("\n")+1);
    } else {
      title = textarea;
      bodytext = "";
    }
    notes.push({ 
      title: title, 
      noteBody: bodytext,
      id: notes.length + 1 
    })