function LoopingArticles() { // jika ingin melakukan looping sebuah data berupa array
    const names = ['Bambang', 'Ujang', 'Ridwan'];
    return (
        <>
            <h2>Looping Data</h2>
            {names.map((nama) => {
                return (
                    <>
                        <p>Nama Saya Adalah {nama}</p>
                    </>
                );
            })}
            <br />
        </>
    );
}

export default LoopingArticles;