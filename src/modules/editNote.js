import { NOTES } from '../constans';
import filterNotes from  './filterNotes';

const editNote = (event) => {
    const editDoneButton = document.querySelectorAll('.edit-done');    
    const dateInput = document.querySelectorAll('.date-input');
    const categoriesList = document.querySelectorAll('.categories-list li');

    const edit = () => {
        const note = event.target.closest('.note');
        const key = +note?.dataset.key;
            for (let i = 0; i < note?.children.length; i++) {
                let child = note.children[i];
                if (child.value < 4 && child.value !== 0) {
                    child.setAttribute("contentEditable", true);
                    child.style.backgroundColor = "rgb(245, 248, 247)";
                    child.style.whiteSpace = "normal";
                    child.style.textOverflow = "clip";
                    child.style.visibility = "visible";
                };

                let text = '';
                Object.values(categoriesList).forEach(item => {
                    item.addEventListener('click', () => {
                        text = item.textContent;
                        if (child.value === 4 && text) {
                            child.textContent = text;                                
                        }
                    })
                });

                let dateValue = '';
                dateInput.forEach(item => {
                    item.addEventListener('input', () => {
                        dateValue = item.value;
                        if (child.value === 3 && dateValue) {
                            console.log(dateValue);
                            child.innerHTML = dateValue;
                        }
                    })
                })    

                if (child.children[0]) {
                    child.children[0].style.visibility = "visible";
                    child.children[0].style.display = "block";
                };

                NOTES.map(note => {
                    editDoneButton.forEach(noteBtn => {
                        noteBtn.addEventListener('click', () => {
                            if (note.id === key) {
                                child.value === 1 ? note.name = child.innerHTML : null;
                                child.value === 2 ? note.content = child.innerHTML : null;
                                child.value === 3 && dateValue ? note.dates.push(dateValue) : null; 
                                child.value === 4 && text ? note.category = text : null;                               
                            }
                            filterNotes(NOTES);
                        })                                         
                    })
                });                
            }       
        };
    edit();
}
export default editNote;
