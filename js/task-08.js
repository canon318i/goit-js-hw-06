const formRef = document.querySelector('.login-form');

const onFormSubmit = (event) => {
    event.preventDefault();
    const elems = event.currentTarget.elements;

    if ((!elems.email.value)||(!elems.password.value)) { alert('Form is not filled') }
    else {
        const res = { [elems.email.name]: elems.email.value,
                [elems.password.name]: elems.password.value,
        };
        console.log('object', res);
        formRef.reset();
        return res;
    }
}

formRef.addEventListener('submit', onFormSubmit);


