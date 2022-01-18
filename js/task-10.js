const boxesRef = document.querySelector('#boxes');
const controlsRef = document.querySelector('#controls > input');
const createButtonRef = document.querySelector('[data-create]');
const destroyButtonRef = document.querySelector('[data-destroy]');
controlsRef.value = 1;

const createCollectionHandler = (event) => { 
  const collectionSize = controlsRef.value ?? 1;
  const collection = [];
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
}

const destroyCollectionHandler = () => { 
  boxesRef.innerHTML = '';
}

createButtonRef.addEventListener('click', createCollectionHandler);
destroyButtonRef.addEventListener('click', destroyCollectionHandler);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


