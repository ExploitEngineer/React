import { useNavigate } from "react-router-dom";

export default function UseNavigation() {

    const navigate = useNavigate();

    return (
        <div className="flex flex-col justify-center items-center gap-5">
            <button className="btn btn-primary" onClick={() => navigate('/')}>Home</button>
            <button className="btn btn-secondary" onClick={() => navigate('/about')}>About</button>
            <button className="btn btn-warning" onClick={() => navigate('/contact')}>Contact</button>
        </div>
    );
};
