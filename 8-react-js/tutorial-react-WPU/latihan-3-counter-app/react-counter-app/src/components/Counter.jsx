/* eslint-disable react/prop-types */
export default function CounterSection({value, onDecrease, onIncrease}) {
    return (
        <>
            <button onClick={onDecrease} className="count-btn">-</button>
            {value}
            <button onClick={onIncrease} className="count-btn">+</button>
        </>
    )
}