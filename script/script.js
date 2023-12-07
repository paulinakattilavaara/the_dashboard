/*NUMBER 2: MAKE THE HEADING EDITABLE
 Getting a connection with the h1. */
const editable = document.getElementById('editable');

// Making it editable.
editable.contentEditable = true;

// Saving the edited text in LocalStorage.
editable.oninput = () => {localStorage.setItem("text", editable.innerHTML)};

// Load saved text from localStorage when page loads.
window.onload = () => {
    let editedText = localStorage.getItem("text");
    editable.innerHTML = editedText;
};