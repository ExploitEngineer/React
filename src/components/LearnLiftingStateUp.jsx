const LearnLiftingStateUp = (props) => {

    const handleClick = (e) => {
        e.preventDefault()
        let data = "I am child Data"
        props.myClick(data)
    }
    return (
        <>
            <button type='button' className='bg-lime-400 p-4 text-white font-mono font-semibold text-xl rounded-lg' onClick={handleClick}>Click Me</button>
        </>
    )
}

export default LearnLiftingStateUp;
