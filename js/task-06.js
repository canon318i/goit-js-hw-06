const inputRef = document.querySelector('#validation-input');
const dataLength = inputRef.dataset.length;

const onInputBlur = () => {
    if (inputRef.value.length == inputRef.dataset.length) {
        if (inputRef.classList.contains('invalid')) {inputRef.classList.remove('invalid');  }
        inputRef.classList.add('valid');
    } else {
        if (inputRef.classList.contains('valid')) {inputRef.classList.remove('valid');  }
        inputRef.classList.add('invalid');
    }
}

inputRef.addEventListener('blur', onInputBlur);
