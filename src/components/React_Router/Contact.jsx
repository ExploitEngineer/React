import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <>
            <h1 className="text-white font-semibold font-mono text-2xl">I am Contact Page .......</h1>
            <Link to="/"><h2 className='text-white font-mono font-semibold'>Home</h2></Link>
            <Link to="/about"><h2 className='text-white font-mono font-semibold'>About Us</h2></Link>
        </>
    )
}

export default Contact;
