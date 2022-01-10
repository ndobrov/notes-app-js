import renderNote from './renderNote';
import renderArchive from './renderArchive';
import addListeners from './addListeners';
import { filterArchivedActive, filterCategories } from './filters';

const filterNotes = (notes) => {
    const archivedNotes = [];
    const activeNotes = [];

    filterArchivedActive(notes, archivedNotes, activeNotes);
    
    renderNote(activeNotes, '.notes');
    renderNote(archivedNotes, '.archived-notes');
    renderArchive(filterCategories(notes));

    addListeners();
}

export default filterNotes;