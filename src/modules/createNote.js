import filterNotes from  './filterNotes';
import { getTime, creatId } from './utils';
import editNote from  './editNote';

const createNote = (notes) => {
    const noteButton = document.querySelector('.create-button');

    const note = (event) => {
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
        notes.push(newNote);

        filterNotes(notes);
        editNote(event);
    }
    
    noteButton.addEventListener('click', note);
    

};

export default createNote;