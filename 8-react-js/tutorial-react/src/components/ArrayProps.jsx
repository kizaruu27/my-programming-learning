function ArrayProps (props) {
    return (
        <>
            <h2>Property Berupa Array</h2>
            {props.jobs.map((job) => {
                return <p>Hari ini saya mengerjakan {job}</p>;
            })}
        </>
    );
}

export default ArrayProps;