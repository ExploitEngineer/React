import { Link, useNavigate, useLocation } from "react-router-dom";

const Contact = () => {

    const navigate = useNavigate();

    const location = useLocation();

    function navigatePage() {
        navigate('/');
        navigate('/about');
    }

    return (
        <>
            <button type='button' onClick={navigatePage} className='px-4 py-1 bg-red-600 font-semibold font-mono text-white rounded-lg'>Home</button>
            <button type='button' onClick={navigatePage} className='px-4 py-1 bg-red-600 font-semibold font-mono text-white rounded-lg'>About</button>
            <h1 className="text-white font-semibold font-mono text-2xl">I am Contact Page .......</h1>
            <br />
            <p className="text-white">{location.state.id}</p>
            {/* <Link to='/' className='bg-white px-3 py-1 rounded-xl font-mono font-semibold'>Home</Link>
            <Link to='/about' className='bg-white px-3 py-1 rounded-xl font-mono font-semibold'>About</Link> */}
        </>
    )
}

export default Contact;
