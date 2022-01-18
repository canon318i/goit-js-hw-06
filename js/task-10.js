const boxesRef = document.querySelector('#boxes');
const controlsRef = document.querySelector('#controls > input');
const createButtonRef = document.querySelector('[data-create]');
const destroyButtonRef = document.querySelector('[data-destroy]');

const createCollectionHandler = (event) => { 
  if (!(controlsRef.value)) return alert('Please enter a Number');
  const collection = [];
  const collectionSize = controlsRef.value;
  var size = 30;

  for (let index = 0; index < collectionSize; index++) {
    const elem = document.createElement('div');
    elem.style.backgroundColor = getRandomHexColor();
    elem.style.height = size + 'px';
    elem.style.width = size + 'px';
    size += 10;
    collection.push(elem);
  }
  boxesRef.append(...collection);
  controlsRef.value = '';
}

const destroyCollectionHandler = () => { 
  boxesRef.innerHTML = '';
  controlsRef.value = '';
}

createButtonRef.addEventListener('click', createCollectionHandler);
destroyButtonRef.addEventListener('click', destroyCollectionHandler);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


