const formRef = document.querySelector('.login-form');

const onFormSubmit = (event) => {
    event.preventDefault();
    const elems = [...event.currentTarget.elements].filter(element => element.nodeName === 'INPUT');
    if (elems.some(element => (element.value === ''))) return alert('Form is not filled');
    
    const res = elems.reduce((acc, elem) => { acc[elem.name] = elem.value; return acc; }, {});
    
    event.currentTarget.reset();
    console.log(res);
    return res;
}

formRef.addEventListener('submit', onFormSubmit);

// старая реализация
// const onFormSubmit = (event) => {
//     event.preventDefault();
//     const elems = event.currentTarget.elements;
//     if ((!elems.email.value)||(!elems.password.value)) { alert('Form is not filled') }
//     else {
//         const res = { [elems.email.name]: elems.email.value,
//                 [elems.password.name]: elems.password.value,
//         };
//         console.log('object', res);
//         event.currentTarget.reset();
//         return res;
//     }
// }
