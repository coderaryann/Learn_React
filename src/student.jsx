import PropTypes from 'prop-types';

const Student = ({name = "unknown", age = 0, isStudent = false}) => {

      const styles = {
        width: "150px",
        border: "1px solid black",
        borderRadius: "10px",
        padding: "10px",
        margin: "10px"
      }
      const pstyles = {
        margin: "0",
      }

    return (
        <div style={styles}>
            <p style={pstyles}>Name: {name}</p>
            <p style={pstyles}>Age: {age}</p>
            <p style={pstyles}>Student: {isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isStudent: PropTypes.bool.isRequired,
};

// Student.defaultProps = {
//     name: "Unknown",
//     age: 0,
//     isStudent: false,
// };

export default Student;