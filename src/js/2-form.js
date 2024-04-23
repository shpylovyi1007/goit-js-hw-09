const form = document.querySelector('.feedback-form');
const localStorageKey = "feedback-form-state";
const email = form.elements.email;
const textarea = form.elements.message;
email.value = localStorage.getItem(localStorageKey) ?? "";
textarea.value = localStorage.getItem(localStorageKey) ?? "";

form.addEventListener('input', event => {
    localStorage.setItem(localStorageKey, event.target.value);
});

form.addEventListener('submit', event => {
    event.preventDefault();
    console.log(`Email: ${email.value}, message: ${textarea.value}`);
    localStorage.removeItem(localStorageKey);
    form.reset();
});
