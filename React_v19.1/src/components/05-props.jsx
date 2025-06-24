// Props, Default Props & PropTypes
import PropTypes from "prop-types";

export function Props({ name = "guest", age = 17 }) {
  return (
    <div className="text-white text-xl font-bold">
      <h1>Hello {name}</h1>
      <h3>My age is {age}</h3>
    </div>
  );
}

Props.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
};
