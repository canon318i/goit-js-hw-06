const itemRef = document.querySelectorAll('.item');

const showCategorySummary = (catRef) => { 
    console.log('\n');
    console.log('Category: ', catRef.firstElementChild.textContent);
    console.log('Elements: ', catRef.firstElementChild.nextElementSibling.children.length);
}

console.log('Number of categories: ', itemRef.length);

itemRef.forEach(showCategorySummary);


// const showCategorySummary = (catRef) => { 
//     console.log('\n');
//     console.log('Category: ', catRef.querySelector('h2').textContent);
//     console.log('Elements: ', catRef.querySelectorAll('li').length);
// }
