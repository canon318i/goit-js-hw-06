var counterValue = 0;

const decrementButtonRef = document.querySelector('[data-action="decrement"]');
const incrementButtonRef = document.querySelector('[data-action="increment"]');
const counterTextRef = document.querySelector('#value');

const onDecrementButtomnClick = () => {
    counterValue -= 1;
    counterTextRef.textContent = counterValue;
};

const onIncrementButtomnClick = () => {
    counterValue += 1;
    counterTextRef.textContent = counterValue;
};

decrementButtonRef.addEventListener('click', onDecrementButtomnClick);
incrementButtonRef.addEventListener('click', onIncrementButtomnClick);


