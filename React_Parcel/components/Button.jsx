const button = ({ imageUrl, buttonName, clickHandler }) => {
    return (
        <>
            <button onClick={clickHandler} type="button">
                <img src={imageUrl} width="50" height="30" alt={buttonName} />
            </button>
        </>
    )
}

export default button;
