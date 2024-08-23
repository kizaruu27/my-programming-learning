const getHeroes = async () => {
    const urlEndpoint = "http://gateway.marvel.com/v1/public/characters";
    const ts = new Date().getTime();
    const publicKey = "ab5e1810b876a218c5c584926465b4e5";
    const privateKey = "d3999e28fe0b94b372ed085007a208730f536149";
    const stringToHash = ts + privateKey + publicKey;
    const hash = CryptoJS.MD5(stringToHash).toString();
    const params = { ts, apikey: publicKey, hash };
    const queryString = new URLSearchParams(params).toString();

    const fullURL = `${urlEndpoint}?${queryString}`;
    console.log("Fetching heroes data....");

    await fetch(fullURL)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error(error);
        });
};

getHeroes();
