const joKe = document.getElementById("joke");
const author = document.getElementById("author");
const button = document.querySelector("button");
let apiUrl = "https://api.quotable.io/random";

async function loadquote(url) {
  try {
    let response = await fetch(url);

    if (response.ok) {
      let data = await response.json();

      console.log(data);
      joKe.innerHTML = data.content;
      author.innerHTML = data.author;
    }
  } catch (err) {
    console.error("Error fetching quote", err);
  }
}

loadquote(apiUrl);
