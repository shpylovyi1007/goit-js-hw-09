const form = document.querySelector('.feedback-form');
const localStorageKey = "feedback-form-state";
const email = form.elements.email;
const textarea = form.elements.message;

const savedValue = JSON.parse(localStorage.getItem(localStorageKey));
if (savedValue) {
    email.value = savedValue.email || '';
    textarea.value = savedValue.message || '';
}

form.addEventListener('input', () => {
    const currentValue = {
        email: email.value,
        message: textarea.value
    };
    localStorage.setItem(localStorageKey, JSON.stringify(currentValue));
});

form.addEventListener('submit', event => {
    event.preventDefault();
    console.log(`Email: ${email.value}, message: ${textarea.value}`);
    localStorage.removeItem(localStorageKey);
    form.reset();
});
