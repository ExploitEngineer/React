import { Link, useNavigate } from "react-router-dom";

const About = () => {

    const navigate = useNavigate();

    function navigatePage() {
        navigate('/');
        navigate('/contact');
    }

    return (
        <>
            <h1 className="text-white font-semibold font-mono text-2xl">I am About Page .......</h1>
            <h1 className="text-white font-semibold font-mono text-xl">I am About Page & my id is</h1>
            <button type='button' onClick={navigatePage} className='px-4 py-1 bg-red-600 font-semibold font-mono text-white rounded-lg'>Home</button>
            <button type='button' onClick={navigatePage} className='px-4 py-1 bg-red-600 font-semibold font-mono text-white rounded-lg'>Contact</button>
            {/* <Link to='/contact' className='bg-white px-3 py-1 rounded-xl font-mono font-semibold'>Contat</Link>
            <Link to='/' className='bg-white px-3 py-1 rounded-xl font-mono font-semibold'>Home</Link> */}
        </>
    )
}

export default About;
