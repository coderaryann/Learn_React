import PropTypes from "prop-types";

const UserGreeting = ({ username = "Guest", isLoggedIn = false }) => {
    if (isLoggedIn) {
        return <h2>Welcome {username}!</h2>;
    }
    else {
        return <h2>Please log in to continue</h2>;
    }
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
};
export default UserGreeting;