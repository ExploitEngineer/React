import { Link, useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    const id = 10;

    function navigatePage() {
        navigate("/about");
        navigate("/contact", { state: { id: id } });
    }

    return (
        <>
            <h1 className="text-white font-semibold font-mono text-2xl">I am Home Page .....</h1>
            <button type='button' onClick={navigatePage} className='px-4 py-1 bg-red-600 font-semibold font-mono text-white rounded-lg'>About</button>
            <button type='button' onClick={navigatePage} className='px-4 py-1 bg-red-600 font-semibold font-mono text-white rounded-lg'>Contact</button>
            {/* <Link to='/about' className='bg-white px-3 py-1 rounded-xl font-mono font-semibold'>About</Link>
            <Link to='/contact' className='bg-white px-3 py-1 rounded-xl font-mono font-semibold'>Contat</Link> */}
        </>
    )
}

export default Home;
