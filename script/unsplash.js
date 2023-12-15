/* ~ ~ ~ ~ NUMBER 7 : RANDOM UNSPLASH BACKGROUND ~ ~ ~ ~ */

let data;
const id = "JKTjNuevX2_Psh5BLlJIOPPEKo_d-6QUN4BTSe8xN5w";
const unsplash = `https://api.unsplash.com/photos/random/?client_id=${id}`;

async function getApi(url) {
  const response = await fetch(url);
  if (response.ok) {
    data = await response.json(); 
    console.log(data);
    return data;
  } else {
    console.log(response);
  }
}

getApi(unsplash);

// Get connection to the body, which will hold the background image.
const body = document.body;

// Get connection with the div with id background
const bg = document.getElementById("background");

// Add event listener to bg to change background
bg.addEventListener("click", async () => {
    data = await getApi(unsplash);
  if (data) { 
    body.style.background = `url(${data.urls.raw})`;
    body.style.backgroundSize = 'cover';
    localStorage.setItem("backgroundImg", `url(${data.urls.raw})`);
    localStorage.setItem("photographer", `${data.user.name}`);
    localStorage.setItem("photoLink", `url(${data.links.html})`);
    // Add connection to photographer link
    const photographer = document.getElementById("photographer");
    // Get data
    const photographerName = data.user.name;
    const photographerLink = data.links.html;
    // Add class to style link
    photographer.classList.add("unsplash-link");
    // Add link and text on page
    photographer.textContent = `Photo by ${photographerName} on Unsplash`;
    photographer.href = photographerLink;
    photographer.target = "_blank";
  }
});

/* ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ E N D : 7 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ */