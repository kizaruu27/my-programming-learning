const urlEndpoint = "https://swapi.dev/api/people/10";

// axios
//     .get(urlEndpoint)
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((error) => {
//         console.error(error.message);
//     });

const getSwapiData = async () => {
    try {
        const response = await axios.get(urlEndpoint);
        console.log(response.data);
    } catch (error) {
        console.log(error);
        console.log(error.message);
        console.log(error.response.status);
        console.log(error.response.headers);
    }
};

const getJokes = async () => {
    try {
        const config = {
            headers: {
                Accept: "application/json",
            },
        };
        const response = await axios.get("https://icanazdadjoke.com/", config);
        return response.data.joke;
    } catch (error) {
        return "No jokes avalilable";
    }
};

const addJokes = async () => {
    const jokes = await getJokes();
    const newList = document.createElement("li");
    newList.append(jokes);

    document.querySelector("ul").append(newList);
};

document.querySelector("button").addEventListener("click", addJokes);
