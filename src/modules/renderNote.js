const renderNote = (list, selector) => {

    const noteWrapper = document.querySelector(selector);
    noteWrapper.innerHTML = '';

    list.forEach(notesItem => {
        noteWrapper.insertAdjacentHTML('beforeend', `
            <ul class="note" data-key="${notesItem.id}"> 
                <li class="note-list">${notesItem.name}</li>
                <li class="note-list">${notesItem.created}</li>
                <li class="note-list">${notesItem.category}</li>
                <li class="note-list">${notesItem.content}</li>
                <li class="note-list">${notesItem.dates}</li>
                <div class="header-list icon-block">
                    <img class="edit-note" src="assets/edit.svg" alt="img"></img>
                    <img class="add-note" src="assets/add.svg" alt="img"></img>
                    <img class="remove-note" src="assets/remove.svg" alt="img"></img>
                </div>
            </ul>
        `)
    })
    
   
    
}

export default renderNote;