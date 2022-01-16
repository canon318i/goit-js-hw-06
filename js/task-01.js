
const categoryClassName = '.item';

const getCategories = (item) => {
    return document.querySelectorAll(item);
};

const showCategorySummary = (catRef) => { 
    console.log('\n');
    console.log('Category: ', catRef.querySelector('h2').textContent);
    console.log('Elements: ', catRef.querySelectorAll('li').length);
}

console.log('Number of categories: ', getCategories(categoryClassName).length);

getCategories(categoryClassName).forEach(showCategorySummary);



