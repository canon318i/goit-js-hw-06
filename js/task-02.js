const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listItems = ingredients.map(createListItems);
const listRef = document.querySelector('#ingredients');

const createListItems = (ingridient) => { 
  const listItemRef = document.createElement('li');
  listItemRef.textContent = ingridient;
  listItemRef.classList.add('item');
  return listItemRef;
}

listRef.append(...listItems);