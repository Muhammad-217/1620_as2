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

function NewNoteBox() {
writeNote.insertAdjacentHTML('afterbegin', noteArea)
writeNote.appendChild(saveNoteButton)
writeNote.appendChild(cancelNoteButton)
newNoteButton.remove()
}
newNoteButton.addEventListener('click', NewNoteBox)