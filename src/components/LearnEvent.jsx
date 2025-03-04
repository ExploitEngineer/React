const LearnEvent = () => {
    const handleClick = (e) => {
        e.preventDefault()
        console.log("Button Clicked 1");
    }

    const handleClick2 = (myid) => {
        console.log("Button Clicked 2", myid)
    }

    return (
        <>
            {/* Without Argument */}
            <button type='button' className='p-3 rounded-lg bg-purple-500 text-white font-semibold text-xl font-mono' onClick={handleClick}>Click</button>

            {/* With Argument */}
            <button type='button' className='p-3 rounded-lg bg-yellow-300 text-white font-semibold text-xl font-mono' onClick={(e) => handleClick2("MYID")}>Click</button>
        </>
    )
}

export default LearnEvent;
