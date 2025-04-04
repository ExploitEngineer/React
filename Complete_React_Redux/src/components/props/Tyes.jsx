import PropTypes from "prop-types";

export default function Types({ name, age }) {
    return (
        <div>
            <h1>Hello my name is {name} & my age is {age}.</h1>
        </div>
    );
};

Types.PropTypes = {
    name: PropTypes.string,
    age: PropTypes.number
};
