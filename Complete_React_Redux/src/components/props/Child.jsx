import PropTypes from "prop-types";

const Child = ({ name, age }) => {
    return (
        <div className="text-white font-semibold text-xl font-mono text-center">
            <p>{name} is {age} years old.</p>
        </div>
    );
};

Child.PropTypes = {
    name: PropTypes.string,
    age: PropTypes.number
};

export default Child;
