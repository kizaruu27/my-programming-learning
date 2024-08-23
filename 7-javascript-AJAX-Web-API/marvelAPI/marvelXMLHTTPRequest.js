const getHeroes = () => {
    const urlEndpoint = "http://gateway.marvel.com/v1/public/characters";
    const ts = new Date().getTime();
    const publicKey = "ab5e1810b876a218c5c584926465b4e5";
    const privateKey = "d3999e28fe0b94b372ed085007a208730f536149";
    const stringToHash = ts + privateKey + publicKey;
    const hash = CryptoJS.MD5(stringToHash).toString();
    const params = { ts, apikey: publicKey, hash };
    const queryString = new URLSearchParams(params).toString();
    const fullURL = `${urlEndpoint}?${queryString}`;

    console.log("Fetching...");

    const response = new XMLHttpRequest();
    response.open("GET", fullURL);
    response.onload = function () {
        const data = JSON.parse(this.response);
        console.log(data);
    };

    response.onerror = function () {
        console.log(this);
    };

    response.send();
};

getHeroes();
