const renderArchive = (categories) => {

    const categoriesWrapper = document.querySelector('.categories');
    categoriesWrapper.innerHTML = '';

    categories.forEach(({category, active, archived}) => {
        categoriesWrapper.insertAdjacentHTML('beforeend', `
            <ul class="note"> 
                <li class="note-list">${category}</li>
                <li class="note-list">${active}</li>
                <li class="note-list">${archived}</li>              
            </ul>
        `)
    })    
}

export default renderArchive;