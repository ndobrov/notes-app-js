import { NOTES } from '../constans';
import filterNotes from  './filterNotes';
import { getTime, creatId } from './utils';


const note = () => {    
    const editButton = document.querySelectorAll('.edit-note');
    const removeButton = document.querySelectorAll('.remove-note');
    const archiveButton = document.querySelectorAll('.add-note');
    const editDoneButton = document.querySelectorAll('.edit-done');
    const noteButton = document.querySelector('.create-button');

    const createNote = (event) => {
        event.preventDefault();
        let created = getTime();
        let newId = creatId();
        let newNote = {name: '',
            created,
            category: '',
            content: '',
            dates: [],
            id: newId
        };
        NOTES.push(newNote);
        filterNotes(NOTES);
    }
    
    noteButton.addEventListener('click', createNote);
        
    editButton.forEach(itemBtn => {
        itemBtn.addEventListener('click', (event) => {
            const note = event.target.closest('.note');
            const key = +note.dataset.key;
                for (let i = 0; i < note.children.length; i++) {
                    let child = note.children[i];
                    child.value ? child.setAttribute("contentEditable", true) : null;
                    // child.value === 3 ? child[note.dates.length].setAttribute("contentEditable", true) : null;
                    child.style.whiteSpace = "normal";
                    child.style.textOverflow = "clip";
                    
                    if (child.children[0] && child.children[0].tagName == 'BUTTON') {
                        child.children[0].style.visibility = "visible";
                    };
                NOTES.map(note => {
                    editDoneButton.forEach(noteBtn => {
                        noteBtn.addEventListener('click', () => {
                            if (note.id === key) {
                                child.value === 1 ? note.name = child.innerHTML : null;
                                child.value === 2 ? note.content = child.innerHTML : null;
                                child.value === 3 ? note.dates.push(child.innerHTML) : null;
                                return NOTES                           
                            }
                            filterNotes(NOTES);
                        })                                         
                    })
                })
            }
        })
    });

    archiveButton.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            const note = event.target.closest('.note');
            const key = +note.dataset.key;
            NOTES.forEach(note => {
                if (note.id === key) {
                    let archived = note.archived;
                    note.archived = !archived;
                }
            });
            filterNotes(NOTES);
        }) 
    });

    removeButton.forEach(item => {
        item.addEventListener('click', (event) => {
        event.preventDefault();
            const note = event.target.closest('.note');
            const key = +note.dataset.key;
            const index = NOTES.findIndex(item => {
                return item.id === key;
            });
            NOTES.splice(index, 1);
            filterNotes(NOTES);                
        }) 
    })
}

export default note;