

const createNote = () => {
const noteInput = document.querySelector('.note-input');
const noteButton = document.querySelector('.note-button');
const noteList = document.querySelector('.note-list');


const getTime = () => {
    let date = new Date();
    // date.toString().slice(4, 15);
    // console.log( date.toString().slice(4, 15) );
    // .replace(/^.../, "")
    // .replace(/T.*/, "")
    // .slice(1, 4)
    // return date;
    // return `${date.getHours ()}:${date.getMinutes()}`
    return date.toString().slice(4, 15);
};

const addNote = (event) => {
    event.preventDefault();
    getTime();
    const noteDiv = document.createElement('div');
    noteDiv.classList.add('note');
}


noteButton.addEventListener('click', addNote);

}

export default createNote;