const getHeroesData = async () => {
    const urlEndpoint = "http://gateway.marvel.com/v1/public/characters";
    const ts = new Date().getTime();
    const publicKey = "ab5e1810b876a218c5c584926465b4e5";
    const privateKey = "d3999e28fe0b94b372ed085007a208730f536149";
    const stringToHash = ts + privateKey + publicKey;
    const hash = CryptoJS.MD5(stringToHash).toString();

    const config = {
        params: {
            ts,
            apikey: publicKey,
            hash,
        },
    };

    const response = await axios.get(urlEndpoint, config);
    console.log(response.data);
};

getHeroesData();
