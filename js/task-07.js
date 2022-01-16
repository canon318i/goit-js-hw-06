const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

const onRangeChanged = () => {
    textRef.style.fontSize = inputRef.value+'px';
}

inputRef.addEventListener('change', onRangeChanged);