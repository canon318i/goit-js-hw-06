const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

const onInputChanged = () => {
    spanRef.textContent = inputRef.value || "Anonymous"
}
    
inputRef.addEventListener('input', onInputChanged);

