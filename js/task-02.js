const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const createListItems = (ingridient) => { 
  const listItemRef = document.createElement('li');
  listItemRef.textContent = ingridient;
  listItemRef.classList.add('item');
  return listItemRef;
}

// вариант "в одну строку"
// document.querySelector('#ingredients').append(...ingredients.map(createListItems));

// полный вариант, с использованием переменных
const listItems = ingredients.map(createListItems);
const listRef = document.querySelector('#ingredients');
listRef.append(...listItems);