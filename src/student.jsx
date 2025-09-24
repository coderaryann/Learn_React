

import PropTypes from 'prop-types';

const Student = (props) => {

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
            <p style={pstyles}>Name: {props.name}</p>
            <p style={pstyles}>Age: {props.age}</p>
            <p style={pstyles}>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isStudent: PropTypes.bool.isRequired,
};
<Student />

Student.defaultProps = {
    name: "Unknown",
    age: 0,
    isStudent: false,
};

export default Student;