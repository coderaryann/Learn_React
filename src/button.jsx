
const Button = () => {

    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
        marginTop: "20px",
    }

    return(
        <button style ={styles}>Click me</button>
    );
}

export default Button