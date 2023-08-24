const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (event) {
  event.preventDefault();
  const searchShow = form.elements.query.value;
  const result = await axios.get(
    `https://api.tvmaze.com/search/shows?q=${searchShow}`
  );
  addImage(result.data);
});

const addImage = (shows) => {
  for (let show of shows) {
    if (show.show.image) {
      const img = document.createElement("IMG");
      img.src = show.show.image.medium;
      document.body.append(img);
    }
  }
};
