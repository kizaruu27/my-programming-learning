const form = document.querySelector("#search-form");
const imageContainer = document.createElement("div");
imageContainer.id = "image-container";
document.body.append(imageContainer);

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const keyword = form.elements.query.value;
    const config = {
        params: { q: keyword },
    };

    const response = await axios.get(
        "https://api.tvmaze.com/search/shows",
        config
    );
    getImage(response.data);
});

const getImage = (shows) => {
    const container = document.querySelector("#image-container");
    container.innerHTML = "";

    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement("img");
            img.src = result.show.image.medium;
            container.append(img);
        }
    }
};
