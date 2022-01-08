export const filterArchivedActive = (arr, archive, active) => {
    arr.forEach(item => item.archived ? archive.push(item) : active.push(item));
}

export const filterCategories = (notes) => {              
    const categoriesMap = notes.reduce((acc, {category, archived}) => {
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
    const arr = Object.values(categoriesMap);
    return arr;   
}