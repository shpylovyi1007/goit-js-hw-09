const form = document.querySelector('.feedback-form');
const localStorageKey = "feedback-form-state";
const email = form.elements.email;
const textarea = form.elements.message;

const savedValue = localStorage.getItem(localStorageKey);
if (savedValue) {
    email.value = savedValue.email || '';
    textarea.value = savedValue.message || '';
}

form.addEventListener('input', () => {
    const formData = {
        email: email.value,
        message: textarea.value
    };
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
    event.preventDefault();

    if (!email.value || !textarea.value) {
        alert('Fill please all fields');
        return;
    }
    console.log(`Email: ${email.value}, message: ${textarea.value}`);
    localStorage.removeItem(localStorageKey);
    form.reset();
});
