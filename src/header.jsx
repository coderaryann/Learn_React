// import HeaderStyle from './header.css';

function header() {
    // return <header><h1>This is Header</h1></header>;
    return (
        <>
            <header>
                <h1>My Website</h1>
                <nav>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                            <a href="#">About</a>
                            <a href="#">Services</a>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
                <hr />
            </header>
        </>
    );
}

export default header;