import { Link, useLocation } from 'react-router-dom';

const About = () => {

    const location = useLocation();
    console.log(location.state)

    return (
        <>
            <h1 className="text-white font-semibold font-mono text-2xl">I am About Page .......</h1>
            <h1 className="text-white font-semibold font-mono text-xl">I am About Page & my id is {location.state.id}</h1>
            <Link to="/"><h2 className='text-white font-mono font-semibold'>Home</h2></Link>
            <Link to="/contact"><h2 className='text-white font-mono font-semibold'>Contact Us</h2></Link>
        </>
    )
}

export default About;
