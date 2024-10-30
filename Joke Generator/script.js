const jokeBtn = document.getElementById("jokebtn");
const loading = document.getElementById("loading");
const firstjoke = document.getElementById("firstjoke");
const joke = document.getElementById("joke");

jokeBtn.addEventListener("click", loadingfun);

function loadingfun() {
  joke.textContent = "";
  firstjoke.classList.add("hidden");
  loading.classList.remove("hidden");
  setTimeout(() => {
    loading.classList.add("hidden");
    genrator();
  }, 2000);
}

function genrator() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((res) => res.json())
    .then((data) => showjoke(data.value));
}
function showjoke(res) {
  joke.classList.remove("hidden");
  joke.textContent = res;
}
