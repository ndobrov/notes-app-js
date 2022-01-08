const renderNote = (list, selector) => {

    const noteWrapper = document.querySelector(selector);
    noteWrapper.innerHTML = '';

    list.forEach(({id, name, created, category, content, dates}) => {
        noteWrapper.insertAdjacentHTML('beforeend', `
            <ul class="note" data-key="${id}"> 
                <li class="note-list" value=1>${name}</li>
                <li class="note-list">${created}</li>
                <li class="note-list">${category}</li>
                <li class="note-list note-content" value=2>${content}</li>
                <li class="note-list" value=3>${dates}</li>
                <div >
                    <button type="submit" class="note-button edit-done">Done</button>
                </div>
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