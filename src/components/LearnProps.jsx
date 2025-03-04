// const LearnProps = (props) => {
//     return (
//         <>
//             <h1 className='text-white text-2xl font-mono font-bold'>All Props</h1>
//             <h1 className='text-white font-semibold font-mono text-xl'>{props.name}</h1>
//             <h1 className='text-white font-semibold font-mono text-xl'>{props.roll}</h1>
//         </>
//     )
// }
const LearnProps = ({name, roll}) => {
    return (
        <>
            <h1 className='text-white text-2xl font-mono font-bold'>All Props</h1>
            <h1 className='text-white font-semibold font-mono text-xl'>{name}</h1>
            <h1 className='text-white font-semibold font-mono text-xl'>{roll}</h1>
        </>
    )
}

export default LearnProps;
