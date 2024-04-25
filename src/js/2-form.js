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
    const formData = {
        email: email.value.trim(),
        message: textarea.value.trim()
    };
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
    event.preventDefault();

    if (!email.value || !textarea.value) {
        alert('Fill please all fields');
        return;
    }
    console.log({ email: email.value.trim(), message: textarea.value.trim() });
    localStorage.removeItem(localStorageKey);
    form.reset();
});
