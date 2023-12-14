/* ~ ~ ~ ~ NUMBER 5 : ADD EXTERNAL API DATA ~ ~ ~ ~ */

// Fetch  API
const url = "http://www.boredapi.com/api/activity/";
async function getApi(url) {
  const response = await fetch(url);
  if (response.ok) {
    let data = await response.json();
    console.log(data);
    // Get connection with p with id random that will display activity
    const random = document.getElementById("random");
    random.textContent = data.activity;
    // Get connection with the update arrow so it can be updated
    const update = document.getElementById("update");
    update.addEventListener("click", async () => {
      let data = await getApi(url);
      if (data) {
        random.textContent = data.activity;
      }
    })
    return data;
  } else {
    console.log(response);
  }
}
getApi(url);

/* ~ ~ ~ ~ ~ ~ ~ ~ ~ E N D : 5 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ */