import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <h1 className="text-white font-semibold font-mono text-2xl">I am Home Page .....</h1>
            <Link to="/about"><h2 className='text-white font-mono font-semibold'>About</h2></Link>
            <Link to="/contact"><h2 className='text-white font-mono font-semibold'>Contact Us</h2></Link>
        </>
    )
}

export default Home;
