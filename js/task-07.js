const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

const onRangeChanged = () => {
    textRef.style.fontSize = inputRef.value+'px';
}

onRangeChanged();

inputRef.addEventListener('input', onRangeChanged);