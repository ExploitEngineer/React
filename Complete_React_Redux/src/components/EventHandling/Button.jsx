export default function Button() {

    const handleClick = (e) => {
        e.target.textContent = 'Ouch 🤕';
    }

    return (<button onClick={(e) => handleClick(e)} className="btn btn-primary">Click me 😇</button>)
}
