import renderNote from './renderNote';
import renderArchive from './renderArchive.js';

const filterNotes = (notes) => {
    const archivedNotes = [];
    const activeNotes = [];
    let categories = {};

    const filterArchivedSctive = (arr) => {
        arr.filter(item => item.archived ? archivedNotes.push(item) : activeNotes.push(item));
    }

    filterArchivedSctive(notes);
    renderNote(activeNotes, '.notes');
    renderNote(archivedNotes, '.archived-notes');

    const getCategories = () => {              
        const categoriesMap = notes.reduce((acc, { category, archived }) => {
            if (!acc[category]) {
                return {
                    ...acc,
                    [category]: {
                    category,
                    active: Number(!archived),
                    archived: Number(!!archived),
                    }
                };
            }           
            return {
                ...acc,
                [category]: {
                    ...acc[category],
                    active: acc[category].active + Number(!archived),
                    archived: acc[category].archived + Number(!!archived)
                },
            };
          }, {});         
        categories = Object.values(categoriesMap);
    }
    getCategories();
    renderArchive(categories);
}

export default filterNotes;