/* ~ ~ ~ ~ NUMBER 2: MAKE THE HEADING EDITABLE ~ ~ ~ ~ */

// Getting a connection with the h1.
const editable = document.getElementById('editable');

// Making it editable.
editable.contentEditable = true;

// Saving the edited text in LocalStorage.
editable.oninput = () => {localStorage.setItem("text", editable.innerHTML)};

// Load saved text from localStorage when page loads. DOWN IN THE WINDOW.ONLOAD()
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

/* ~ ~ NUMBER 3: LINKS THAT CAN BE ADDED AND DELETED ~ ~ */

// Add connection to add link button
const linkButton = document.getElementById("add-link");
// Add function on click
linkButton.addEventListener("click", showInputs);

const hidden = document.getElementsByClassName("hidden");
const hiddenArray = Array.from(hidden);

window.onload = () => {
    // Load saved text from localStorage when page loads.
    let editedText = localStorage.getItem("text");
    editable.innerHTML = editedText;

    // Load saved notes when page loads.
    let editedNotes = localStorage.getItem("notes");
    notesInput.textContent = editedNotes;

    // Get the link section
    const linkSection = document.getElementById("links");

    for (let i = 0; i < localStorage.length; i++) {
        // Get key in localStorage
        let key = localStorage.key(i);

        // If key is notes, don't include them
        if (key === "notes" || key === "text") {
            continue;
        }

        // Get value in localStorage
        let value = localStorage.getItem(key);

        // Create new link and set href, title and content values
        const newLink = document.createElement("a");
        newLink.href = value;
        newLink.title = key;
        newLink.textContent = key;
        newLink.target = "_blank";
    
        // Create delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn", "delete-btn:hover");
        deleteBtn.textContent = "Ta bort";
        // Add event listener so link can be deleted
         deleteBtn.addEventListener("click", removeLink);

        // Add the css to it
        newLink.classList.add("user-link")
        // Append new link and btn to link section
        linkSection.appendChild(newLink);
        linkSection.appendChild(deleteBtn);
    }
};


function showInputs() {
    /* Show input boxes for user to fill by:
    looping through the array and removing the "hidden" class: */
        hiddenArray.forEach(function(element) {
            element.classList.remove("hidden");
        });
    }

// Create connection to submit button 
const submit = document.getElementById("submit");
submit.addEventListener("click", addNewLink);


function addNewLink() {
     // Create connection to links section
     const linkSection = document.getElementById("links");
    // Get values from the inputs
    const linkName = document.getElementById("link-name");
    const linkUrl = document.getElementById("link-url");
    const linkValue = linkName.value;
    const urlValue = linkUrl.value;
    // Create new link and set href, title and content values
    const newLink = document.createElement("a");
    newLink.href = urlValue;
    newLink.title = linkValue;
    newLink.textContent = linkValue;
    newLink.target = "_blank";
    // Store in localStorage
    localStorage.setItem(`${linkValue}`, `${urlValue}`);
    newLink.classList.add("user-link");
    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn", "delete-btn:hover");
    deleteBtn.textContent = "Ta bort";
    // Display on page
    linkSection.appendChild(newLink);
    linkSection.appendChild(deleteBtn);
    // Add event listener so link can be deleted
    deleteBtn.addEventListener("click", removeLink);
    // Loop through the array and add the "hidden" class to the input boxes:
        hiddenArray.forEach(function(element) {
            element.classList.add("hidden");
        });
    }

    function removeLink(event) {
        // Get the link associated with the delete button
        const link = event.target.previousSibling;
        const linkValue = link.textContent;
        // Remove the link from localStorage
        localStorage.removeItem(`${linkValue}`);
        // Remove the link and delete button from the page
        link.remove();
        event.target.remove();
    }

/* ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ E N D : 3 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ */