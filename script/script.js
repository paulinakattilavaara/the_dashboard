/* ~ ~ ~ ~ NUMBER 2: MAKE THE HEADING EDITABLE ~ ~ ~ ~ */

// Getting a connection with the h1.
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
/* ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ E N D : 2 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ */


/* ~ ~ ~ ~ NUMBER 6: CREATE TEXTAREA FOR USERS NOTES ~ ~ ~ ~ */
// Getting a connection with textarea
const notesInput = document.getElementById("notesInput");

// Save inputvalue in localStorage.
notesInput.oninput = () => {localStorage.setItem("notes", notesInput.value)};

// Load saved text when page loads.
window.onload = () => {
    let editedNotes = localStorage.getItem("notes");
    notesInput.textContent = editedNotes;
}
/* ~ ~ ~ ~ ~ ~ ~ ~ ~ E N D : 6 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ */


/* ~ ~ ~ ~ NUMBER 1: SHOW CURRENT TIME AND DATE ~ ~ ~ ~ */

// Getting a connection with the time p in html
const time = document.getElementById("timeP");
// Setting an interval for 1 second so the clock changes every second
setInterval(() => {
    const newDate = new Date();
    time.innerHTML = newDate.toLocaleTimeString();
}, 1000)

// Getting a connection with date paragraph in html
const todaysDate = document.getElementById("date");
// Creating a new date 
const newDay = new Date();
todaysDate.innerHTML = newDay.toLocaleDateString();

/* ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ E N D : 1 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ */