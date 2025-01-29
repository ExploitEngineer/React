import { Link, useNavigate } from 'react-router-dom';

const Home = () => {

    const id = 5;

    const navigate = useNavigate();
    function goToAbout() {
        navigate("/about", { state: { newid: id } });
    }

    return (
        <>
            <h1 className="text-white font-semibold font-mono text-2xl">I am Home Page .....</h1>
            {/* <Link to="/about"><h2 className='text-white font-mono font-semibold'>About</h2></Link>
            <Link to="/contact"><h2 className='text-white font-mono font-semibold'>Contact Us</h2></Link> */}
            <button type='button' onClick={goToAbout} className='bg-white px-3 py-1 rounded-xl font-mono font-semibold'>About</button>
        </>
    )
}

export default Home;
