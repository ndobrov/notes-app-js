import filterNotes from  './filterNotes';
import { NOTES } from '../constans';
import editNote from './editNote';


const addListeners = () => {    
    const removeButton = document.querySelectorAll('.remove-note');
    const archiveButton = document.querySelectorAll('.add-note');
    
    const editButton = document.querySelectorAll('.edit-note');
    // const nameInput = document.querySelector('.-input');

    editButton.forEach(itemBtn => {
        itemBtn.addEventListener('click', (event) => editNote(event))
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

export default addListeners;