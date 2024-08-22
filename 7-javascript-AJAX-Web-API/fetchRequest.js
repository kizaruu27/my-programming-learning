// Request with fetch
fetch("https://swapi.dev/api/people/10")
    .then((res) => {
        if (!res.ok) throw Error("Could not fetch data for that resource!");
        return res.json();
    })
    .then((data) => {
        console.log("Response 1", data);
        return fetch("https://swapi.dev/api/people/3");
    })
    .then((res) => {
        if (!res.ok) throw Error("Could not fetch data for that resource");
        return res.json();
    })
    .then((data) => {
        console.log("Response 2", data);
    })
    .catch((error) => {
        console.log("error", error);
    });

// using fetch in function
const loadData = async () => {
    try {
        const response = await fetch("https://swapi.dev/api/peopwwle/10");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};
