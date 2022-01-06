

const createNote = () => {
    const noteButton = document.querySelector('.create-button');

    const getTime = () => {
        let date = new Date();
        return date.toString().slice(4, 15);
    };

    const addNote = (event) => {
        event.preventDefault();
        getTime();
    }

    noteButton.addEventListener('click', addNote);

}

export default createNote;