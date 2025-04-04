export default function UserGreeting(props) {

    const { isLoggedIn, username } = props;

    const welcomeMessage = <h2 className="bg-green-600 p-5 rounded-xl">Welcome {username}</h2>;
    const loginPrompt = <h2 className="bg-red-600 p-5 rounded-xl">Please login to continue!</h2>;

    return (isLoggedIn ? welcomeMessage : loginPrompt)
};
