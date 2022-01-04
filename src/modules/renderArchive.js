const renderArchive = (categories) => {

    const categoriesWrapper = document.querySelector('.categories');
    categoriesWrapper.innerHTML = '';

    categories.forEach(category => {
        categoriesWrapper.insertAdjacentHTML('beforeend', `
            <ul class="note"> 
                <li class="note-list">${category.category}</li>
                <li class="note-list">${category.active}</li>
                <li class="note-list">${category.archived}</li>              
            </ul>
        `)
    })    
}

export default renderArchive;